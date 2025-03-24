"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Heart, Shield, Leaf, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-amber-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-amber-50 mb-6">
              How a love for dogs and a passion for baking created DUSKY-TARTE
            </p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500 rounded-full opacity-50"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-amber-500 rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">How It All Started</h2>
              <p className="text-muted-foreground mb-4">
                DUSKY-TARTE began with a simple question: Why can't our furry family members enjoy celebration cakes
                too? Our founder, Emma, a professional pastry chef and devoted dog mom, noticed a gap in the market for
                truly dog-safe celebration treats.
              </p>
              <p className="text-muted-foreground mb-4">
                After her beloved Golden Retriever, Max, experienced digestive issues from a "dog-friendly" bakery
                treat, Emma was determined to create something better. She spent months researching canine nutrition,
                consulting with veterinarians, and testing recipes in her kitchen.
              </p>
              <p className="text-muted-foreground mb-6">
                In 2019, DUSKY-TARTE was born with a mission to create wholesome, vegan, sugar-free cakes that allow
                dogs to participate in family celebrations without compromising their health.
              </p>
              <div className="flex items-center text-amber-600 font-medium">
  <span className="mr-2">Emma & Max, Founders</span>
  <Image
    src="https://i.pinimg.com/736x/d9/bc/04/d9bc0464e76ee5dca055d2202509f830.jpg"
    alt="Signature"
    width={120}
    height={40}
    style={{ borderRadius: '8px' }} // Add rounded corners
  />
</div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://i.pinimg.com/736x/49/88/f8/4988f87ec4a9bd1edfd99bc035474716.jpg"
                    alt="Our founder with her dog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-amber-600 font-bold">Est. 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground">
              At DUSKY-TARTE, we're guided by a simple philosophy: dogs deserve to celebrate safely. Every decision we
              make is informed by these core values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-amber-100">
              <CardHeader className="pb-2">
                <Shield className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We rigorously test all ingredients and recipes to ensure they're 100% safe for canine consumption,
                  working with veterinary nutritionists to validate our formulations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-100">
              <CardHeader className="pb-2">
                <Leaf className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Quality Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We source human-grade, organic ingredients whenever possible, avoiding artificial preservatives,
                  colors, and flavors that could harm your pet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-100">
              <CardHeader className="pb-2">
                <Heart className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Inclusive Celebrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe every dog deserves to be included in family celebrations, regardless of dietary
                  restrictions or health concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-100">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Education & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to educating pet parents about canine nutrition and maintaining complete transparency
                  about our ingredients and processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            The passionate humans (and canine quality control experts) behind DUSKY-TARTE
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Emma Parker",
                title: "Founder & Head Baker",
                bio: "Former pastry chef with a passion for canine nutrition. Emma oversees all recipe development.",
                image: "https://i.pinimg.com/736x/5e/96/4b/5e964b4d1a6a514bf141c694f5037537.jpg",
              },
              {
                name: "Dr. James Wilson",
                title: "Veterinary Consultant",
                bio: "Board-certified veterinary nutritionist who ensures all our products meet the highest safety standards.",
                image: "https://i.pinimg.com/736x/e3/77/27/e3772779b4a2c022a7827a3d0879258b.jpg",
              },
              {
                name: "Sarah Chen",
                title: "Operations Manager",
                bio: "Logistics expert who ensures your dog's cake arrives fresh and on time for their special day.",
                image: "https://i.pinimg.com/736x/5c/8f/a7/5c8fa7a1adc7ca155451bf4da3183a0d.jpg",
              },
              {
                name: "Max",
                title: "Chief Tasting Officer",
                bio: "Golden Retriever with discerning taste buds. If Max doesn't approve a recipe, it doesn't make the menu.",
                image: "https://i.pinimg.com/736x/6c/5b/e4/6c5be45f68550e09ade2c77d554734b2.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 transition-all group-hover:shadow-md">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-amber-200">{member.title}</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-amber-600 mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Kitchen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Dedicated Kitchen</h2>
              <p className="text-muted-foreground mb-4">
                All DUSKY-TARTE products are handcrafted in our dedicated dog bakery, where we maintain the highest
                standards of cleanliness and quality control.
              </p>
              <p className="text-muted-foreground mb-4">
                Our kitchen is completely free from common canine allergens and toxic ingredients like chocolate,
                xylitol, and artificial sweeteners. We use separate equipment and storage areas to prevent
                cross-contamination.
              </p>
              <p className="text-muted-foreground mb-6">
                Every batch is made fresh to order, ensuring your dog receives the freshest, most delicious treat for
                their special day.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/learn">
                  Learn About Our Ingredients <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="https://i.pinimg.com/736x/1d/06/14/1d06145d9a1cc00a2b93f9147119acc1.jpg" alt="Our kitchen" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="https://i.pinimg.com/736x/e9/26/01/e9260100ea6b091e553421c0e6092284.jpg" alt="Baking process" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/1f/12/35/1f1235a29cc81f8e821e6280fc090340.jpg"
                  alt="Quality ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/96/4f/45/964f451f7cfa207d3c82cb8ba690c521.jpg"
                  alt="Finished products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">What Our Customers Say</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Don't just take our word for it - hear from the happy dogs and their humans who've celebrated with
            DUSKY-TARTE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Max absolutely loved his birthday cake! It was his first birthday celebration with a cake he could actually eat, and seeing his excitement was priceless.",
                name: "Sarah & Max",
                location: "Portland, OR",
                image: "https://i.pinimg.com/736x/c4/28/a5/c428a532a4b6c34eedb4e26a07542cf8.jpg",
              },
              {
                quote:
                  "As someone who's always concerned about what goes into my dog's food, I was thrilled to find DUSKY-TARTE. The ingredients list is transparent, and Bella enjoyed every bite.",
                name: "James & Bella",
                location: "Austin, TX",
                image: "https://i.pinimg.com/736x/01/d7/e4/01d7e473c951610b5a102662abd5469b.jpg",
              },
              {
                quote:
                  "Cooper has food sensitivities, so finding a cake he could enjoy was challenging until we discovered DUSKY-TARTE. Their customization options allowed us to avoid his trigger ingredients.",
                name: "Emily & Cooper",
                location: "Chicago, IL",
                image: "https://i.pinimg.com/736x/b4/1a/c7/b41ac7d74594ce7105fa41a464f179c8.jpg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-amber-100">
                <CardContent className="pt-6">
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the DUSKY-TARTE Family</h2>
          <p className="max-w-2xl mx-auto mb-8 text-amber-50">
            Ready to make your dog's next celebration special? Order a custom cake today or contact us to learn more
            about our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-amber-100">
              <Link href="/shop">
                Shop Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-amber-700">
              <Link href="/contact">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

