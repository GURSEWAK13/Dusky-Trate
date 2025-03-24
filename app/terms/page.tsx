import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, FileText, ShieldCheck, Scale, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            The legal agreement between you and DUSKY-TARTE when using our website and services
          </p>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: March 15, 2023</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="account">Account Terms</TabsTrigger>
            <TabsTrigger value="orders">Orders & Payments</TabsTrigger>
            <TabsTrigger value="content">Content & IP</TabsTrigger>
            <TabsTrigger value="liability">Liability</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-amber-600" />
                  Terms & Conditions Overview
                </CardTitle>
                <CardDescription>A summary of our terms of service and your agreement with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                  <p className="mb-4">
                    Welcome to DUSKY-TARTE. These Terms & Conditions ("Terms") constitute a legally binding agreement
                    between you and DUSKY-TARTE governing your access to and use of our website, products, and services.
                    By accessing or using our website, placing an order, or otherwise engaging with our services, you
                    acknowledge that you have read, understood, and agree to be bound by these Terms.
                  </p>
                  <p>
                    Please read these Terms carefully before using our website or services. If you do not agree with any
                    part of these Terms, you must not use our website or services.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-amber-600" />
                        Key Terms
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li>"We," "us," and "our" refer to DUSKY-TARTE</li>
                        <li>"You" and "your" refer to the user of our services</li>
                        <li>"Website" refers to duskytarte.com and all subdomains</li>
                        <li>"Products" refers to all items available for purchase</li>
                        <li>"Services" refers to all services we provide</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <ShieldCheck className="mr-2 h-4 w-4 text-amber-600" />
                        Your Responsibilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li>Provide accurate account information</li>
                        <li>Maintain the security of your account</li>
                        <li>Use the website and services lawfully</li>
                        <li>Pay for products you order</li>
                        <li>Comply with all applicable laws and regulations</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Scale className="mr-2 h-4 w-4 text-amber-600" />
                        Our Commitments
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li>Provide dog-safe, quality products</li>
                        <li>Process orders promptly and accurately</li>
                        <li>Protect your personal information</li>
                        <li>Maintain a secure and functional website</li>
                        <li>Respond to customer inquiries and concerns</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Important Disclaimers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Product Variations</p>
                        <p className="text-sm text-muted-foreground">
                          Our products are handmade with natural ingredients and may vary slightly in appearance, color,
                          or texture from the images shown on our website.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Pet Health</p>
                        <p className="text-sm text-muted-foreground">
                          While our products are designed to be safe for dogs, individual pets may have specific
                          allergies or sensitivities. Always monitor your pet when introducing new foods.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Website Availability</p>
                        <p className="text-sm text-muted-foreground">
                          We do not guarantee that our website will be available at all times or that it will be
                          error-free or uninterrupted.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Third-Party Links</p>
                        <p className="text-sm text-muted-foreground">
                          Our website may contain links to third-party websites that are not owned or controlled by us.
                          We are not responsible for their content or privacy practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Changes to These Terms</h3>
                  <p className="mb-4">
                    We may update these Terms from time to time to reflect changes in our practices, services, or for
                    legal, operational, or regulatory reasons. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Posting the updated Terms on our website</li>
                    <li>Updating the "Last Updated" date at the top of these Terms</li>
                    <li>Sending an email notification to registered users (for significant changes)</li>
                    <li>Displaying a notice on our website</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Your continued use of our website or services after any changes to these Terms constitutes your
                    acceptance of the revised Terms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-amber-600" />
                  Account Terms
                </CardTitle>
                <CardDescription>Terms related to account creation, management, and termination</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Account Creation and Eligibility</h3>
                  <p className="mb-4">To create an account and use our services, you must:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Be at least 18 years of age or the age of legal majority in your jurisdiction</li>
                    <li>Provide accurate, current, and complete information during the registration process</li>
                    <li>Maintain and promptly update your account information to keep it accurate and complete</li>
                    <li>Have the legal capacity to enter into a binding agreement</li>
                    <li>Not be prohibited from using our services under applicable law</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                  <p className="mb-4">
                    You are responsible for maintaining the security of your account and password. We recommend the
                    following security practices:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Create a strong, unique password for your DUSKY-TARTE account</li>
                    <li>Do not share your password or account credentials with others</li>
                    <li>Log out of your account when using shared devices</li>
                    <li>Notify us immediately of any unauthorized access or use of your account</li>
                    <li>Enable two-factor authentication if available</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    You are responsible for all activities that occur under your account. We will not be liable for any
                    loss or damage arising from your failure to maintain adequate security of your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Account Restrictions</h3>
                  <p className="mb-4">When using your account, you agree not to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Create multiple accounts for the same person</li>
                    <li>Create an account on behalf of someone else without their permission</li>
                    <li>Use your account for any illegal or unauthorized purpose</li>
                    <li>Attempt to probe, scan, or test the vulnerability of our systems</li>
                    <li>Interfere with or disrupt the integrity or performance of our website or services</li>
                    <li>Attempt to gain unauthorized access to other user accounts or our systems</li>
                    <li>Engage in any activity that could damage, disable, or impair our services</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Account Termination</h3>
                  <p className="mb-4">
                    We reserve the right to suspend or terminate your account in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Violation of these Terms or any other of our policies</li>
                    <li>Engaging in fraudulent or illegal activities</li>
                    <li>Providing false or misleading information</li>
                    <li>Extended periods of inactivity (typically 3+ years)</li>
                    <li>At our discretion for any reason with reasonable notice</li>
                  </ul>
                  <p className="mb-4">
                    You may also request to delete your account at any time by contacting our customer service team or
                    using the account deletion option in your account settings.
                  </p>
                  <p className="text-sm italic">
                    Upon account termination, you may lose access to your order history, saved information, and any
                    accumulated rewards or credits. We may retain certain information as required by law or for
                    legitimate business purposes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-amber-600" />
                  Orders & Payments
                </CardTitle>
                <CardDescription>Terms related to ordering, payments, shipping, and refunds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ordering Process</h3>
                  <p className="mb-4">When you place an order through our website:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>You are making an offer to purchase the products in your cart</li>
                    <li>
                      We will send you an order confirmation email, which constitutes our acceptance of your order
                    </li>
                    <li>A contract for the sale of products is formed when we send the order confirmation</li>
                    <li>
                      We reserve the right to refuse or cancel any order for any reason, including product availability,
                      errors in pricing or product information, or suspected fraud
                    </li>
                  </ol>
                  <p className="text-sm italic mt-2">
                    All orders are subject to product availability and confirmation of the order price.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Pricing and Payment</h3>
                  <p className="mb-4">The following terms apply to pricing and payments:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>All prices are listed in US dollars and are subject to change without notice</li>
                    <li>Prices do not include taxes, shipping, or handling fees, which will be added at checkout</li>
                    <li>
                      We accept major credit/debit cards, PayPal, and other payment methods as indicated at checkout
                    </li>
                    <li>
                      By providing payment information, you represent that you are authorized to use the payment method
                    </li>
                    <li>Payment must be received in full before we ship your order</li>
                    <li>We use industry-standard security measures to protect your payment information</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    In the event of a pricing error, we reserve the right to cancel the order and refund any amount
                    paid.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Shipping and Delivery</h3>
                  <p className="mb-4">Our shipping and delivery terms include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Delivery times are estimates and not guaranteed</li>
                    <li>Risk of loss and title for products pass to you upon delivery to the carrier</li>
                    <li>You are responsible for providing accurate shipping information</li>
                    <li>We are not liable for delivery delays caused by events outside our control</li>
                    <li>Additional charges may apply for expedited shipping, remote locations, or special handling</li>
                    <li>For perishable items, someone must be available to receive the delivery</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Please refer to our Shipping Policy for detailed information about shipping methods, timeframes, and
                    costs.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Returns, Refunds, and Cancellations</h3>
                  <p className="mb-4">Our policies regarding returns, refunds, and cancellations include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      Due to the perishable nature of our products, we cannot accept physical returns of food items
                    </li>
                    <li>For quality issues with perishable items, contact us within 48 hours of delivery</li>
                    <li>Non-perishable items may be returned within 14 days in original condition</li>
                    <li>
                      Orders can be canceled or modified within 24 hours of placing the order, if not yet in production
                    </li>
                    <li>Refunds will be issued to the original payment method</li>
                    <li>Shipping costs are generally non-refundable unless the return is due to our error</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Please refer to our Returns Policy for detailed information about our return and refund procedures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-amber-600" />
                  Content & Intellectual Property
                </CardTitle>
                <CardDescription>
                  Terms related to website content, user content, and intellectual property rights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Website Content</h3>
                  <p className="mb-4">
                    All content on our website, including but not limited to text, graphics, logos, images, audio clips,
                    digital downloads, data compilations, and software, is the property of DUSKY-TARTE or our content
                    suppliers and is protected by international copyright, trademark, and other intellectual property
                    laws.
                  </p>
                  <p>
                    You may access, view, download, and print content from our website for your personal, non-commercial
                    use, provided you do not modify or delete any copyright, trademark, or other proprietary notices.
                    You may not otherwise reproduce, distribute, display, sell, lease, transmit, create derivative works
                    from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit our website
                    or any portion of it without our explicit written permission.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Trademarks</h3>
                  <p className="mb-4">
                    The DUSKY-TARTE name, logo, and all related names, logos, product and service names, designs, and
                    slogans are trademarks of DUSKY-TARTE or our affiliates. You may not use these marks without our
                    prior written permission. All other names, logos, product and service names, designs, and slogans on
                    our website are the trademarks of their respective owners.
                  </p>
                  <p>
                    Any use of our trademarks, including in metatags, name of other websites, domain names, or other
                    online advertising, without our prior written consent is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">User Content</h3>
                  <p className="mb-4">
                    When you submit, post, or display content on our website (such as product reviews, comments, or
                    photos), you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable
                    right to use, reproduce, modify, adapt, publish, translate, create derivative works from,
                    distribute, and display such content throughout the world in any media.
                  </p>
                  <p className="mb-4">You represent and warrant that:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>You own or control all rights to the content you post</li>
                    <li>The content is accurate and not misleading</li>
                    <li>The content does not violate these Terms or any applicable law</li>
                    <li>The content will not cause injury to any person or entity</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    We have the right, but not the obligation, to monitor, edit, or remove any user content. We take no
                    responsibility and assume no liability for any content posted by you or any third party.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Digital Millennium Copyright Act</h3>
                  <p className="mb-4">
                    If you believe that any content on our website infringes upon your copyright, please send a notice
                    of alleged copyright infringement to our designated agent:
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    DUSKY-TARTE Copyright Agent
                    <br />
                    123 Paw Street
                    <br />
                    Portland, OR 97201
                    <br />
                    Email: copyright@duskytarte.com
                  </p>
                  <p className="mb-4">Your notice must include:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>A physical or electronic signature of the copyright owner or authorized agent</li>
                    <li>Identification of the copyrighted work claimed to have been infringed</li>
                    <li>Identification of the material that is claimed to be infringing</li>
                    <li>Your contact information (address, telephone number, and email)</li>
                    <li>A statement that you have a good faith belief that the use is not authorized</li>
                    <li>
                      A statement, under penalty of perjury, that the information in the notice is accurate and that you
                      are authorized to act on behalf of the copyright owner
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="liability" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="mr-2 h-5 w-5 text-amber-600" />
                  Liability & Dispute Resolution
                </CardTitle>
                <CardDescription>
                  Terms related to warranties, liability limitations, and dispute resolution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Disclaimer of Warranties</h3>
                  <p className="mb-4">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS
                    AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                    TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p className="mb-4">We do not warrant that:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Our website or services will always be available, uninterrupted, or error-free</li>
                    <li>Any errors or defects will be corrected</li>
                    <li>Our website is free of viruses or other harmful components</li>
                    <li>The results of using our website or services will meet your requirements</li>
                  </ul>
                  <p>
                    While we make every effort to ensure the accuracy of product information, we do not warrant that
                    product descriptions, photographs, pricing, or other content on our website are accurate, complete,
                    reliable, current, or error-free.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>
                  <p className="mb-4">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, DUSKY-TARTE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                    SUPPLIERS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                    INTANGIBLE LOSSES, RESULTING FROM:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Your access to or use of or inability to access or use our website or services</li>
                    <li>Any conduct or content of any third party on our website</li>
                    <li>Any content obtained from our website</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO US
                    DURING THE TWELVE (12) MONTH PERIOD PRIOR TO THE ACT GIVING RISE TO LIABILITY.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Indemnification</h3>
                  <p className="mb-4">
                    You agree to indemnify, defend, and hold harmless DUSKY-TARTE, its officers, directors, employees,
                    agents, suppliers, and affiliates from and against any claims, liabilities, damages, judgments,
                    awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or
                    relating to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Your violation of these Terms</li>
                    <li>Your use of our website or services</li>
                    <li>Your content posted on our website</li>
                    <li>Your violation of any rights of a third party</li>
                    <li>Your violation of any applicable laws, rules, or regulations</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Dispute Resolution</h3>
                  <p className="mb-4">
                    Any dispute arising from or relating to these Terms or your use of our website or services shall be
                    resolved as follows:
                  </p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Informal Resolution:</span> We encourage you to contact us first to
                      seek an informal resolution to any dispute.
                    </li>
                    <li>
                      <span className="font-medium">Binding Arbitration:</span> If informal resolution is unsuccessful,
                      any dispute shall be resolved by binding arbitration conducted by a single arbitrator in Portland,
                      Oregon, in accordance with the rules of the American Arbitration Association.
                    </li>
                    <li>
                      <span className="font-medium">Exceptions:</span> The arbitration requirement does not apply to
                      actions to enforce intellectual property rights, or small claims court actions.
                    </li>
                    <li>
                      <span className="font-medium">Class Action Waiver:</span> Any proceedings to resolve disputes will
                      be conducted on an individual basis. Neither you nor we will seek to have any dispute heard as a
                      class action.
                    </li>
                    <li>
                      <span className="font-medium">Governing Law:</span> These Terms shall be governed by the laws of
                      the State of Oregon, without regard to its conflict of law provisions.
                    </li>
                  </ol>
                  <p className="text-sm italic mt-2">
                    BY AGREEING TO THESE TERMS, YOU ARE WAIVING YOUR RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A
                    CLASS ACTION.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Questions About Our Terms?</h2>
          <p className="mb-6">
            If you have any questions or concerns about our Terms & Conditions, please contact our legal team for
            clarification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Legal Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq/terms">View Terms FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

