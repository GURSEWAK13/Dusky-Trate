import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-amber-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Celebrate Safely with Your Furry Friend</h1>
          <p className="text-lg md:text-xl mb-8 text-amber-50">
            DUSKY-TARTE offers wholesome, vegan, sugar-free cakes made with dog-safe ingredients, ensuring your
            companion can celebrate without health complications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-amber-100">
              <Link href="/shop">
                Shop Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-amber-700">
              <Link href="/learn">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://i.pinimg.com/736x/ae/f0/8d/aef08d1a31b3446453da3504ae3e1050.jpg"
              alt="Dog enjoying a DUSKY-TARTE cake"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-amber-600 font-bold">100% Dog-Safe Ingredients</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-700 to-transparent opacity-50"></div>
    </section>
  )
}

