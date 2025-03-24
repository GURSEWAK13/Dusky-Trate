import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function EducationalSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Safe Celebrations for Your Dog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding what ingredients are safe for your dog is crucial. Learn about dog-friendly alternatives to
            common cake ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-red-600">
                <X className="mr-2 h-5 w-5" /> Harmful Ingredients
              </CardTitle>
              <CardDescription>Ingredients that should never be in your dog's cake</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Chocolate:</span> Contains theobromine, toxic to dogs and can cause
                    vomiting, diarrhea, and even seizures.
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Xylitol:</span> This sugar substitute is extremely toxic to dogs,
                    even in small amounts.
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Raisins & Grapes:</span> Can cause kidney failure in dogs.
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Macadamia Nuts:</span> Can cause weakness, hyperthermia, and
                    vomiting.
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Excessive Sugar:</span> Can lead to obesity, dental problems, and
                    diabetes.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-green-600">
                <Check className="mr-2 h-5 w-5" /> Safe Alternatives
              </CardTitle>
              <CardDescription>Dog-friendly ingredients used in our cakes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pumpkin:</span> Rich in fiber and nutrients, great for digestion.
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Peanut Butter:</span> High in protein (xylitol-free varieties only).
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Carrots:</span> Packed with vitamins and great for dental health.
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Oat or Coconut Flour:</span> Healthier alternatives to wheat flour.
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-semibold">Greek Yogurt:</span> For creamy, protein-rich frosting (plain,
                    unsweetened).
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link href="/learn">Learn More About Dog Nutrition</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

