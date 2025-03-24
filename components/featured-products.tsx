import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Birthday Pup Cake",
    description: "A festive cake made with peanut butter and pumpkin, perfect for birthdays.",
    price: 29.99,
    image: "https://i.pinimg.com/736x/72/d1/1e/72d11e916c350a0fb6bb2000082efc16.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Carrot Delight",
    description: "Carrot-based cake with yogurt frosting, rich in vitamins and minerals.",
    price: 24.99,
    image: "https://i.pinimg.com/736x/21/c3/e2/21c3e221d600f2863c2920840520e5cf.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Apple Crunch",
    description: "Fresh apple cake with a crunchy oat topping that dogs love.",
    price: 22.99,
    image: "https://i.pinimg.com/736x/44/ad/67/44ad67fc7f9eb01f4f8a5a87ef157b52.jpg",
  },
  {
    id: 4,
    name: "Banana Bark",
    description: "Banana-flavored cake with a coconut 'bark' frosting, grain-free option.",
    price: 26.99,
    image: "https://i.pinimg.com/736x/27/98/0e/27980e104d3e19a2e1ce942f73c117b6.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Cakes</h2>
          <Button asChild variant="outline">
            <Link href="/shop">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48 w-full">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.badge && <Badge className="absolute top-2 right-2 bg-amber-600">{product.badge}</Badge>}
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground text-sm">{product.description}</p>
                <p className="mt-2 font-bold text-amber-600">${product.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <Link href={`/product/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

