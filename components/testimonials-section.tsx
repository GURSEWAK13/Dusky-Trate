import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Max",
    text: "Max absolutely loved his birthday cake! It was his first birthday celebration with a cake he could actually eat, and seeing his excitement was priceless. Thank you DUSKY-TARTE for making his day special!",
    rating: 5,
    image: "https://i.pinimg.com/736x/cc/ae/4b/ccae4bc8117c4833fd9cd17468657016.jpg",
  },
  {
    id: 2,
    name: "James & Bella",
    text: "As someone who's always concerned about what goes into my dog's food, I was thrilled to find DUSKY-TARTE. The ingredients list is transparent, and Bella enjoyed every bite of her adoption anniversary cake.",
    rating: 5,
    image: "https://i.pinimg.com/736x/4b/f6/77/4bf677435fc4a7aa023fdca83d4d8562.jpg",
  },
  {
    id: 3,
    name: "Emily & Cooper",
    text: "Cooper has food sensitivities, so finding a cake he could enjoy was challenging until we discovered DUSKY-TARTE. Their customization options allowed us to avoid his trigger ingredients while still giving him a delicious treat.",
    rating: 5,
    image: "https://i.pinimg.com/736x/5f/fe/0f/5ffe0f0083b0808231c09f40abd0bab4.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Happy Dogs & Happy Owners</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-amber-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="italic mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex items-center border-t border-amber-100 pt-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold">{testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

