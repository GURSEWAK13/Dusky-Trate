import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Truck, Clock, Package, AlertTriangle, CheckCircle } from "lucide-react"

export default function ShippingPage() {
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
          <h1 className="text-3xl font-bold mb-2">Shipping Policy</h1>
          <p className="text-muted-foreground">
            Everything you need to know about how we ship our dog-friendly cakes and treats
          </p>
        </div>

        <Tabs defaultValue="methods" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="methods">Shipping Methods</TabsTrigger>
            <TabsTrigger value="timeframes">Delivery Timeframes</TabsTrigger>
            <TabsTrigger value="costs">Shipping Costs</TabsTrigger>
            <TabsTrigger value="international">International Shipping</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-amber-600" />
                      Our Shipping Methods
                    </CardTitle>
                    <CardDescription>
                      We offer several shipping options to ensure your dog's treats arrive fresh and on time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Standard Shipping</h3>
                      <p className="mb-2">
                        Our standard shipping option delivers your order within 3-5 business days. This is our most
                        economical option and is available for all products.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Delivered via USPS, FedEx, or UPS depending on your location</li>
                        <li>Tracking information provided via email</li>
                        <li>Available throughout the continental United States</li>
                        <li>Not recommended for extremely hot weather conditions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Expedited Shipping (2-Day)</h3>
                      <p className="mb-2">
                        Need your order sooner? Our expedited shipping ensures delivery within 2 business days from the
                        shipping date.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Delivered via FedEx or UPS</li>
                        <li>Available throughout the continental United States</li>
                        <li>Recommended for perishable items during warmer months</li>
                        <li>Additional fee applies (see Shipping Costs tab)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Overnight Shipping</h3>
                      <p className="mb-2">
                        For last-minute celebrations or to ensure maximum freshness, choose our overnight shipping
                        option.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Delivered next business day if ordered before 12pm EST</li>
                        <li>Available throughout the continental United States</li>
                        <li>Required for highly perishable items during summer months</li>
                        <li>Premium fee applies (see Shipping Costs tab)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Local Delivery</h3>
                      <p className="mb-2">
                        For customers in the Portland, OR area, we offer local delivery within a 15-mile radius of our
                        bakery.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Available 7 days a week with flexible delivery windows</li>
                        <li>Flat rate of $5.99 regardless of order size</li>
                        <li>Free for orders over $75</li>
                        <li>Same-day delivery available for orders placed before 10am</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">In-Store Pickup</h3>
                      <p className="mb-2">
                        Skip the shipping fees entirely by picking up your order at our Portland bakery.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Available during regular business hours (9am-5pm, Monday-Saturday)</li>
                        <li>No additional cost</li>
                        <li>Orders ready for pickup within 24 hours of order confirmation</li>
                        <li>Same-day pickup available for orders placed before 10am</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-amber-50 border-amber-100">
                  <CardHeader>
                    <CardTitle>Our Packaging</CardTitle>
                    <CardDescription>How we ensure your dog's treats arrive fresh and intact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                      <Image
                        src="https://i.pinimg.com/736x/e9/26/01/e9260100ea6b091e553421c0e6092284.jpg"
                        alt="Eco-friendly packaging"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground">
                      All DUSKY-TARTE products are carefully packaged to maintain freshness and prevent damage during
                      transit. Our packaging is:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Eco-friendly and biodegradable</li>
                      <li>Insulated to maintain proper temperature</li>
                      <li>Designed to prevent shifting during transit</li>
                      <li>Includes ice packs for temperature-sensitive items</li>
                      <li>Labeled with clear handling instructions</li>
                    </ul>
                    <p className="text-sm italic">
                      We're committed to reducing our environmental impact while ensuring your order arrives in perfect
                      condition.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      Shipping Guarantee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We stand behind the quality of our shipping and delivery. If your order arrives damaged or
                      significantly delayed due to our error, we'll make it right.
                    </p>
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link href="/contact">Contact Us About Shipping Issues</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeframes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-amber-600" />
                  Delivery Timeframes
                </CardTitle>
                <CardDescription>
                  Understanding when to expect your order and planning for special occasions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processing Times</h3>
                    <p className="mb-2">Before your order ships, it goes through our careful preparation process:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                      <li>Standard products: 1-2 business days</li>
                      <li>Custom cakes: 2-3 business days</li>
                      <li>Personalized items: 2-3 business days</li>
                      <li>Bulk orders: 3-5 business days</li>
                    </ul>
                    <p className="text-sm italic">
                      Processing begins once your order is confirmed and payment is received. You'll receive an email
                      notification when your order ships.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Transit Times</h3>
                    <p className="mb-2">After processing, your order is on its way to you:</p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                      <li>Standard Shipping: 3-5 business days</li>
                      <li>Expedited Shipping: 2 business days</li>
                      <li>Overnight Shipping: Next business day</li>
                      <li>Local Delivery: Same day or next day</li>
                      <li>In-Store Pickup: Ready within 24 hours</li>
                    </ul>
                    <p className="text-sm italic">
                      Transit times are estimates and may vary based on location and weather conditions.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Planning for Special Occasions</h3>
                  <p className="mb-2">
                    To ensure your dog's treats arrive in time for their special day, we recommend ordering:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Standard products with standard shipping:</span> 7-10 days before
                      the event
                    </li>
                    <li>
                      <span className="font-medium">Custom cakes with standard shipping:</span> 10-14 days before the
                      event
                    </li>
                    <li>
                      <span className="font-medium">Standard products with expedited shipping:</span> 4-5 days before
                      the event
                    </li>
                    <li>
                      <span className="font-medium">Custom cakes with expedited shipping:</span> 5-7 days before the
                      event
                    </li>
                    <li>
                      <span className="font-medium">Any product with overnight shipping:</span> 2-3 days before the
                      event
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Holiday Shipping Schedule</h3>
                  <p className="mb-2">
                    During peak holiday periods (Christmas, Valentine's Day, etc.), processing times may be extended by
                    1-2 business days. We recommend placing your orders early during these periods.
                  </p>
                  <p className="text-sm italic">
                    For specific holiday shipping deadlines, please check our homepage or subscribe to our newsletter
                    for updates.
                  </p>
                </div>

                <div className="flex items-start p-4 bg-blue-50 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800">Weather Considerations</h4>
                    <p className="text-sm text-blue-700">
                      During summer months (May-September), we may recommend expedited or overnight shipping for
                      perishable items to ensure they arrive in optimal condition. In extreme heat (over 90°F), we may
                      temporarily suspend shipping to certain regions or require overnight shipping for perishable
                      products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5 text-amber-600" />
                  Shipping Costs
                </CardTitle>
                <CardDescription>Transparent pricing for all shipping methods and destinations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border px-4 py-2 text-left">Shipping Method</th>
                        <th className="border px-4 py-2 text-left">Continental US</th>
                        <th className="border px-4 py-2 text-left">Alaska & Hawaii</th>
                        <th className="border px-4 py-2 text-left">Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 font-medium">Standard Shipping</td>
                        <td className="border px-4 py-2">$8.99 - $15.99</td>
                        <td className="border px-4 py-2">$18.99 - $24.99</td>
                        <td className="border px-4 py-2">3-5 business days</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border px-4 py-2 font-medium">Expedited (2-Day)</td>
                        <td className="border px-4 py-2">$14.99 - $22.99</td>
                        <td className="border px-4 py-2">$29.99 - $34.99</td>
                        <td className="border px-4 py-2">2 business days</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-medium">Overnight</td>
                        <td className="border px-4 py-2">$24.99 - $34.99</td>
                        <td className="border px-4 py-2">$44.99 - $54.99</td>
                        <td className="border px-4 py-2">Next business day</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border px-4 py-2 font-medium">Local Delivery (Portland area)</td>
                        <td className="border px-4 py-2">$5.99</td>
                        <td className="border px-4 py-2">N/A</td>
                        <td className="border px-4 py-2">Same day or next day</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-medium">In-Store Pickup</td>
                        <td className="border px-4 py-2">FREE</td>
                        <td className="border px-4 py-2">N/A</td>
                        <td className="border px-4 py-2">Ready within 24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Free Shipping Offers</h3>
                  <ul className="list-disc pl-6 space-y-1 text-green-700">
                    <li>Free standard shipping on all orders over $75 (continental US only)</li>
                    <li>Free local delivery on orders over $50 (Portland area only)</li>
                    <li>Free shipping promotions during special events and holidays</li>
                    <li>Free shipping on subscription orders (3+ months)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">How Shipping Costs Are Calculated</h3>
                  <p className="mb-2">Shipping costs are determined by several factors:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Package weight and dimensions</li>
                    <li>Shipping destination (distance from our Portland, OR bakery)</li>
                    <li>Shipping method selected</li>
                    <li>Special handling requirements (e.g., perishable items)</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Exact shipping costs will be calculated and displayed during checkout before you complete your
                    purchase.
                  </p>
                </div>

                <div className="border p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Additional Fees</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Signature Required:</span> $3.00 additional fee (recommended for
                      high-value orders)
                    </li>
                    <li>
                      <span className="font-medium">Saturday Delivery:</span> $15.00 additional fee (available in select
                      areas)
                    </li>
                    <li>
                      <span className="font-medium">Rural Area Surcharge:</span> $5.00-$10.00 (applies to some remote
                      locations)
                    </li>
                    <li>
                      <span className="font-medium">Additional Insulation:</span> $2.00 (recommended for summer
                      shipping)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="international" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>International Shipping</CardTitle>
                <CardDescription>
                  Information about shipping DUSKY-TARTE products outside the United States
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">Coming Soon!</h3>
                  <p className="text-center mb-4">
                    We're currently working on expanding our shipping capabilities to serve international customers.
                  </p>
                  <div className="flex justify-center mb-6">
                    <Image
                      src="https://i.pinimg.com/736x/13/36/23/13362386e440987d9ff7fd88cc771468.jpg"
                      alt="World map with shipping routes"
                      width={400}
                      height={250}
                      className="rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Current Status</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>We currently ship to all 50 U.S. states</li>
                        <li>International shipping is not yet available</li>
                        <li>Canada will be our first international destination</li>
                        <li>Expected launch of Canadian shipping: Q3 2023</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">International Options</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Join our waitlist for international shipping updates</li>
                        <li>Recipe kits and shelf-stable items will be available first</li>
                        <li>Fresh-baked goods will have limited international availability</li>
                        <li>Custom import duties and taxes will apply</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Alternative Options for International Customers</h3>
                  <p className="mb-4">
                    While we work on expanding our shipping capabilities, we offer these alternatives for our
                    international friends:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Digital Recipe Guides</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Download our dog-friendly cake and treat recipes to make at home with locally available
                          ingredients.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">U.S. Shipping Address</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Use a package forwarding service with a U.S. address to receive our products.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Gift to U.S. Friends</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Send DUSKY-TARTE treats as gifts to friends and family in the United States.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Join Our International Waitlist</h3>
                  <p className="mb-4">
                    Be the first to know when we expand shipping to your country. Sign up for our international
                    waitlist:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700">
                      <Link href="/contact">Join International Waitlist</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/faq/shipping">Learn More About Shipping</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Have Questions About Shipping?</h2>
          <p className="mb-6">
            Our customer service team is here to help with any shipping questions or concerns. Contact us for
            personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Customer Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq/shipping">View Shipping FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

