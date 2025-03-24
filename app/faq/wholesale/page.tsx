import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function WholesaleFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Wholesale FAQ</h1>
          <p className="text-muted-foreground">
            Frequently asked questions about our wholesale program and bulk orders
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who qualifies for DUSKY-TARTE's wholesale program?</AccordionTrigger>
              <AccordionContent>
                Our wholesale program is available to:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Pet boutiques and specialty retailers</li>
                  <li>Pet bakeries looking to expand their product line</li>
                  <li>Veterinary clinics and pet hospitals</li>
                  <li>Dog groomers and pet spas</li>
                  <li>Pet-friendly hotels and resorts</li>
                  <li>Dog daycare and boarding facilities</li>
                  <li>Event planners specializing in pet events</li>
                </ul>
                To qualify, businesses must have a valid business license, tax ID, and if applicable, a resale
                certificate. We review all applications to ensure alignment with our brand values and quality standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What are the minimum order requirements?</AccordionTrigger>
              <AccordionContent>
                Our wholesale program has the following minimum requirements:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Initial order: $500 minimum</li>
                  <li>Reorders: $300 minimum</li>
                  <li>Minimum quantities per SKU: 12 units</li>
                </ul>
                For seasonal or limited-edition items, different minimums may apply. We offer tiered pricing based on
                order volume, with discounts increasing at $1,000, $2,500, and $5,000 thresholds. Custom branded
                products may have higher minimums due to production requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What wholesale products are available?</AccordionTrigger>
              <AccordionContent>
                Our wholesale catalog includes:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Shelf-stable treat boxes (6-month shelf life)</li>
                  <li>Celebration kits with cake mix and frosting</li>
                  <li>Freeze-dried birthday cake bites</li>
                  <li>Seasonal themed treats</li>
                  <li>Gift sets and party packages</li>
                  <li>Merchandising displays and point-of-sale materials</li>
                </ul>
                Note that our fresh-baked cakes with shorter shelf lives are generally not available for wholesale, but
                we do offer cake mixes and DIY kits that retailers can sell. Our wholesale catalog is updated quarterly
                with new products and seasonal offerings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What are the wholesale pricing and terms?</AccordionTrigger>
              <AccordionContent>
                Our wholesale pricing structure typically offers:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>40-50% off MSRP for standard orders</li>
                  <li>Additional volume discounts for larger orders</li>
                  <li>Seasonal promotions and closeout specials</li>
                </ul>
                Payment terms:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>First three orders: Payment in full before shipping</li>
                  <li>Established accounts: Net 30 terms available with approved credit</li>
                  <li>Accepted payment methods: Credit card, ACH transfer, or check</li>
                </ul>
                All prices are FOB Portland, OR. Shipping costs are the responsibility of the buyer, though we can
                arrange shipping through our preferred carriers at discounted rates. We reserve the right to adjust
                wholesale pricing with 30 days' notice to account for ingredient cost fluctuations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do I apply for a wholesale account?</AccordionTrigger>
              <AccordionContent>
                To apply for a wholesale account:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Complete the wholesale application form on our website</li>
                  <li>Submit required documentation (business license, tax ID, resale certificate)</li>
                  <li>Provide information about your business (type, location, years in operation)</li>
                  <li>Share your social media handles and website if applicable</li>
                  <li>Indicate estimated order volumes and frequency</li>
                </ol>
                Our wholesale team reviews applications within 3-5 business days. If approved, you'll receive access to
                our wholesale portal where you can view pricing, place orders, and access marketing materials. We may
                request a phone call or virtual meeting to discuss your specific needs and how we can best support your
                business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer private labeling or white label options?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer both private labeling and white label options for qualified partners:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Private labeling: Our products with your branding</li>
                  <li>White labeling: Custom formulations exclusive to your brand</li>
                  <li>Co-branding: Collaborative products featuring both brands</li>
                </ul>
                Private label minimums start at 100 units per SKU with a $2,500 minimum order. White label services
                require higher minimums and development fees. Lead times for private label products are typically 4-6
                weeks after design approval. We provide design templates and guidelines to ensure your branded products
                meet all regulatory requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What about bulk orders for events or corporate gifts?</AccordionTrigger>
              <AccordionContent>
                We offer special bulk pricing for:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Corporate pet-friendly events</li>
                  <li>Dog adoption days and fundraisers</li>
                  <li>Pet expos and trade shows</li>
                  <li>Corporate gifts for pet parents</li>
                  <li>Employee appreciation for pet-friendly companies</li>
                </ul>
                Bulk orders start at 25 units for standard products, with custom options available for larger
                quantities. We can create custom gift boxes, branded packaging, or personalized cards for corporate
                gifting. For events, we offer display solutions and individual packaging options. Please contact our
                events team at events@duskytarte.com at least 3 weeks before your event date.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>What marketing support do you provide to wholesale partners?</AccordionTrigger>
              <AccordionContent>
                We support our wholesale partners with:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>High-resolution product images and descriptions</li>
                  <li>Branded display materials and signage</li>
                  <li>Staff training materials on product features and benefits</li>
                  <li>Social media content and cross-promotion opportunities</li>
                  <li>Seasonal marketing calendars and promotion ideas</li>
                  <li>Product samples for staff and customer events</li>
                </ul>
                Our wholesale portal contains downloadable marketing assets, and our team can provide customized support
                for larger accounts. We also offer in-store tasting events and demonstrations for qualifying retailers
                within our service areas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>What is your wholesale shipping and delivery policy?</AccordionTrigger>
              <AccordionContent>
                Our wholesale shipping policies:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Standard production time: 5-7 business days after order confirmation</li>
                  <li>Rush orders: Available for a 15% surcharge, subject to capacity</li>
                  <li>Shipping methods: FedEx, UPS, or freight for large orders</li>
                  <li>Shipping costs: Calculated based on weight, dimensions, and destination</li>
                  <li>Free freight: Available for orders over $5,000 (continental US only)</li>
                </ul>
                All products are carefully packaged to prevent damage during transit. For temperature-sensitive items,
                we use insulated packaging and may restrict shipping during extreme weather conditions. We can split
                shipments or arrange for drop shipping to multiple locations for an additional fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>What is your wholesale return policy?</AccordionTrigger>
              <AccordionContent>
                Our wholesale return policy includes:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Damaged goods: Report within 48 hours of receipt with photos</li>
                  <li>Incorrect items: Report within 5 business days of receipt</li>
                  <li>Defective products: Covered by our quality guarantee</li>
                  <li>Returns for other reasons: Must be requested within 10 days, subject to 20% restocking fee</li>
                </ul>
                Due to the perishable nature of some products, returns may not be accepted for all items. Custom or
                personalized orders are non-returnable unless defective. Credit for approved returns will be issued to
                your account once items are received and inspected. We do not refund original shipping costs unless the
                return is due to our error.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Interested in becoming a wholesale partner?</h2>
          <p className="mb-4">
            Join our network of retailers and offer your customers the highest quality dog-friendly celebration
            products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/wholesale/apply">Apply for Wholesale Account</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:wholesale@duskytarte.com">Contact Wholesale Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

