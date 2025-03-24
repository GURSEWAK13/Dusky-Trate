"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, ShoppingCart, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Image src="https://i.pinimg.com/736x/46/ba/81/46ba816887a076075803d6ae81f441fd.jpg" width={30} height={30} alt="DUSKY-TARTE Logo" />
                  <span>DUSKY-TARTE</span>
                </Link>
                <Link href="/" className="hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/shop" className="hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>
                  Shop
                </Link>
                <Link
                  href="/customize"
                  className="hover:text-amber-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Customize
                </Link>
                <Link href="/learn" className="hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>
                  Learn
                </Link>
                <Link href="/about" className="hover:text-amber-600 transition-colors" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-amber-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 ml-2 md:ml-0">
            <Image src="https://i.pinimg.com/736x/46/ba/81/46ba816887a076075803d6ae81f441fd.jpg" width={40} height={40} alt="DUSKY-TARTE Logo" />
            <span className="text-xl font-bold hidden sm:inline-block">DUSKY-TARTE</span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-amber-600">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                        href="/shop"
                        style={{
                          backgroundImage: `url(https://i.pinimg.com/736x/60/4a/60/604a60f0e0f1a49cc8da61c582456a26.jpg)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Featured Cakes</div>
                        <p className="text-sm leading-tight text-white/90">
                          Discover our bestselling dog-friendly celebration cakes
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/shop?category=birthday" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-100 hover:text-amber-600">
                        <div className="text-sm font-medium leading-none">Birthday Cakes</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Special cakes for your dog's birthday celebration
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop?category=everyday" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-100 hover:text-amber-600">
                        <div className="text-sm font-medium leading-none">Everyday Treats</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Smaller treats for regular enjoyment
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop?category=special" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-100 hover:text-amber-600">
                        <div className="text-sm font-medium leading-none">Special Occasions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Celebration cakes for adoptions, holidays, and more
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/customize" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-amber-600">
                  Customize
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/learn" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-amber-600">
                  Learn
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-amber-600">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-600 text-[10px] font-medium text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700">
            <Link href="/customize">Order Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

