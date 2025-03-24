import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions FAQ</h1>
          <p className="text-muted-foreground">Frequently asked questions about our terms of service</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are the key points of DUSKY-TARTE's Terms & Conditions?</AccordionTrigger>
              <AccordionContent>
                Our Terms & Conditions cover several important areas:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Account creation and responsibilities</li>
                  <li>Ordering process and payment terms</li>
                  <li>Shipping and delivery policies</li>
                  <li>Product guarantees and return policies</li>
                  <li>Intellectual property rights</li>
                  <li>Limitation of liability</li>
                  <li>Dispute resolution</li>
                </ul>
                These terms create a legal agreement between you and DUSKY-TARTE when you use our website or purchase
                our products. We recommend reading the full terms for complete understanding.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need an account to place an order?</AccordionTrigger>
              <AccordionContent>
                While you can browse our website without an account, creating an account is required to place an order.
                This allows us to:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Process and track your orders</li>
                  <li>Store your delivery information for faster checkout</li>
                  <li>Maintain your order history</li>
                  <li>Create pet profiles for personalized recommendations</li>
                  <li>Manage your communication preferences</li>
                </ul>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept the following payment methods:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Major credit and debit cards (Visa, Mastercard, American Express, Discover)</li>
                  <li>PayPal</li>
                  <li>Apple Pay (on compatible devices)</li>
                  <li>Google Pay (on compatible devices)</li>
                  <li>DUSKY-TARTE gift cards</li>
                </ul>
                All payments are processed securely through our payment processors. We do not store complete credit card
                information on our servers. By submitting payment information, you represent that you are authorized to
                use the payment method.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use DUSKY-TARTE content on my social media?</AccordionTrigger>
              <AccordionContent>
                We encourage customers to share their experiences with our products on social media, with some
                limitations:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You may share photos of products you've purchased for personal, non-commercial use</li>
                  <li>Please tag us (@DuskyTarte) when sharing content</li>
                  <li>You may not use our content to promote competing products</li>
                  <li>You may not modify our product images or misrepresent our products</li>
                  <li>Our logo, product images, and website content remain our intellectual property</li>
                </ul>
                For commercial use of our content or collaboration requests, please contact marketing@duskytarte.com.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What is your disclaimer regarding pet health?</AccordionTrigger>
              <AccordionContent>
                While our products are designed to be safe for dogs, we provide the following disclaimers:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Our products are treats, not meal replacements or medication</li>
                  <li>We recommend consulting your veterinarian before introducing new foods to your pet's diet</li>
                  <li>Individual dogs may have specific allergies or sensitivities</li>
                  <li>We list all ingredients but cannot guarantee against all possible reactions</li>
                  <li>Supervision is recommended when giving any treat to your pet</li>
                </ul>
                By purchasing our products, you acknowledge that you are responsible for determining whether our
                products are appropriate for your pet based on their specific health needs and conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How does DUSKY-TARTE handle disputes?</AccordionTrigger>
              <AccordionContent>
                Our dispute resolution process includes:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>
                    Direct resolution: We encourage contacting our customer service team first to resolve any issues
                  </li>
                  <li>
                    Mediation: If direct resolution isn't successful, we may suggest mediation through a mutually agreed
                    third party
                  </li>
                  <li>
                    Arbitration: For unresolved disputes, we use binding arbitration rather than court proceedings
                  </li>
                  <li>Applicable law: All disputes are governed by the laws of Oregon</li>
                </ol>
                By using our website or purchasing our products, you agree to this dispute resolution process. Small
                claims court actions and intellectual property enforcement actions are exceptions to the arbitration
                requirement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Can I resell DUSKY-TARTE products?</AccordionTrigger>
              <AccordionContent>
                Our products are intended for personal use, not resale. Unauthorized reselling is prohibited for several
                reasons:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Quality control: We cannot guarantee product quality after it leaves our control</li>
                  <li>Food safety: Improper storage or handling may compromise product safety</li>
                  <li>Brand protection: Unauthorized resellers may misrepresent our products</li>
                  <li>
                    Customer experience: We cannot provide customer service for products purchased from unauthorized
                    resellers
                  </li>
                </ul>
                If you're interested in becoming an authorized retailer, please contact wholesale@duskytarte.com for
                information about our wholesale program.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How often are the Terms & Conditions updated?</AccordionTrigger>
              <AccordionContent>
                We review and update our Terms & Conditions periodically to reflect:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Changes in our business practices</li>
                  <li>Updates to applicable laws and regulations</li>
                  <li>New features or services</li>
                  <li>Feedback from customers and legal advisors</li>
                </ul>
                When we make significant changes, we'll notify you through our website and/or email. The "Last Updated"
                date at the top of the Terms & Conditions indicates when they were most recently revised. Continuing to
                use our website or services after changes constitutes acceptance of the updated terms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>What are the limitations on DUSKY-TARTE's liability?</AccordionTrigger>
              <AccordionContent>
                Our Terms & Conditions include limitations on our liability:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>We are not liable for indirect, incidental, special, or consequential damages</li>
                  <li>Our total liability is limited to the amount you paid for the product in question</li>
                  <li>We do not warrant that our website will be error-free or uninterrupted</li>
                  <li>We are not responsible for third-party content linked from our website</li>
                </ul>
                These limitations protect our business while still ensuring we stand behind the quality of our products.
                Some jurisdictions do not allow certain limitations of liability, so these limitations may not apply to
                you in full.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Can DUSKY-TARTE terminate my account?</AccordionTrigger>
              <AccordionContent>
                Yes, we reserve the right to terminate accounts in certain circumstances:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Violation of our Terms & Conditions</li>
                  <li>Fraudulent activity or security concerns</li>
                  <li>Abusive behavior toward our staff or other customers</li>
                  <li>Extended periods of inactivity (typically 3+ years)</li>
                  <li>At our discretion for any reason with reasonable notice</li>
                </ul>
                If your account is terminated, you may lose access to your order history, saved information, and any
                accumulated rewards or credits. We will notify you via email if your account is terminated, except in
                cases of fraud or security concerns.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Need more details?</h2>
          <p className="mb-4">
            For a complete understanding of our terms and conditions, please review the full document or contact our
            customer service team with specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/legal/terms">View Full Terms & Conditions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Customer Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

