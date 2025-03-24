import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, RotateCcw, ShieldCheck, AlertTriangle, CheckCircle } from "lucide-react"

export default function ReturnsPage() {
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
          <h1 className="text-3xl font-bold mb-2">Returns & Refunds Policy</h1>
          <p className="text-muted-foreground">
            Our commitment to your satisfaction and how we handle returns, refunds, and exchanges
          </p>
        </div>

        <Tabs defaultValue="policy" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="policy">Return Policy</TabsTrigger>
            <TabsTrigger value="process">Return Process</TabsTrigger>
            <TabsTrigger value="refunds">Refunds</TabsTrigger>
            <TabsTrigger value="guarantee">Satisfaction Guarantee</TabsTrigger>
          </TabsList>

          <TabsContent value="policy" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <RotateCcw className="mr-2 h-5 w-5 text-amber-600" />
                      Our Return Policy
                    </CardTitle>
                    <CardDescription>Understanding what can be returned and under what circumstances</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Perishable Products</h3>
                      <p className="mb-2">
                        Due to the perishable nature of our dog cakes and treats, we cannot accept physical returns of
                        these items. However, we stand behind the quality of our products:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>
                          If your perishable item arrives damaged or spoiled, please contact us within 24 hours of
                          delivery with photos
                        </li>
                        <li>
                          If your dog doesn't enjoy the product, let us know within 48 hours of delivery for a one-time
                          store credit
                        </li>
                        <li>
                          If you received an incorrect item, contact us within 24 hours for a replacement or refund
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Non-Perishable Products</h3>
                      <p className="mb-2">
                        For non-perishable items such as merchandise, party supplies, and accessories:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Returns accepted within 14 days of delivery</li>
                        <li>Items must be unused, unworn, and in original packaging</li>
                        <li>Return shipping is the customer's responsibility unless the item is defective</li>
                        <li>A return authorization is required before sending any items back</li>
                        <li>Personalized or custom-made non-perishable items cannot be returned unless defective</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Exceptions to Return Policy</h3>
                      <p className="mb-2">The following items cannot be returned under any circumstances:</p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Opened or partially consumed food products</li>
                        <li>Clearance or final sale items (marked as such)</li>
                        <li>Gift cards and digital products</li>
                        <li>Items damaged due to improper handling after delivery</li>
                        <li>Products purchased more than 14 days ago (non-perishable) or 48 hours ago (perishable)</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-2">Special Circumstances</h3>
                      <p className="mb-2">
                        We understand that special situations may arise. In the following cases, please contact our
                        customer service team directly:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Orders for special events that were canceled</li>
                        <li>Products that caused adverse reactions in your pet</li>
                        <li>Multiple delivery attempts that failed</li>
                        <li>Gifts received that you wish to exchange</li>
                      </ul>
                      <p className="text-sm italic mt-2">
                        We'll work with you to find a fair resolution on a case-by-case basis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-amber-50 border-amber-100">
                  <CardHeader>
                    <CardTitle>Our Philosophy</CardTitle>
                    <CardDescription>Why we stand behind our products</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                      <Image
                        src="https://i.pinimg.com/736x/49/88/f8/4988f87ec4a9bd1edfd99bc035474716.jpg"
                        alt="Happy dog with cake"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground">
                      At DUSKY-TARTE, we believe that every dog deserves to celebrate with treats that are not only
                      delicious but also safe and healthy. Our return policy reflects our commitment to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Quality ingredients and careful preparation</li>
                      <li>Customer and canine satisfaction</li>
                      <li>Fair and transparent business practices</li>
                      <li>Building long-term relationships with our customers</li>
                      <li>Continuous improvement based on feedback</li>
                    </ul>
                    <p className="text-sm italic">
                      While we can't accept physical returns of perishable items, we promise to make things right if
                      you're not completely satisfied.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                      Important Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>
                          Inspect all products immediately upon delivery and report any issues within 24 hours
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Take photos of damaged products or packaging before disturbing the contents</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Keep all packaging materials until you're satisfied with your purchase</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Contact us before attempting to return any items</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RotateCcw className="mr-2 h-5 w-5 text-amber-600" />
                  Return Process
                </CardTitle>
                <CardDescription>Step-by-step guide to initiating and completing a return</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">For Perishable Items</h3>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <p className="font-medium">Document the Issue</p>
                        <p className="text-sm text-muted-foreground">
                          Take clear photos of the damaged or incorrect product and packaging. For quality issues,
                          describe the problem in detail.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Contact Customer Service</p>
                        <p className="text-sm text-muted-foreground">
                          Email returns@duskytarte.com within 24 hours of delivery with your order number, photos, and
                          description of the issue.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Receive Confirmation</p>
                        <p className="text-sm text-muted-foreground">
                          Our team will review your request and respond within 1-2 business days with next steps.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Resolution</p>
                        <p className="text-sm text-muted-foreground">
                          Depending on the situation, we'll offer a replacement, store credit, or refund. No need to
                          return perishable items.
                        </p>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">For Non-Perishable Items</h3>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <p className="font-medium">Request Return Authorization</p>
                        <p className="text-sm text-muted-foreground">
                          Email returns@duskytarte.com within 14 days of delivery with your order number and reason for
                          return.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Receive Return Instructions</p>
                        <p className="text-sm text-muted-foreground">
                          We'll email you a return authorization number and shipping instructions within 1-2 business
                          days.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Package the Item</p>
                        <p className="text-sm text-muted-foreground">
                          Securely package the unused item in its original packaging with the return authorization
                          number clearly marked.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Ship the Return</p>
                        <p className="text-sm text-muted-foreground">
                          Send the package to our return address using a trackable shipping method. Keep your tracking
                          number.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Return Processing</p>
                        <p className="text-sm text-muted-foreground">
                          Once received, we'll inspect the item and process your refund or exchange within 5-7 business
                          days.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Return Shipping Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Return Address</h4>
                      <p className="text-sm text-blue-600">
                        DUSKY-TARTE Returns
                        <br />
                        123 Paw Street
                        <br />
                        Portland, OR 97201
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-1">Shipping Costs</h4>
                      <ul className="list-disc pl-6 text-sm text-blue-600">
                        <li>Customer is responsible for return shipping costs</li>
                        <li>Free return shipping for defective or incorrect items</li>
                        <li>We recommend using a trackable shipping method</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Exchanges</h3>
                  <p className="mb-2">If you'd prefer an exchange rather than a refund:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>Indicate your preference for an exchange when contacting customer service</li>
                    <li>Specify the item you'd like to receive instead</li>
                    <li>If there's a price difference, we'll either charge or refund the difference</li>
                    <li>Exchanges are processed after we receive and inspect the returned item</li>
                    <li>Exchange items are shipped within 1-2 business days after processing</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="refunds" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-amber-600" />
                  Refund Information
                </CardTitle>
                <CardDescription>Understanding how and when refunds are processed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Refund Methods</h3>
                  <p className="mb-2">Refunds are processed to the original payment method used for the purchase:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Credit/Debit Cards:</span> Refunded to the original card used for
                      purchase
                    </li>
                    <li>
                      <span className="font-medium">PayPal:</span> Refunded to your PayPal account
                    </li>
                    <li>
                      <span className="font-medium">Gift Cards:</span> Refunded as store credit to your account
                    </li>
                    <li>
                      <span className="font-medium">Split Payments:</span> Refunded proportionally to each payment
                      method used
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Refund Timeframes</h3>
                    <p className="mb-2">The time it takes to receive your refund depends on several factors:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>
                        <span className="font-medium">Processing Time:</span> 1-2 business days after approval (for
                        perishable items) or 5-7 business days after receiving and inspecting your return (for
                        non-perishable items)
                      </li>
                      <li>
                        <span className="font-medium">Credit/Debit Cards:</span> 3-5 additional business days for the
                        refund to appear on your statement
                      </li>
                      <li>
                        <span className="font-medium">PayPal:</span> 1-2 additional business days
                      </li>
                      <li>
                        <span className="font-medium">Store Credit:</span> Immediately available in your account
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Partial Refunds</h3>
                    <p className="mb-2">In some cases, we may issue partial refunds:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>When only part of an order is being returned</li>
                      <li>For non-perishable items returned in less than perfect condition</li>
                      <li>When a promotional discount was applied to the original order</li>
                      <li>For shipping costs when only part of an order is being returned</li>
                    </ul>
                    <p className="text-sm italic mt-2">
                      We'll always communicate the reason and amount for any partial refund before processing.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Refund Exclusions</h3>
                  <p className="mb-2">The following charges are generally non-refundable:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Original shipping charges (unless the return is due to our error)</li>
                    <li>Gift wrapping or other special handling fees</li>
                    <li>Return shipping costs (unless the return is due to our error)</li>
                    <li>Personalization or customization fees</li>
                  </ul>
                </div>

                <div className="border p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Refund Notifications</h3>
                  <p className="mb-4">You'll receive email notifications at each stage of the refund process:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>When your refund request is received</li>
                    <li>When your return is received (for non-perishable items)</li>
                    <li>When your refund is approved</li>
                    <li>When your refund is processed</li>
                  </ol>
                  <p className="text-sm italic mt-2">
                    If you haven't received a notification or have questions about your refund status, please contact
                    our customer service team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guarantee" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-amber-600" />
                  Our Satisfaction Guarantee
                </CardTitle>
                <CardDescription>
                  How we ensure you and your dog are completely satisfied with your purchase
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <div className="md:w-1/3">
                      <Image
                        src="https://i.pinimg.com/736x/c4/28/a5/c428a532a4b6c34eedb4e26a07542cf8.jpg"
                        alt="Happy dog with cake"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-4">Our Promise to You</h3>
                      <p className="mb-4">
                        At DUSKY-TARTE, we stand behind the quality of our products with a 100% satisfaction guarantee.
                        We're committed to creating safe, wholesome, and delicious treats that your dog will love.
                      </p>
                      <p>
                        If you or your dog are not completely satisfied with your purchase for any reason, we'll work
                        with you to make it right through a replacement, store credit, or refund, depending on the
                        situation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What Our Guarantee Covers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Product Quality</p>
                        <p className="text-sm text-muted-foreground">
                          If your product arrives damaged, spoiled, or otherwise compromised, we'll replace it or
                          provide a full refund.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Taste Preferences</p>
                        <p className="text-sm text-muted-foreground">
                          If your dog doesn't enjoy our product, we'll offer a one-time store credit to try a different
                          flavor or product.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Incorrect Items</p>
                        <p className="text-sm text-muted-foreground">
                          If you receive the wrong item, we'll ship the correct product immediately or provide a full
                          refund.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Delivery Issues</p>
                        <p className="text-sm text-muted-foreground">
                          If your order is significantly delayed or lost in transit, we'll send a replacement or provide
                          a full refund.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">How to Invoke Our Guarantee</h3>
                  <p className="mb-2">If you're not satisfied with your purchase:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>Contact us within 48 hours of receiving your order</li>
                    <li>Provide your order number and details about the issue</li>
                    <li>Include photos if applicable (for damaged or incorrect items)</li>
                    <li>Let us know your preferred resolution (replacement, store credit, or refund)</li>
                  </ol>
                  <p className="text-sm italic mt-2">
                    We'll review your request and respond within 1-2 business days with a resolution.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Limitations and Exceptions</h3>
                  <p className="mb-2">
                    While we strive for 100% customer satisfaction, there are some limitations to our guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Claims must be made within 48 hours of delivery for perishable items</li>
                    <li>Guarantee does not cover improper storage or handling after delivery</li>
                    <li>Limited to one satisfaction claim per product type per customer</li>
                    <li>Does not cover normal variation in natural products</li>
                    <li>Special orders and custom items may have different terms</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Customer Testimonials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-green-100 rounded p-3 bg-white">
                      <p className="italic text-sm mb-2">
                        "When my dog's birthday cake arrived damaged, the DUSKY-TARTE team immediately sent a
                        replacement that arrived the next day. They saved our celebration!"
                      </p>
                      <p className="text-right text-xs text-green-700">— Sarah & Max</p>
                    </div>
                    <div className="border border-green-100 rounded p-3 bg-white">
                      <p className="italic text-sm mb-2">
                        "My picky eater didn't care for the peanut butter flavor, but DUSKY-TARTE let us exchange it for
                        the pumpkin variety which he absolutely loved. Great customer service!"
                      </p>
                      <p className="text-right text-xs text-green-700">— James & Bella</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Need Help with a Return or Refund?</h2>
          <p className="mb-6">
            Our customer service team is here to help with any questions or concerns about returns, refunds, or our
            satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Customer Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq/returns">View Returns FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

