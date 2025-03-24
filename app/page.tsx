import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cake, Shield, Heart, Truck } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import EducationalSection from "@/components/educational-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Value Proposition */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DUSKY-TARTE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Cake className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Dog-Safe</h3>
              <p className="text-muted-foreground">
                All our cakes are made with ingredients that are safe and healthy for your furry friends.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vegan & Sugar-Free</h3>
              <p className="text-muted-foreground">
                Wholesome recipes without refined ingredients, perfect for your dog's health.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-muted-foreground">
                Personalize cakes with your dog's favorite flavors and special decorations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Fresh cakes delivered to your doorstep for your special celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      <EducationalSection />

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Celebrate with Your Furry Friend?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-amber-50">
            Order a custom cake today and make your dog's special day truly memorable without compromising their health.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-amber-100">
            <Link href="/customize">
              Customize Your Cake <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <TestimonialsSection />
    </main>
  )
}

