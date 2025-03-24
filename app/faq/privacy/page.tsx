import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy FAQ</h1>
          <p className="text-muted-foreground">Frequently asked questions about how we handle your data</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What information does DUSKY-TARTE collect?</AccordionTrigger>
              <AccordionContent>
                We collect several types of information to provide and improve our services:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Personal information: Name, email address, shipping address, phone number</li>
                  <li>Order information: Purchase history, product preferences, payment details</li>
                  <li>Account information: Login credentials, pet profiles, preferences</li>
                  <li>Website usage: Browsing behavior, device information, IP address</li>
                  <li>Communications: Customer service interactions, survey responses</li>
                </ul>
                We only collect information that's necessary to provide our services and improve your experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How is my personal information used?</AccordionTrigger>
              <AccordionContent>
                We use your personal information for specific purposes:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Processing and fulfilling your orders</li>
                  <li>Managing your account and providing customer support</li>
                  <li>Sending order confirmations and shipping updates</li>
                  <li>Personalizing your shopping experience</li>
                  <li>Sending relevant marketing communications (if you've opted in)</li>
                  <li>Improving our products and services</li>
                  <li>Detecting and preventing fraud</li>
                </ul>
                We never sell your personal information to third parties for marketing purposes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How does DUSKY-TARTE protect my data?</AccordionTrigger>
              <AccordionContent>
                We implement multiple security measures to protect your data:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure payment processing (we never store complete credit card numbers)</li>
                  <li>Password protection and authentication for accounts</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
                We regularly review and update our security practices to maintain the highest standards of data
                protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Does DUSKY-TARTE use cookies?</AccordionTrigger>
              <AccordionContent>
                Yes, we use cookies and similar technologies to enhance your browsing experience:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Functional cookies: Remember your preferences and settings</li>
                  <li>Analytics cookies: Help us understand how visitors use our site</li>
                  <li>Marketing cookies: Used to deliver relevant advertisements</li>
                </ul>
                You can manage your cookie preferences through our Cookie Preferences Center or your browser settings.
                Disabling certain cookies may affect the functionality of our website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Who does DUSKY-TARTE share my information with?</AccordionTrigger>
              <AccordionContent>
                We share your information with a limited number of trusted third parties:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Shipping partners (to deliver your orders)</li>
                  <li>Payment processors (to process transactions)</li>
                  <li>Service providers (for website hosting, analytics, customer support)</li>
                  <li>Legal authorities (when required by law)</li>
                </ul>
                All third-party service providers are contractually obligated to use your information only for the
                specific services they provide to us and to maintain appropriate security measures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How long does DUSKY-TARTE keep my data?</AccordionTrigger>
              <AccordionContent>
                We retain your personal information for as long as necessary to:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Provide our services and fulfill our contractual obligations</li>
                  <li>Comply with legal requirements (tax, accounting, etc.)</li>
                  <li>Resolve disputes and enforce our agreements</li>
                </ul>
                Typically, we keep order information for 7 years to comply with tax regulations. Account information is
                retained until you request deletion. If you haven't used your account for 3 years, we may contact you to
                confirm you wish to maintain it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What are my privacy rights?</AccordionTrigger>
              <AccordionContent>
                Depending on your location, you may have several rights regarding your personal data:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict or object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                </ul>
                To exercise these rights, please contact our Privacy Team at privacy@duskytarte.com. We'll respond to
                all requests within 30 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How can I opt out of marketing communications?</AccordionTrigger>
              <AccordionContent>
                You can opt out of marketing communications in several ways:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Click the "Unsubscribe" link in any marketing email</li>
                  <li>Update your communication preferences in your account settings</li>
                  <li>Contact customer service at support@duskytarte.com</li>
                  <li>Text STOP to our SMS short code if you've subscribed to text messages</li>
                </ul>
                Please note that even if you opt out of marketing communications, you'll still receive transactional
                emails related to your orders and account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Does DUSKY-TARTE collect information about children?</AccordionTrigger>
              <AccordionContent>
                Our website and services are not directed to children under 16. We do not knowingly collect personal
                information from children under 16. If you believe we have inadvertently collected information from a
                child under 16, please contact us immediately at privacy@duskytarte.com, and we will promptly delete the
                information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>How will I be notified of privacy policy changes?</AccordionTrigger>
              <AccordionContent>
                If we make significant changes to our privacy policy, we'll notify you through:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>A prominent notice on our website</li>
                  <li>Email notification to the address associated with your account</li>
                  <li>Account notification when you log in</li>
                </ul>
                We encourage you to periodically review our privacy policy for any changes. The "Last Updated" date at
                the top of the policy indicates when it was most recently revised.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Need more information?</h2>
          <p className="mb-4">
            For a complete explanation of our data practices, please review our full Privacy Policy or contact our
            Privacy Team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/legal/privacy-policy">View Full Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Privacy Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

