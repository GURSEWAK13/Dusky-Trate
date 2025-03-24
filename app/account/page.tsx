"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Bell, CreditCard, Heart, Home, LogOut, Package, Settings, UserCircle } from "lucide-react"
import { motion } from "framer-motion"

// Mock user data
const user = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  avatar: "https://i.pinimg.com/736x/5e/96/4b/5e964b4d1a6a514bf141c694f5037537.jpg",
  joined: "January 2023",
  pets: [
    {
      name: "Max",
      breed: "Golden Retriever",
      birthday: "May 15, 2020",
      image: "https://i.pinimg.com/736x/6c/5b/e4/6c5be45f68550e09ade2c77d554734b2.jpg",
    },
  ],
}

// Mock order data
const orders = [
  {
    id: "ORD-12345",
    date: "March 15, 2023",
    status: "Delivered",
    total: 34.99,
    items: [
      {
        name: "Birthday Pup Cake",
        size: 'Medium (6")',
        price: 29.99,
        image: "https://i.pinimg.com/736x/14/54/cd/1454cdd428c4153418b8d8b58e772f96.jpg",
      },
      {
        name: "Shipping",
        price: 5.0,
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "June 20, 2023",
    status: "Delivered",
    total: 26.99,
    items: [
      {
        name: "Carrot Delight",
        size: 'Small (4")',
        price: 24.99,
        image: "https://i.pinimg.com/736x/21/c3/e2/21c3e221d600f2863c2920840520e5cf.jpg",
      },
      {
        name: "Shipping",
        price: 2.0,
      },
    ],
  },
  {
    id: "ORD-12347",
    date: "October 5, 2023",
    status: "Processing",
    total: 39.99,
    items: [
      {
        name: "Celebration Cake",
        size: 'Large (8")',
        price: 34.99,
        image: "https://i.pinimg.com/736x/ed/d6/d7/edd6d722d3324eddc557cafd343c0943.jpg",
      },
      {
        name: "Shipping",
        price: 5.0,
      },
    ],
  },
]

// Mock addresses
const addresses = [
  {
    id: 1,
    name: "Home",
    street: "123 Main Street",
    city: "Portland",
    state: "OR",
    zip: "97201",
    isDefault: true,
  },
  {
    id: 2,
    name: "Work",
    street: "456 Office Avenue",
    city: "Portland",
    state: "OR",
    zip: "97204",
    isDefault: false,
  },
]

// Mock payment methods
const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "05/25",
    isDefault: true,
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "5555",
    expiry: "08/24",
    isDefault: false,
  },
]

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("account")
  const { toast } = useToast()

  const handleSaveChanges = () => {
    toast({
      title: "Changes saved",
      description: "Your profile has been updated successfully.",
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">Member since {user.joined}</p>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "account" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("account")}
                >
                  <UserCircle className="mr-2 h-4 w-4" />
                  Account
                </Button>
                <Button
                  variant={activeTab === "orders" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "addresses" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("addresses")}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
                <Button
                  variant={activeTab === "payment" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button
                  variant={activeTab === "pets" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("pets")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  My Pets
                </Button>
                <Button
                  variant={activeTab === "notifications" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>

                <Separator className="my-2" />

                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Account Tab */}
            {activeTab === "account" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={user.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthday">Birthday (Optional)</Label>
                        <Input id="birthday" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="avatar">Profile Picture</Label>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline">Change Photo</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSaveChanges} className="bg-amber-600 hover:bg-amber-700">
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Password & Security</CardTitle>
                    <CardDescription>Update your password and security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <p className="font-medium">Protect your account with 2FA</p>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Button variant="outline">Enable</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSaveChanges} className="bg-amber-600 hover:bg-amber-700">
                      Update Password
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>View and track your past orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {orders.length === 0 ? (
                      <div className="text-center py-8">
                        <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                        <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                        <Button asChild className="bg-amber-600 hover:bg-amber-700">
                          <Link href="/shop">Start Shopping</Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div key={order.id} className="border rounded-lg overflow-hidden">
                            <div className="bg-muted p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">Order {order.id}</span>
                                  <Badge variant={order.status === "Delivered" ? "outline" : "default"}>
                                    {order.status}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Track Order
                                </Button>
                                <Button variant="ghost" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                            <div className="p-4">
                              {order.items.map((item, index) => (
                                <div
                                  key={index}
                                  className={`flex items-center gap-4 ${index > 0 ? "mt-4 pt-4 border-t" : ""}`}
                                >
                                  {item.image && (
                                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                                      <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  )}
                                  <div className="flex-1">
                                    <div className="flex justify-between">
                                      <div>
                                        <p className="font-medium">{item.name}</p>
                                        {item.size && (
                                          <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                                        )}
                                      </div>
                                      <p className="font-medium">${item.price.toFixed(2)}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <div className="mt-4 pt-4 border-t flex justify-between">
                                <span className="font-bold">Total</span>
                                <span className="font-bold">${order.total.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Saved Addresses</CardTitle>
                        <CardDescription>Manage your shipping addresses</CardDescription>
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700">Add New Address</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4 relative">
                          {address.isDefault && <Badge className="absolute top-2 right-2">Default</Badge>}
                          <p className="font-medium mb-1">{address.name}</p>
                          <p className="text-muted-foreground">{address.street}</p>
                          <p className="text-muted-foreground">
                            {address.city}, {address.state} {address.zip}
                          </p>
                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            {!address.isDefault && (
                              <Button variant="outline" size="sm">
                                Set as Default
                              </Button>
                            )}
                            {!address.isDefault && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Payment Methods Tab */}
            {activeTab === "payment" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription>Manage your saved payment methods</CardDescription>
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700">Add New Card</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="border rounded-lg p-4 relative">
                          {method.isDefault && <Badge className="absolute top-2 right-2">Default</Badge>}
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                              {method.type}
                            </div>
                            <p className="font-medium">•••• {method.last4}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                          <div className="mt-4 flex gap-2">
                            {!method.isDefault && (
                              <Button variant="outline" size="sm">
                                Set as Default
                              </Button>
                            )}
                            {!method.isDefault && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Pets Tab */}
            {activeTab === "pets" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>My Pets</CardTitle>
                        <CardDescription>Manage your pet profiles for personalized recommendations</CardDescription>
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700">Add New Pet</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {user.pets.length === 0 ? (
                      <div className="text-center py-8">
                        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No pets added yet</h3>
                        <p className="text-muted-foreground mb-4">
                          Add your furry friends to get personalized recommendations.
                        </p>
                        <Button className="bg-amber-600 hover:bg-amber-700">Add Your First Pet</Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {user.pets.map((pet, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex gap-4">
                              <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src={pet.image || "/placeholder.svg"}
                                  alt={pet.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium text-lg">{pet.name}</h3>
                                <p className="text-muted-foreground">{pet.breed}</p>
                                <p className="text-sm text-muted-foreground">Birthday: {pet.birthday}</p>
                              </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                View Recommendations
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how and when we contact you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Email Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="order-updates" className="rounded text-amber-600" defaultChecked />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promotions & Discounts</p>
                          <p className="text-sm text-muted-foreground">Stay updated on special offers and sales</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="promotions" className="rounded text-amber-600" defaultChecked />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Pet Birthday Reminders</p>
                          <p className="text-sm text-muted-foreground">Get reminded about your pet's birthday</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="birthday-reminders"
                            className="rounded text-amber-600"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium">SMS Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Status Updates</p>
                          <p className="text-sm text-muted-foreground">Receive text messages about your order status</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="sms-updates" className="rounded text-amber-600" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Delivery Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Get notified when your order is out for delivery
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="delivery-notifications" className="rounded text-amber-600" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveChanges} className="bg-amber-600 hover:bg-amber-700">
                      Save Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Language & Region</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <select
                            id="language"
                            className="w-full rounded-md border border-input bg-background px-3 py-2"
                          >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="region">Region</Label>
                          <select id="region" className="w-full rounded-md border border-input bg-background px-3 py-2">
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium">Privacy Settings</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Order History</p>
                          <p className="text-sm text-muted-foreground">
                            Allow us to use your order history for personalized recommendations
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="share-history" className="rounded text-amber-600" defaultChecked />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Cookie Preferences</p>
                          <p className="text-sm text-muted-foreground">
                            Manage how we use cookies to improve your experience
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage Cookies
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium text-red-500">Danger Zone</h3>
                      <div className="border border-red-200 rounded-md p-4 bg-red-50">
                        <p className="font-medium mb-2">Delete Account</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveChanges} className="bg-amber-600 hover:bg-amber-700">
                      Save Settings
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

