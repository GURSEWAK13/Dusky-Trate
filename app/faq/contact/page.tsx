import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ContactFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Contact Us FAQ</h1>
          <p className="text-muted-foreground">Frequently asked questions about contacting DUSKY-TARTE</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are the best ways to contact DUSKY-TARTE?</AccordionTrigger>
              <AccordionContent>
                You can reach us through several channels:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Email: woof@duskytarte.com (24-hour response time)</li>
                  <li>Phone: (555) 123-4567 (Monday-Friday, 9am-5pm EST)</li>
                  <li>Contact form on our website</li>
                  <li>Social media direct messages (@DuskyTarte)</li>
                  <li>Visit our bakery in Portland, OR during business hours</li>
                </ul>
                For order-specific questions, please have your order number ready.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How quickly will I receive a response?</AccordionTrigger>
              <AccordionContent>
                We strive to respond to all inquiries within 24 business hours. During peak seasons (holidays, special
                events), response times may be slightly longer. Phone calls during business hours are typically answered
                immediately. If you have an urgent matter, please call us directly or indicate the urgency in your email
                subject line.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Who should I contact for wholesale inquiries?</AccordionTrigger>
              <AccordionContent>
                For wholesale, retail partnerships, or bulk orders, please email our dedicated business team at
                wholesale@duskytarte.com. Please include details about your business, estimated order volumes, and any
                specific requirements. Our wholesale team will get back to you within 2 business days with information
                about our wholesale program, pricing, and minimum order quantities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I contact DUSKY-TARTE about a problem with my order?</AccordionTrigger>
              <AccordionContent>
                If you experience any issues with your order, please email support@duskytarte.com with your order
                number, a description of the problem, and photos if applicable. For time-sensitive delivery issues,
                please call us at (555) 123-4567. We take quality very seriously and will work quickly to resolve any
                problems with your order.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I schedule a consultation for a custom cake?</AccordionTrigger>
              <AccordionContent>
                Yes! For custom cake consultations, you can schedule a 15-minute phone or video call with one of our
                cake designers. Please email custom@duskytarte.com with your preferred date and time, or call us
                directly to set up an appointment. During the consultation, we'll discuss your vision, your dog's
                preferences and dietary needs, and design options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How can I provide feedback about my experience?</AccordionTrigger>
              <AccordionContent>
                We value your feedback! You can share your experience through:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Our feedback form on the website</li>
                  <li>Email to feedback@duskytarte.com</li>
                  <li>Leaving a review on our product pages</li>
                  <li>Sharing on social media and tagging us</li>
                </ul>
                Your feedback helps us improve our products and services. We read every comment and take all suggestions
                seriously.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Do you offer tours of your bakery?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer small group tours of our bakery on the first Saturday of each month at 10am. Tours must be
                booked in advance by emailing tours@duskytarte.com. The tour lasts approximately 45 minutes and includes
                a behind-the-scenes look at our kitchen, information about our ingredients and processes, and
                complimentary samples for both humans and dogs. Space is limited to 10 people per tour.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How can I apply for a job at DUSKY-TARTE?</AccordionTrigger>
              <AccordionContent>
                We list all current job openings on the Careers page of our website. To apply, please send your resume
                and cover letter to careers@duskytarte.com with the position title in the subject line. Even if we don't
                have current openings, we welcome resumes from passionate individuals who love dogs and baking. We keep
                all applications on file for six months.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Ready to reach out?</h2>
          <p className="mb-4">Visit our contact page to send us a message or find our direct contact information.</p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

