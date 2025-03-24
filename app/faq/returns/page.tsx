import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ReturnsFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Returns Policy FAQ</h1>
          <p className="text-muted-foreground">Understanding our returns, refunds, and satisfaction guarantee</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is DUSKY-TARTE's satisfaction guarantee?</AccordionTrigger>
              <AccordionContent>
                We stand behind the quality of our products with a 100% satisfaction guarantee. If you or your dog are
                not completely satisfied with your purchase for any reason, please contact us within 48 hours of
                receiving your order. We'll work with you to make it right through a replacement, store credit, or
                refund, depending on the situation. Our priority is ensuring both you and your dog are happy with our
                products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I return perishable food items?</AccordionTrigger>
              <AccordionContent>
                Due to the perishable nature of our products, we cannot accept physical returns of cakes and treats.
                However, if there's an issue with your order (damage, quality concerns, incorrect item), please contact
                us within 48 hours of delivery with photos of the product and packaging. We'll provide a replacement,
                store credit, or refund based on the circumstances. For non-perishable items like merchandise, our
                standard return policy applies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What if my dog doesn't like the cake?</AccordionTrigger>
              <AccordionContent>
                We understand that dogs, like humans, have individual preferences! If your dog doesn't enjoy our
                product, please let us know within 48 hours of delivery. We'll offer a one-time store credit to try a
                different flavor or product that might better suit your dog's taste preferences. We may ask for feedback
                to help us understand your dog's preferences, which helps us improve our recipes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I return non-perishable items?</AccordionTrigger>
              <AccordionContent>
                For non-perishable items like merchandise, party supplies, or dog accessories:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Contact us at returns@duskytarte.com within 14 days of delivery</li>
                  <li>Include your order number and reason for return</li>
                  <li>We'll email you a return authorization and shipping label</li>
                  <li>Return the unused item in its original packaging</li>
                  <li>Once we receive and inspect the return, we'll process your refund</li>
                </ol>
                Return shipping is free for defective items. For preference-based returns, a $5.99 return shipping fee
                will be deducted from your refund.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What if my order arrives damaged?</AccordionTrigger>
              <AccordionContent>
                If your order arrives damaged:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Take photos of the damaged packaging and product before disturbing it further</li>
                  <li>Contact us within 24 hours at support@duskytarte.com</li>
                  <li>Include your order number and the photos</li>
                  <li>Our team will review your case immediately</li>
                </ol>
                In most cases, we'll ship a replacement right away. If a replacement isn't possible (due to timing or
                availability), we'll issue a full refund including shipping costs. We take quality very seriously and
                appreciate your help in documenting any shipping damage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How long do refunds take to process?</AccordionTrigger>
              <AccordionContent>
                Once we approve your refund request, the processing time depends on your payment method:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Credit/debit cards: 3-5 business days</li>
                  <li>PayPal/Venmo: 1-2 business days</li>
                  <li>Store credit: Immediately available in your account</li>
                </ul>
                Refunds are issued to the original payment method used for the purchase. If you paid with a gift card,
                the refund will be issued as store credit. For split payments, refunds will be proportionally applied to
                each payment method used.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Can I cancel or modify my order?</AccordionTrigger>
              <AccordionContent>
                You can cancel or modify your order if it hasn't entered production:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Standard orders: Can be modified or canceled within 24 hours of placing the order</li>
                  <li>
                    Custom orders: Can be modified or canceled within 48 hours of placing the order, before design
                    approval
                  </li>
                </ul>
                To request a cancellation or modification, email orders@duskytarte.com with your order number and
                requested changes. Once an order enters production, we cannot accept cancellations as ingredients have
                been allocated and production scheduled. For urgent situations, please call us directly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>What if I received the wrong item?</AccordionTrigger>
              <AccordionContent>
                If you received an incorrect item, please contact us within 24 hours at support@duskytarte.com. Include
                your order number and photos of what you received. We'll ship the correct item to you as quickly as
                possible, usually with expedited shipping at our expense. You don't need to return the incorrect item -
                we may ask you to donate it locally if appropriate, or dispose of it if it's perishable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do you offer exchanges?</AccordionTrigger>
              <AccordionContent>
                For non-perishable merchandise, we do offer exchanges for different sizes or colors. Request an exchange
                by emailing returns@duskytarte.com within 14 days of delivery. For perishable items, we cannot offer
                direct exchanges, but we can arrange for a replacement with a different flavor or variety as part of our
                satisfaction guarantee, depending on the circumstances.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>What if my order never arrived?</AccordionTrigger>
              <AccordionContent>
                If tracking shows your order was delivered but you didn't receive it, contact us within 24 hours. We'll
                work with the shipping carrier to locate the package or file a claim if necessary. If your package is
                significantly delayed in transit, we monitor these situations and will proactively contact you with
                options, which may include reshipping or refunding your order, depending on your preference and the
                circumstances.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Need more help?</h2>
          <p className="mb-4">
            If you have specific questions about returns or refunds for your order, our customer service team is ready
            to assist you.
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">Contact Customer Service</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

