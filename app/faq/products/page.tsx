import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ProductsFAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/faq">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to FAQ
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Products FAQ</h1>
          <p className="text-muted-foreground">Frequently asked questions about our dog-friendly cakes and treats</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What ingredients do you use in your dog cakes?</AccordionTrigger>
              <AccordionContent>
                Our cakes are made with high-quality, dog-safe ingredients:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Whole grain flours (oat, rice, or coconut flour)</li>
                  <li>Natural sweeteners (unsweetened applesauce, mashed banana, or pumpkin)</li>
                  <li>Healthy fats (coconut oil or natural peanut butter)</li>
                  <li>Fresh fruits and vegetables</li>
                  <li>Protein sources like plain yogurt or egg</li>
                </ul>
                We never use ingredients that are harmful to dogs, such as chocolate, xylitol, raisins, grapes,
                macadamia nuts, or artificial sweeteners. All ingredients are human-grade and many are organic. Each
                product page lists complete ingredients for transparency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Are your products suitable for dogs with allergies?</AccordionTrigger>
              <AccordionContent>
                We offer several options for dogs with common allergies:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Grain-free cakes made with coconut or almond flour</li>
                  <li>Dairy-free options that use coconut milk instead of yogurt</li>
                  <li>Egg-free recipes for dogs with egg sensitivities</li>
                  <li>Nut-free options that avoid peanut butter and other nut products</li>
                </ul>
                Each product is clearly labeled with potential allergens. For dogs with multiple or severe allergies, we
                offer custom cakes where you can specify exactly which ingredients to include or avoid. Please contact
                us directly for highly specialized dietary needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How should I store my DUSKY-TARTE cake?</AccordionTrigger>
              <AccordionContent>
                For optimal freshness:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Refrigerate your cake immediately upon receipt</li>
                  <li>Keep the cake in its original container or an airtight container</li>
                  <li>Store at 35-40°F (1-4°C)</li>
                  <li>Consume within 3-5 days for best quality</li>
                  <li>For longer storage, freeze for up to 3 months</li>
                </ul>
                If freezing, wrap the cake tightly in plastic wrap, then place in a freezer-safe container. To thaw,
                transfer to the refrigerator for 24 hours before serving. Never leave the cake at room temperature for
                more than 2 hours, as this can promote bacterial growth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How big are your cakes and how many servings?</AccordionTrigger>
              <AccordionContent>
                We offer several sizes to accommodate different celebrations:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Mini (4" round): Perfect for small dogs or a single serving</li>
                  <li>Small (6" round): Ideal for medium dogs or 2-3 small dogs</li>
                  <li>Medium (8" round): Great for large dogs or 4-6 small dogs</li>
                  <li>Large (10" round): Perfect for parties with multiple dogs</li>
                </ul>
                Serving sizes depend on your dog's size and dietary needs. As a general guideline, we recommend:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Small dogs (under 20 lbs): 1-2 small slices</li>
                  <li>Medium dogs (20-50 lbs): 2-3 small slices</li>
                  <li>Large dogs (over 50 lbs): 3-4 small slices</li>
                </ul>
                Remember that these are treats and should be given in moderation as part of a balanced diet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can humans eat your dog cakes?</AccordionTrigger>
              <AccordionContent>
                Yes! All our ingredients are human-grade and safe for human consumption. However, please note that our
                cakes are formulated for canine taste preferences and nutritional needs, so they:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Contain no added sugar</li>
                  <li>Are less sweet than human desserts</li>
                  <li>Have a denser texture than typical human cakes</li>
                  <li>May include flavors that appeal more to dogs (like liver or fish)</li>
                </ul>
                Many customers tell us they enjoy sharing a bite with their dogs during celebrations. Our peanut butter
                and carrot cake flavors tend to be the most appealing to human palates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What customization options do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer extensive customization options:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Cake flavors: Peanut butter, carrot, pumpkin, banana, apple, and more</li>
                  <li>Frosting options: Yogurt-based, cream cheese-based, or dairy-free</li>
                  <li>Colors: Natural food-based colorings (beet, turmeric, spirulina, etc.)</li>
                  <li>Decorations: Bone shapes, paw prints, personalized messages</li>
                  <li>Toppers: Custom fondant figures of your dog's breed</li>
                  <li>Shapes: Round, bone, paw print, or custom shapes</li>
                </ul>
                For fully custom designs, please use our Custom Cake Builder tool or contact us directly at least 7-10
                days before your desired delivery date. We can recreate your dog's likeness, match specific color
                schemes, or design themed cakes for special occasions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Are your products nutritionally balanced for dogs?</AccordionTrigger>
              <AccordionContent>
                Our cakes and treats are designed as special occasion items, not as regular meal replacements or daily
                treats. While we use nutritious, dog-safe ingredients, these products should be considered supplementary
                to your dog's regular balanced diet. We work with veterinary nutritionists to ensure our recipes are
                safe and appropriate for occasional consumption. Each product page includes approximate caloric content
                and feeding guidelines based on your dog's size. For dogs with specific health conditions or dietary
                requirements, we recommend consulting with your veterinarian before serving.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Do you offer sample packs or taster options?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer several options for first-time customers or those wanting to test flavors:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Mini Sampler Pack: Four mini (2") cakes in different flavors</li>
                  <li>Pupcake Variety Box: Six cupcake-sized treats in assorted flavors</li>
                  <li>Seasonal Taster: Small portions of our seasonal special flavors</li>
                </ul>
                These samplers are perfect for determining your dog's preferences before ordering a full-sized cake.
                They're also great for multi-dog households where each pet might have different taste preferences.
                Samplers can be ordered directly from our website and ship nationwide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>What's the difference between your cakes and regular dog treats?</AccordionTrigger>
              <AccordionContent>
                Our cakes differ from regular dog treats in several ways:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Texture: Soft, moist cake consistency versus crunchy or chewy treats</li>
                  <li>Occasion: Designed for special celebrations rather than daily rewards</li>
                  <li>Presentation: Decorated and personalized for a celebratory experience</li>
                  <li>Size: Larger portion meant to be served in slices over multiple servings</li>
                  <li>Freshness: Made fresh to order with a shorter shelf life than preserved treats</li>
                </ul>
                While regular treats are perfect for training and daily rewards, our cakes create a special experience
                for birthdays, adoptiversaries, and other milestone celebrations. They're designed to be shared and to
                create memorable moments for both pets and their humans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Do you make treats for other pets besides dogs?</AccordionTrigger>
              <AccordionContent>
                Currently, we specialize exclusively in dog-friendly cakes and treats. Creating safe and appropriate
                treats for different species requires specific expertise in their unique nutritional needs and dietary
                restrictions. We've chosen to focus on perfecting our dog recipes to ensure the highest quality and
                safety. In the future, we may expand to other pet-friendly treats, but for now, our products are
                formulated specifically for canine consumption. If you're looking for treats for other pets, we
                recommend seeking out specialists who focus on those specific animals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Ready to order?</h2>
          <p className="mb-4">
            Browse our selection of dog-friendly cakes and treats, or create a custom cake for your special celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/shop">Shop All Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/customize">Create Custom Cake</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

