import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 rounded-md overflow-hidden">
  <Image 
    src="https://i.pinimg.com/736x/46/ba/81/46ba816887a076075803d6ae81f441fd.jpg" 
    width={40} 
    height={40} 
    alt="DUSKY-TARTE Logo" 
    className="rounded-md"
  />
  <span className="text-xl font-bold">DUSKY-TARTE</span>
</Link>
            <p className="text-amber-200 mb-4">
              Wholesome, vegan, sugar-free cakes for your furry companions to celebrate safely.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-amber-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-amber-200 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=birthday" className="text-amber-200 hover:text-white">
                  Birthday Cakes
                </Link>
              </li>
              <li>
                <Link href="/shop?category=everyday" className="text-amber-200 hover:text-white">
                  Everyday Treats
                </Link>
              </li>
              <li>
                <Link href="/shop?category=special" className="text-amber-200 hover:text-white">
                  Special Occasions
                </Link>
              </li>
              <li>
                <Link href="/customize" className="text-amber-200 hover:text-white">
                  Custom Cakes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-amber-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-amber-200 hover:text-white">
                  Dog Nutrition
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-amber-200 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/faq/blog" className="text-amber-200 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-amber-200 hover:text-white">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-amber-200 hover:text-white">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-amber-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-amber-200 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} DUSKY-TARTE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

