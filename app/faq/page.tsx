import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingBag, Truck, RotateCcw, Shield, FileText, User, BookOpen, Mail, ChevronRight } from "lucide-react"

export default function FAQMainPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about DUSKY-TARTE's dog-friendly cakes, ordering process, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Account FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Account</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Managing your account, updating information, and tracking orders.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/account" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Shipping FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <Truck className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Shipping & Delivery</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Delivery timeframes, shipping methods, and handling of perishable items.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/shipping" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Returns FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <RotateCcw className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Returns & Refunds</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Our satisfaction guarantee, return policies, and refund process.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/returns" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Products FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Products</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Information about ingredients, storage, shelf life, and customization options.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/products" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Blog FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <BookOpen className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Blog</h2>
            </div>
            <p className="text-muted-foreground mb-4">Questions about our blog content, contributions, and updates.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/blog" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <Mail className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-4">How to reach our team, response times, and contact methods.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/contact" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Privacy FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Privacy Policy</h2>
            </div>
            <p className="text-muted-foreground mb-4">How we collect, use, and protect your personal information.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/privacy" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Terms FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Terms & Conditions</h2>
            </div>
            <p className="text-muted-foreground mb-4">Understanding our terms of service and user agreements.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/terms" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Wholesale FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">Wholesale</h2>
            </div>
            <p className="text-muted-foreground mb-4">Information for retailers and bulk orders for events.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/faq/wholesale" className="flex items-center justify-between">
                <span>View FAQ</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Popular Questions Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Most Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h3 className="font-semibold mb-2">Are your cakes safe for all dogs?</h3>
              <p className="text-muted-foreground">
                Our cakes are made with dog-safe ingredients and are free from chocolate, xylitol, and other harmful
                substances. However, every dog is unique, so we recommend checking the ingredient list for any known
                allergies your dog may have. For dogs with specific health conditions, please consult your veterinarian
                before ordering.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">How far in advance should I order?</h3>
              <p className="text-muted-foreground">
                For standard cakes, we recommend ordering at least 48 hours in advance. For custom designs, please allow
                3-5 business days. During peak seasons (holidays, summer months), we suggest adding an extra 1-2 days to
                ensure timely delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">How long do your cakes stay fresh?</h3>
              <p className="text-muted-foreground">
                Our cakes stay fresh for 3-5 days when refrigerated. For best quality, we recommend serving within 2
                days of delivery or the "best by" date on the packaging. Our cakes can also be frozen for up to 3 months
                - simply thaw in the refrigerator for 24 hours before serving.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do you ship nationwide?</h3>
              <p className="text-muted-foreground">
                Yes! We ship to all 50 U.S. states using expedited shipping methods to ensure freshness. Shipping costs
                are calculated based on destination and order size. We offer free shipping on orders over $75. For
                international shipping inquiries, please contact our customer service team.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you're looking for, our friendly customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:woof@duskytarte.com">Email Us Directly</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

