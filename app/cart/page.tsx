"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"
import { ChevronLeft, Minus, Plus, ShoppingCart, Trash2, TruckIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, itemCount } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleQuantityChange = (
    id: number,
    currentQuantity: number,
    action: "increase" | "decrease",
    size?: string,
  ) => {
    if (action === "decrease" && currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1, size)
    } else if (action === "increase") {
      updateQuantity(id, currentQuantity + 1, size)
    }
  }

  const handleRemoveItem = (id: number, size?: string) => {
    removeFromCart(id, size)
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  const handleApplyPromo = () => {
    setIsApplyingPromo(true)
    // Simulate API call
    setTimeout(() => {
      setIsApplyingPromo(false)
      if (promoCode.toLowerCase() === "doggy10") {
        toast({
          title: "Promo code applied",
          description: "10% discount has been applied to your order.",
        })
      } else {
        toast({
          title: "Invalid promo code",
          description: "The promo code you entered is invalid or expired.",
          variant: "destructive",
        })
      }
    }, 1000)
  }

  // Calculate order summary
  const shipping = subtotal > 50 ? 0 : 5.99
  const discount = promoCode.toLowerCase() === "doggy10" ? subtotal * 0.1 : 0
  const total = subtotal + shipping - discount

  // Empty cart animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-6 flex items-center text-muted-foreground hover:text-foreground"
            onClick={() => router.back()}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>

          <motion.div
            className="bg-white rounded-lg shadow-sm p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-amber-600" />
            </motion.div>
            <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any dog treats to your cart yet.</p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-6 flex items-center text-muted-foreground hover:text-foreground"
          onClick={() => router.back()}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-3xl font-bold mb-8">
          Your Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  variants={itemVariants}
                  className={`p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                    index < items.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
                      </div>
                      <p className="font-medium text-amber-600 mt-1 sm:mt-0">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity, "decrease", item.size)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-3 w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity, "increase", item.size)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-red-600"
                        onClick={() => handleRemoveItem(item.id, item.size)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Remove</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                  <Button variant="outline" onClick={handleApplyPromo} disabled={!promoCode || isApplyingPromo}>
                    {isApplyingPromo ? "Applying..." : "Apply"}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Try code "DOGGY10" for 10% off your order</p>
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700 mb-4">Proceed to Checkout</Button>

              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <TruckIcon className="h-4 w-4 mr-2" />
                <span>Free shipping on orders over $50</span>
              </div>
            </motion.div>

            <div className="mt-4 p-4 bg-amber-50 rounded-lg">
              <h3 className="font-medium mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-2">Have questions about your order or our products?</p>
              <Link href="/contact" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

