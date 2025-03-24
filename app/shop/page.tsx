"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

// Mock product data
const allProducts = [
  {
    id: 1,
    name: "Birthday Pup Cake",
    description: "A festive cake made with peanut butter and pumpkin, perfect for birthdays.",
    price: 29.99,
    image: "https://i.pinimg.com/736x/90/d1/13/90d113fa812d12264bdca804dd028eec.jpg",
    badge: "Bestseller",
    category: "Birthday",
    dietary: ["Grain-Free", "Sugar-Free"],
  },
  {
    id: 2,
    name: "Carrot Delight",
    description: "Carrot-based cake with yogurt frosting, rich in vitamins and minerals.",
    price: 24.99,
    image: "https://i.pinimg.com/736x/44/ad/67/44ad67fc7f9eb01f4f8a5a87ef157b52.jpg",
    badge: "New",
    category: "Everyday",
    dietary: ["Vegan", "Sugar-Free"],
  },
  {
    id: 3,
    name: "Apple Crunch",
    description: "Fresh apple cake with a crunchy oat topping that dogs love.",
    price: 22.99,
    image: "https://i.pinimg.com/736x/ca/74/50/ca74507c696129233bc4933e8c36f95b.jpg",
    category: "Everyday",
    dietary: ["Grain-Free"],
  },
  {
    id: 4,
    name: "Banana Bark",
    description: "Banana-flavored cake with a coconut 'bark' frosting, grain-free option.",
    price: 26.99,
    image: "https://i.pinimg.com/736x/0a/cb/23/0acb236916b9910455730b61df3a915c.jpg",
    category: "Special Occasion",
    dietary: ["Grain-Free", "Sugar-Free"],
  },
  {
    id: 5,
    name: "Pumpkin Pupcake",
    description: "Individual cupcakes made with pumpkin and cinnamon, perfect for small celebrations.",
    price: 18.99,
    image: "https://i.pinimg.com/736x/62/2d/3e/622d3e8a97d22b03cbe9da316dda53f4.jpg",
    category: "Cupcakes",
    dietary: ["Vegan"],
  },
  {
    id: 6,
    name: "Celebration Cake",
    description: "A larger cake designed for parties, with customizable decorations.",
    price: 34.99,
    image: "https://i.pinimg.com/736x/ed/d6/d7/edd6d722d3324eddc557cafd343c0943.jpg",
    category: "Birthday",
    dietary: ["Sugar-Free"],
  },
  {
    id: 7,
    name: "Berry Good Boy",
    description: "A fruity cake with dog-safe berries and yogurt frosting.",
    price: 28.99,
    image: "https://i.pinimg.com/736x/7e/6a/bd/7e6abd9f219c111afd63bf15c1aa63e7.jpg",
    category: "Special Occasion",
    dietary: ["Grain-Free"],
  },
  {
    id: 8,
    name: "Mini Treat Pack",
    description: "A set of 6 mini cupcakes in assorted flavors for your pup to try.",
    price: 21.99,
    image: "https://i.pinimg.com/736x/df/57/92/df579235b0e36a741265e5efabe1748f.jpg",
    badge: "Value Pack",
    category: "Cupcakes",
    dietary: ["Vegan", "Sugar-Free"],
  },
];


export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [products, setProducts] = useState(allProducts)
  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    dietary: [],
    priceRange: null,
    searchQuery: "",
  })
  const [sortOption, setSortOption] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...allProducts]

    // Apply category filter
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category.toLowerCase()),
      )
    }

    // Apply dietary filter
    if (filters.dietary.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.dietary.some((diet) => product.dietary.includes(diet)),
      )
    }

    // Apply price range filter
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter((product) => {
        if (filters.priceRange === "under-20") return product.price < 20
        if (filters.priceRange === "20-30") return product.price >= 20 && product.price <= 30
        if (filters.priceRange === "over-30") return product.price > 30
        return true
      })
    }

    // Apply search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Apply sorting
    if (sortOption === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortOption === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price)
    } else if (sortOption === "newest") {
      // In a real app, you would sort by date added
      // For this example, we'll just reverse the array to simulate "newest"
      filteredProducts.reverse()
    }

    setProducts(filteredProducts)
  }, [filters, sortOption, categoryParam])

  // Update filters when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setFilters((prev) => ({
        ...prev,
        categories: [categoryParam],
      }))
    }
  }, [categoryParam])

  const handleCategoryChange = (category, checked) => {
    setFilters((prev) => ({
      ...prev,
      categories: checked ? [...prev.categories, category] : prev.categories.filter((c) => c !== category),
    }))
  }

  const handleDietaryChange = (diet, checked) => {
    setFilters((prev) => ({
      ...prev,
      dietary: checked ? [...prev.dietary, diet] : prev.dietary.filter((d) => d !== diet),
    }))
  }

  const handlePriceChange = (price) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === price ? null : price,
    }))
  }

  const handleSearchChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: e.target.value,
    }))
  }

  const resetFilters = () => {
    setFilters({
      categories: [],
      dietary: [],
      priceRange: null,
      searchQuery: "",
    })
    setSortOption("featured")
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Shop Dog-Safe Cakes</h1>
        <p className="text-muted-foreground mb-8">Browse our selection of wholesome, dog-friendly celebration cakes</p>

        {/* Search and mobile filter button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cakes..."
              className="pl-10"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <Button
            variant="outline"
            className="sm:hidden flex items-center"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${mobileFiltersOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Filter className="h-5 w-5 mr-2" /> Filters
                </h2>
                <Button variant="ghost" size="sm" className="text-sm" onClick={resetFilters}>
                  Reset
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full" defaultValue="category">
                <AccordionItem value="category">
                  <AccordionTrigger>Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="birthday"
                          className="mr-2"
                          checked={filters.categories.includes("birthday")}
                          onChange={(e) => handleCategoryChange("birthday", e.target.checked)}
                        />
                        <label htmlFor="birthday">Birthday Cakes</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="everyday"
                          className="mr-2"
                          checked={filters.categories.includes("everyday")}
                          onChange={(e) => handleCategoryChange("everyday", e.target.checked)}
                        />
                        <label htmlFor="everyday">Everyday Treats</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="special"
                          className="mr-2"
                          checked={filters.categories.includes("special occasion")}
                          onChange={(e) => handleCategoryChange("special occasion", e.target.checked)}
                        />
                        <label htmlFor="special">Special Occasion</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cupcakes"
                          className="mr-2"
                          checked={filters.categories.includes("cupcakes")}
                          onChange={(e) => handleCategoryChange("cupcakes", e.target.checked)}
                        />
                        <label htmlFor="cupcakes">Cupcakes</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dietary">
                  <AccordionTrigger>Dietary Options</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="grain-free"
                          className="mr-2"
                          checked={filters.dietary.includes("Grain-Free")}
                          onChange={(e) => handleDietaryChange("Grain-Free", e.target.checked)}
                        />
                        <label htmlFor="grain-free">Grain-Free</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="sugar-free"
                          className="mr-2"
                          checked={filters.dietary.includes("Sugar-Free")}
                          onChange={(e) => handleDietaryChange("Sugar-Free", e.target.checked)}
                        />
                        <label htmlFor="sugar-free">Sugar-Free</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="vegan"
                          className="mr-2"
                          checked={filters.dietary.includes("Vegan")}
                          onChange={(e) => handleDietaryChange("Vegan", e.target.checked)}
                        />
                        <label htmlFor="vegan">Vegan</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          id="price-1"
                          className="mr-2"
                          checked={filters.priceRange === "under-20"}
                          onChange={() => handlePriceChange("under-20")}
                        />
                        <label htmlFor="price-1">Under $20</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          id="price-2"
                          className="mr-2"
                          checked={filters.priceRange === "20-30"}
                          onChange={() => handlePriceChange("20-30")}
                        />
                        <label htmlFor="price-2">$20 - $30</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          id="price-3"
                          className="mr-2"
                          checked={filters.priceRange === "over-30"}
                          onChange={() => handlePriceChange("over-30")}
                        />
                        <label htmlFor="price-3">Over $30</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-muted-foreground">
                  Showing {products.length} {products.length === 1 ? "product" : "products"}
                  {(filters.categories.length > 0 ||
                    filters.dietary.length > 0 ||
                    filters.priceRange ||
                    filters.searchQuery) &&
                    " with applied filters"}
                </p>
                <div className="flex items-center">
                  <span className="mr-2">Sort by:</span>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {products.length === 0 ? (
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="No products found"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any products matching your current filters.
                </p>
                <Button onClick={resetFilters}>Clear Filters</Button>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {products.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <Card className="overflow-hidden transition-all hover:shadow-md group">
                      <Link href={`/product/${product.id}`} className="block">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {product.badge && (
                            <Badge className="absolute top-2 right-2 bg-amber-600">{product.badge}</Badge>
                          )}
                        </div>
                      </Link>
                      <CardHeader className="pb-2">
                        <Link href={`/product/${product.id}`}>
                          <CardTitle className="group-hover:text-amber-600 transition-colors">{product.name}</CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.dietary.map((diet) => (
                            <Badge key={diet} variant="outline" className="text-xs">
                              {diet}
                            </Badge>
                          ))}
                        </div>
                        <p className="font-bold text-amber-600">${product.price.toFixed(2)}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                          <Link href={`/product/${product.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

