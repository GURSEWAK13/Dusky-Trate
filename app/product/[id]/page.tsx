"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/context/cart-context"
import { Check, ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react"
import ProductViewer3D from "@/components/product-viewer-3d"

// Mock product data - in a real app, this would come from an API or database
const product = {
  id: 1,
  name: "Birthday Pup Cake",
  description:
    "A festive cake made with peanut butter and pumpkin, perfect for birthdays. This wholesome treat is designed specifically for dogs to enjoy safely during special celebrations.",
  longDescription:
    "Our Birthday Pup Cake is the perfect way to celebrate your furry friend's special day. Made with wholesome ingredients like organic peanut butter, pumpkin puree, and oat flour, this cake is not only delicious but also nutritionally balanced for your dog. The yogurt-based frosting adds a creamy touch that dogs love, while being gentle on their digestive system. Each cake is handcrafted with care in our dedicated dog bakery, ensuring the highest quality and safety standards.",
  price: 29.99,
  images: [
    "https://i.pinimg.com/736x/14/54/cd/1454cdd428c4153418b8d8b58e772f96.jpg",
    "https://i.pinimg.com/736x/13/f3/41/13f34171de18c58692725b00190fb1a8.jpg",
    "https://i.pinimg.com/736x/72/d1/1e/72d11e916c350a0fb6bb2000082efc16.jpg",
    "https://i.pinimg.com/736x/11/c4/92/11c4923d992e848107d8d83dca49ef57.jpg",
  ],
  badge: "Bestseller",
  category: "Birthday",
  dietary: ["Grain-Free", "Sugar-Free"],
  rating: 4.8,
  reviewCount: 124,
  ingredients: [
    { name: "Organic Peanut Butter", benefits: "Rich in protein and healthy fats" },
    { name: "Pumpkin Puree", benefits: "High in fiber and vitamins" },
    { name: "Oat Flour", benefits: "Easily digestible carbohydrate source" },
    { name: "Greek Yogurt", benefits: "Probiotic-rich and good for digestion" },
    { name: "Honey", benefits: "Natural sweetener in small amounts" },
    { name: "Coconut Oil", benefits: "Supports skin and coat health" },
  ],
  nutritionalInfo: {
    servingSize: "1/8 of cake",
    calories: 120,
    protein: "4g",
    fat: "7g",
    carbohydrates: "12g",
    fiber: "2g",
  },
  sizes: [
    { name: 'Small (4")', price: 24.99, servings: "1-2 dogs" },
    { name: 'Medium (6")', price: 29.99, servings: "2-4 dogs" },
    { name: 'Large (8")', price: 34.99, servings: "4-6 dogs" },
    { name: 'Party Size (10")', price: 39.99, servings: "6+ dogs" },
  ],
  relatedProducts: [2, 3, 6, 8],
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('Medium (6")')
  const [quantity, setQuantity] = useState(1)
  const [showModel, setShowModel] = useState(false)

  const { toast } = useToast()
  const { addToCart } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.sizes.find((size) => size.name === selectedSize)?.price || product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    })
  }

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (action === "increase") {
      setQuantity(quantity + 1)
    }
  }

  const currentPrice = product.sizes.find((size) => size.name === selectedSize)?.price || product.price

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-6 flex items-center text-muted-foreground hover:text-foreground"
          onClick={() => router.back()}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden border">
              {showModel ? (
                <ProductViewer3D />
              ) : (
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              )}
              {product.badge && <Badge className="absolute top-4 right-4 bg-amber-600">{product.badge}</Badge>}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-20 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-amber-600" : "border-transparent"
                    }`}
                    onClick={() => {
                      setSelectedImage(index)
                      setShowModel(false)
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <Button variant="outline" className="text-sm" onClick={() => setShowModel(!showModel)}>
                {showModel ? "View Photos" : "View in 3D"}
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Badge variant="outline" className="mr-2">
                  {product.category}
                </Badge>
                {product.dietary.map((diet) => (
                  <Badge key={diet} variant="outline" className="mr-2">
                    {diet}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-500 fill-amber-500"
                          : i < product.rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-2xl font-bold text-amber-600 mb-4">${currentPrice.toFixed(2)}</p>

              <p className="text-muted-foreground mb-6">{product.description}</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      className={`flex flex-col items-start p-3 border rounded-md transition-all ${
                        selectedSize === size.name
                          ? "border-amber-600 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                      onClick={() => setSelectedSize(size.name)}
                    >
                      <span className="font-medium">{size.name}</span>
                      <div className="flex justify-between w-full mt-1">
                        <span className="text-sm text-muted-foreground">Serves {size.servings}</span>
                        <span className="text-sm font-medium">${size.price.toFixed(2)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange("increase")}>
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700 h-12 text-base" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="h-12">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Made fresh to order</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>100% dog-safe ingredients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="mb-4">{product.longDescription}</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Serving Suggestions</h4>
              <p className="mb-4">
                For the best experience, allow the cake to come to room temperature before serving. Cut into appropriate
                portions based on your dog's size. This cake can be refrigerated for up to 5 days or frozen for up to 3
                months.
              </p>

              <h4 className="text-lg font-medium mt-6 mb-2">Special Occasions</h4>
              <p>
                Perfect for birthdays, adoption anniversaries, or any special celebration with your furry friend. The
                cake can be customized with your dog's name or a special message - just add a note during checkout.
              </p>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <p className="mb-6 text-muted-foreground">
                All ingredients are human-grade and specifically chosen to be safe and healthy for dogs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start p-4 border rounded-md">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{ingredient.name}</h4>
                      <p className="text-sm text-muted-foreground">{ingredient.benefits}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-md">
                <h4 className="font-medium mb-2">Allergen Information</h4>
                <p className="text-sm">
                  This product contains peanuts. Made in a facility that processes other nuts and grains. If your dog
                  has specific allergies, please check our customization options or contact us for special dietary
                  requirements.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
              <p className="mb-6 text-muted-foreground">
                Our cakes are designed to be occasional treats as part of a balanced diet for your dog.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Nutrition Facts</h4>
                <div className="border rounded-md overflow-hidden">
                  <div className="p-4 border-b bg-gray-50">
                    <p className="font-medium">Serving Size: {product.nutritionalInfo.servingSize}</p>
                  </div>
                  <div className="divide-y">
                    <div className="p-4 flex justify-between">
                      <span>Calories</span>
                      <span className="font-medium">{product.nutritionalInfo.calories}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">{product.nutritionalInfo.protein}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span>Fat</span>
                      <span className="font-medium">{product.nutritionalInfo.fat}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span>Carbohydrates</span>
                      <span className="font-medium">{product.nutritionalInfo.carbohydrates}</span>
                    </div>
                    <div className="p-4 flex justify-between">
                      <span>Fiber</span>
                      <span className="font-medium">{product.nutritionalInfo.fiber}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3">Feeding Guidelines</h4>
                <p className="mb-4">
                  Treats should make up no more than 10% of your dog's daily caloric intake. The remaining 90% should
                  come from a complete and balanced diet.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="small-dogs">
                    <AccordionTrigger>Small Dogs (up to 20 lbs)</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        <li>• Daily caloric needs: 200-400 calories</li>
                        <li>• Recommended treat portion: 20-40 calories</li>
                        <li>• DUSKY-TARTE serving: 1/8 of a small cake</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="medium-dogs">
                    <AccordionTrigger>Medium Dogs (20-50 lbs)</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        <li>• Daily caloric needs: 400-900 calories</li>
                        <li>• Recommended treat portion: 40-90 calories</li>
                        <li>• DUSKY-TARTE serving: 1/4 of a small cake</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="large-dogs">
                    <AccordionTrigger>Large Dogs (50+ lbs)</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        <li>• Daily caloric needs: 900-1500+ calories</li>
                        <li>• Recommended treat portion: 90-150 calories</li>
                        <li>• DUSKY-TARTE serving: 1/2 of a small cake</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>

              <div className="flex items-center mb-8">
                <div className="mr-4">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-500 fill-amber-500"
                            : i < product.rating
                              ? "text-amber-500 fill-amber-500"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">{product.reviewCount} reviews</div>
                </div>

                <div className="flex-1 max-w-md">
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <span className="text-sm w-6">{star}</span>
                        <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full"
                            style={{
                              width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground w-8">
                          {star === 5 ? "70%" : star === 4 ? "20%" : star === 3 ? "7%" : star === 2 ? "2%" : "1%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Filter Reviews</h4>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    All
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    5 Star
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    4 Star
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    3 Star
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    2 Star
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    1 Star
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-amber-50">
                    With Photos
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                {/* Sample reviews */}
                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">2 weeks ago</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="mb-4">
                    Max absolutely loved his birthday cake! It was his first birthday celebration with a cake he could
                    actually eat, and seeing his excitement was priceless. The cake arrived fresh and looked exactly
                    like the photos. Will definitely order again next year!
                  </p>
                  <div className="flex gap-2 mb-4">
                    <div className="h-16 w-16 relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Review photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="h-16 w-16 relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Review photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 h-auto"
                  >
                    Helpful (12)
                  </Button>
                </div>

                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">James K.</div>
                    <div className="text-sm text-muted-foreground">1 month ago</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                    {[...Array(1)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                  <p className="mb-4">
                    Bella enjoyed her cake, though it was a bit crumbly. The flavor seemed to be a hit, and I
                    appreciated that it didn't cause any digestive issues. Would have given 5 stars if the texture was a
                    bit more moist, but overall a good product.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 h-auto"
                  >
                    Helpful (5)
                  </Button>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Emily R.</div>
                    <div className="text-sm text-muted-foreground">2 months ago</div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="mb-4">
                    Cooper has food sensitivities, so finding a cake he could enjoy was challenging until we discovered
                    DUSKY-TARTE. Their customization options allowed us to avoid his trigger ingredients while still
                    giving him a delicious treat. The customer service was excellent too - they followed up to make sure
                    the cake met our needs.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <div className="h-16 w-16 relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Review photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 h-auto"
                  >
                    Helpful (8)
                  </Button>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[2, 3, 6, 8].map((id) => (
              <Link href={`/product/${id}`} key={id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square bg-white rounded-lg overflow-hidden border group-hover:shadow-md transition-all">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Related product"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium group-hover:text-amber-600 transition-colors">
                      {id === 2
                        ? "Carrot Delight"
                        : id === 3
                          ? "Apple Crunch"
                          : id === 6
                            ? "Celebration Cake"
                            : "Mini Treat Pack"}
                    </h3>
                    <p className="text-amber-600 font-medium mt-1">
                      ${id === 2 ? "24.99" : id === 3 ? "22.99" : id === 6 ? "34.99" : "21.99"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

