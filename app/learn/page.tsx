import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Check, X, ChevronRight } from "lucide-react"

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Dog Nutrition & Safety</h1>
        <p className="text-muted-foreground mb-8">Learn about safe ingredients and nutrition for your furry friend</p>

        <Tabs defaultValue="ingredients" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ingredients">Safe vs. Unsafe Ingredients</TabsTrigger>
            <TabsTrigger value="nutrition">Canine Nutrition</TabsTrigger>
            <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-red-600">
                    <AlertTriangle className="mr-2 h-5 w-5" /> Dangerous for Dogs
                  </CardTitle>
                  <CardDescription>Ingredients that should never be in your dog's food</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Chocolate:</span> Contains theobromine and caffeine, which are
                        toxic to dogs. Even small amounts can cause vomiting, diarrhea, increased thirst, panting,
                        restlessness, and in severe cases, muscle tremors, seizures, and heart failure.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Xylitol:</span> This sugar substitute is extremely toxic to
                        dogs. It can cause insulin release, leading to liver failure and hypoglycemia (low blood sugar).
                        Even small amounts can be fatal.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Grapes & Raisins:</span> Can cause kidney failure in dogs. The
                        toxic substance in grapes is unknown, but even small amounts can make a dog ill.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Macadamia Nuts:</span> Can cause weakness, hyperthermia,
                        vomiting, tremors, and elevated heart rate.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Onions & Garlic:</span> Contains compounds that can damage dogs'
                        red blood cells, leading to anemia. This includes all forms: raw, cooked, powdered, or within
                        other foods.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Alcohol:</span> Even small amounts can cause intoxication,
                        vomiting, diarrhea, decreased coordination, central nervous system depression, difficulty
                        breathing, tremors, abnormal blood acidity, coma, and even death.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <X className="mr-2 h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Caffeine:</span> Found in coffee, tea, and some sodas, caffeine
                        can be fatal to dogs. It can cause restlessness, rapid breathing, heart palpitations, muscle
                        tremors, and bleeding.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-green-600">
                    <Check className="mr-2 h-5 w-5" /> Safe for Dogs
                  </CardTitle>
                  <CardDescription>Ingredients we use in our dog-friendly cakes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Pumpkin:</span> Rich in fiber and nutrients, pumpkin is
                        excellent for digestion and can help with both diarrhea and constipation. It's also low in
                        calories and high in vitamins A, E, and C.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Peanut Butter (Xylitol-Free):</span> A good source of protein,
                        healthy fats, vitamins B and E, and niacin. Always ensure it doesn't contain xylitol, which is
                        toxic to dogs.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Carrots:</span> Low in calories and high in fiber and vitamins.
                        Carrots are also good for dental health and provide a satisfying crunch.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Apples (without seeds):</span> Good source of vitamins A and C,
                        and fiber. The seeds contain cyanide, so they should always be removed.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Oats:</span> Provide soluble fiber and are good for dogs with
                        wheat allergies. They're also a good source of linoleic acid, a type of omega-6 fatty acid that
                        helps keep skin strong and healthy.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Greek Yogurt (plain, unsweetened):</span> Contains probiotics
                        that help with digestion and is high in calcium and protein. Always choose varieties without
                        added sugars or artificial sweeteners.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold">Coconut (in moderation):</span> Contains lauric acid, which can
                        help combat bacteria and viruses. It can also help with bad breath and clearing up skin
                        conditions like flea allergies, hot spots, and itchy skin.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Commitment to Safety</h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="https://i.pinimg.com/736x/0a/69/b3/0a69b3dc08448620a8eb917b4f8d3d94.jpg"
                    alt="Dog safety"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4">
                    At DUSKY-TARTE, we understand that your dog's health is your top priority. That's why we've
                    developed our recipes in consultation with veterinary nutritionists to ensure they're not only
                    delicious but also nutritionally balanced and safe.
                  </p>
                  <p className="mb-4">
                    All our ingredients are carefully sourced and tested for quality. We never use artificial
                    preservatives, colors, or flavors in our products. Our kitchen maintains strict separation protocols
                    to prevent cross-contamination with ingredients that could be harmful to dogs.
                  </p>
                  <p>
                    While our cakes are designed as occasional treats for special celebrations, they're made with
                    wholesome ingredients that won't disrupt your dog's regular diet or cause digestive issues when
                    served in appropriate portions.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">Understanding Canine Nutrition</h3>
              <p className="mb-4">
                Dogs have different nutritional needs than humans. While they are omnivores and can digest a variety of
                foods, their digestive systems and metabolic processes are distinct from ours. Understanding these
                differences is key to providing treats that are both enjoyable and safe for your furry friend.
              </p>

              <h4 className="text-lg font-medium mt-6 mb-2">Key Nutritional Components for Dogs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Proteins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Dogs require high-quality protein for muscle development and maintenance. Their bodies use 22
                      amino acids, 12 of which they can produce naturally. The remaining 10, known as essential amino
                      acids, must come from their diet.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Fats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Fats provide energy and help with the absorption of fat-soluble vitamins. They also contribute to
                      healthy skin and coat. However, excessive fat consumption can lead to obesity and related health
                      issues.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Carbohydrates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      While not essential in a dog's diet, carbohydrates can provide energy, fiber, and essential
                      nutrients. Complex carbohydrates like those found in whole grains and vegetables are preferable to
                      simple sugars.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Vitamins & Minerals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Dogs need various vitamins and minerals for optimal health. These include calcium for bone health,
                      B vitamins for energy metabolism, and antioxidants like vitamins E and C for immune function.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h4 className="text-lg font-medium mt-6 mb-2">Treats in a Balanced Diet</h4>
              <p className="mb-4">
                Treats, including celebration cakes, should make up no more than 10% of a dog's daily caloric intake.
                The remaining 90% should come from a complete and balanced diet appropriate for their age, size, and
                activity level.
              </p>
              <p>
                At DUSKY-TARTE, our cakes are designed to be occasional treats that fit within this guideline. We
                provide portion recommendations based on your dog's size to help you serve responsibly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Small Dogs (up to 20 lbs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Daily caloric needs: 200-400 calories</li>
                    <li>• Recommended treat portion: 20-40 calories</li>
                    <li>• DUSKY-TARTE serving: 1/8 of a small cake</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medium Dogs (20-50 lbs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Daily caloric needs: 400-900 calories</li>
                    <li>• Recommended treat portion: 40-90 calories</li>
                    <li>• DUSKY-TARTE serving: 1/4 of a small cake</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Large Dogs (50+ lbs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Daily caloric needs: 900-1500+ calories</li>
                    <li>• Recommended treat portion: 90-150 calories</li>
                    <li>• DUSKY-TARTE serving: 1/2 of a small cake</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Special Dietary Considerations</h3>
              <p className="mb-6">
                We understand that many dogs have specific dietary needs or restrictions. That's why we offer
                customization options to accommodate various requirements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Grain-Free Options</h4>
                    <p className="text-sm text-muted-foreground">
                      For dogs with grain sensitivities, we offer cakes made with alternative flours like coconut or
                      almond flour.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Low-Fat Recipes</h4>
                    <p className="text-sm text-muted-foreground">
                      For dogs on weight management plans or with pancreatitis, we have reduced-fat options that don't
                      compromise on taste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Protein-Specific</h4>
                    <p className="text-sm text-muted-foreground">
                      For dogs with protein allergies, we can create cakes that avoid specific protein sources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Senior Dog Formulas</h4>
                    <p className="text-sm text-muted-foreground">
                      Easier to digest options with added joint-supporting ingredients for older dogs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/customize">
                    Customize for Your Dog's Needs <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Are DUSKY-TARTE cakes completely safe for all dogs?</h4>
                  <p>
                    Our cakes are made with ingredients that are generally safe for most dogs. However, just like
                    humans, dogs can have individual allergies or sensitivities. We recommend checking with your
                    veterinarian if your dog has specific health concerns or dietary restrictions. We can customize our
                    recipes to accommodate most special needs.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">How long do your cakes stay fresh?</h4>
                  <p>
                    Our cakes are best enjoyed within 2-3 days of delivery. They can be refrigerated for up to 5 days.
                    We don't use preservatives, so they won't last as long as commercial dog treats. For longer storage,
                    you can freeze portions for up to 3 months.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Can humans eat these cakes too?</h4>
                  <p>
                    While all our ingredients are human-grade and safe for human consumption, our cakes are formulated
                    for canine taste preferences and nutritional needs. They're significantly less sweet than human
                    cakes and may taste bland to human palates. We focus on flavors dogs love rather than human
                    preferences.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">My dog has diabetes. Can they still enjoy your cakes?</h4>
                  <p>
                    We offer sugar-free options that use natural ingredients like pumpkin for sweetness. However, these
                    still contain carbohydrates that can affect blood sugar. For diabetic dogs, we recommend our
                    mini-sized portions and consulting with your veterinarian about appropriate serving sizes. Always
                    monitor your diabetic dog after introducing any new food.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Do you offer same-day delivery?</h4>
                  <p>
                    We require at least 48 hours notice for standard orders to ensure freshness and quality. For custom
                    designs, we recommend placing orders 3-5 days in advance. We do offer limited emergency same-day
                    options for an additional fee, subject to availability.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">How should I serve the cake to my dog?</h4>
                  <p>
                    We recommend serving our cakes in appropriate portions based on your dog's size (guidelines provided
                    with each cake). Allow the cake to come to room temperature before serving for the best texture and
                    flavor. Always supervise your dog while they enjoy their treat, and provide fresh water.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">What if my dog doesn't like the cake?</h4>
                  <p>
                    While most dogs love our recipes, we understand that every dog has unique preferences. If your dog
                    doesn't enjoy their cake, please contact us within 24 hours of delivery, and we'll work with you to
                    find a solution, which may include a different flavor option or a partial refund.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Are your packaging materials eco-friendly?</h4>
                  <p>
                    Yes, we use biodegradable and compostable packaging materials. Our cake boxes are made from recycled
                    cardboard, and our insulation materials are plant-based. We're committed to minimizing our
                    environmental impact while ensuring your dog's cake arrives fresh and intact.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Still have questions?</h4>
                <p className="mb-4">
                  We're here to help! Contact our team for personalized assistance with any questions about our
                  products, ingredients, or ordering process.
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

