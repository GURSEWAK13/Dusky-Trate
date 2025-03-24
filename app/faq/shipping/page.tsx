import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ShippingFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Shipping & Delivery FAQ</h1>
          <p className="text-muted-foreground">Everything you need to know about how we ship our dog-friendly cakes</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How are DUSKY-TARTE cakes shipped?</AccordionTrigger>
              <AccordionContent>
                Our cakes are carefully packaged in eco-friendly insulated containers with food-grade ice packs to
                maintain freshness during transit. Each cake is secured in a protective dome to prevent damage. We ship
                via expedited shipping methods (typically FedEx or UPS) to ensure your cake arrives in perfect
                condition. All packaging materials are either recyclable or biodegradable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How far in advance should I order for delivery?</AccordionTrigger>
              <AccordionContent>
                For standard cakes, we recommend placing your order at least 5-7 business days before your desired
                delivery date. For custom cakes, please allow 7-10 business days. During peak seasons (holidays, summer
                months), we recommend adding 2-3 extra days to ensure timely delivery. Rush orders may be accommodated
                for an additional fee, subject to availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you ship nationwide?</AccordionTrigger>
              <AccordionContent>
                Yes! We ship to all 50 U.S. states. For orders to Alaska and Hawaii, additional shipping charges may
                apply. We currently do not ship internationally, but we're working on expanding our shipping
                capabilities to Canada in the near future. For international customers, we can provide recipes and
                guidance for local bakers to create similar dog-friendly treats.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How much does shipping cost?</AccordionTrigger>
              <AccordionContent>
                Shipping costs are calculated based on:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Destination (distance from our Portland, OR bakery)</li>
                  <li>Order weight and dimensions</li>
                  <li>Shipping speed selected</li>
                </ul>
                Standard shipping typically ranges from $8.99-$15.99 for most U.S. locations. Expedited and overnight
                options are available at higher rates. We offer free standard shipping on orders over $75. You can see
                the exact shipping cost at checkout before completing your purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I track my order?</AccordionTrigger>
              <AccordionContent>
                Yes! Once your order ships, you'll receive an email with tracking information. You can also view
                tracking details by logging into your DUSKY-TARTE account and checking your order status. Our tracking
                updates in real-time so you can monitor your package's journey. For any concerns about tracking or
                delivery, please contact our customer service team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What if my cake is damaged during shipping?</AccordionTrigger>
              <AccordionContent>
                In the rare event that your cake arrives damaged, please take photos of the packaging and the cake
                before disturbing it further. Contact us within 24 hours of delivery at support@duskytarte.com with your
                order number and photos. We'll promptly issue a replacement or refund. Our priority is your
                satisfaction, and we stand behind the quality of our products during shipping.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Do you offer local pickup or delivery?</AccordionTrigger>
              <AccordionContent>
                Yes! If you're in the Portland, OR area, you can pick up your order directly from our bakery at no
                additional cost. We also offer local delivery within a 15-mile radius of our location for a flat fee of
                $5.99. During checkout, you'll see these options if your address qualifies. For local delivery, you can
                select a 2-hour delivery window that works for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How long will my cake stay fresh during shipping?</AccordionTrigger>
              <AccordionContent>
                Our cakes are designed to stay fresh for up to 72 hours in transit with our special packaging. Upon
                delivery, we recommend refrigerating your cake immediately. For best quality, consume the cake within
                3-5 days of delivery. If you need to preserve it longer, our cakes can be frozen for up to 3 months -
                just thaw in the refrigerator for 24 hours before serving.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do you ship during extreme weather conditions?</AccordionTrigger>
              <AccordionContent>
                We monitor weather conditions closely and may temporarily suspend shipping to areas experiencing extreme
                heat (above 90°F) or severe winter conditions that could affect product quality. If we anticipate
                weather-related shipping delays to your area, we'll contact you to discuss options, which may include
                rescheduling delivery or upgrading to expedited shipping. During summer months, we recommend selecting
                expedited shipping options to minimize transit time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Can I request a specific delivery date?</AccordionTrigger>
              <AccordionContent>
                Yes! During checkout, you can select your preferred delivery date from available options. We'll do our
                best to accommodate your request, though exact delivery times are determined by the carrier. For
                date-critical deliveries (birthdays, anniversaries), we recommend scheduling delivery 1-2 days before
                the event to allow for any unexpected carrier delays. For an additional fee, you can select Saturday
                delivery in many locations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Ready to place an order?</h2>
          <p className="mb-4">
            Browse our selection of dog-friendly cakes and treats, and we'll handle the careful shipping to ensure they
            arrive fresh and beautiful.
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

