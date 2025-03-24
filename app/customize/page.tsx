"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Cake, ChevronRight, Palette, Gift, MessageSquare } from "lucide-react"
import ProductViewer3D from "@/components/product-viewer-3d"

export default function CustomizePage() {
  const [selectedSize, setSelectedSize] = useState("medium")
  const [selectedFlavor, setSelectedFlavor] = useState("peanut-butter")
  const [selectedFrosting, setSelectedFrosting] = useState("yogurt")
  const [selectedDecoration, setSelectedDecoration] = useState("paw-prints")
  const [price, setPrice] = useState(29.99)

  // Calculate price based on selections
  const calculatePrice = () => {
    let basePrice = 0

    // Size pricing
    switch (selectedSize) {
      case "small":
        basePrice = 24.99
        break
      case "medium":
        basePrice = 29.99
        break
      case "large":
        basePrice = 34.99
        break
      case "xl":
        basePrice = 39.99
        break
    }

    // Add-ons for premium flavors/decorations could be calculated here

    return basePrice.toFixed(2)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
    
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Customize Your Dog Cake</h1>

        <p className="text-muted-foreground mb-8">Create the perfect celebration cake for your furry friend</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customization Options */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="cake" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="cake" className="flex items-center">
                  <Cake className="h-4 w-4 mr-2" /> Base
                </TabsTrigger>
                <TabsTrigger value="flavor" className="flex items-center">
                  <Palette className="h-4 w-4 mr-2" /> Flavor
                </TabsTrigger>
                <TabsTrigger value="decoration" className="flex items-center">
                  <Gift className="h-4 w-4 mr-2" /> Decoration
                </TabsTrigger>
                <TabsTrigger value="message" className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" /> Message
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cake" className="bg-white p-6 rounded-lg shadow-sm mt-4">
                <h2 className="text-xl font-semibold mb-4">Choose Cake Size</h2>
                <RadioGroup
                  defaultValue="medium"
                  value={selectedSize}
                  onValueChange={(value) => setSelectedSize(value)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="small" id="small" className="peer sr-only" />
                    <Label
                      htmlFor="small"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-600 [&:has([data-state=checked])]:border-amber-600"
                    >
                      <div className="mb-3 rounded-md bg-amber-100 p-2">
                        <Cake className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Small (4")</p>
                        <p className="text-sm text-muted-foreground">Serves 1-2 dogs</p>
                      </div>
                      <p className="mt-2 font-bold text-amber-600">$24.99</p>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
                    <Label
                      htmlFor="medium"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-600 [&:has([data-state=checked])]:border-amber-600"
                    >
                      <div className="mb-3 rounded-md bg-amber-100 p-2">
                        <Cake className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Medium (6")</p>
                        <p className="text-sm text-muted-foreground">Serves 2-4 dogs</p>
                      </div>
                      <p className="mt-2 font-bold text-amber-600">$29.99</p>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="large" id="large" className="peer sr-only" />
                    <Label
                      htmlFor="large"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-600 [&:has([data-state=checked])]:border-amber-600"
                    >
                      <div className="mb-3 rounded-md bg-amber-100 p-2">
                        <Cake className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Large (8")</p>
                        <p className="text-sm text-muted-foreground">Serves 4-6 dogs</p>
                      </div>
                      <p className="mt-2 font-bold text-amber-600">$34.99</p>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="xl" id="xl" className="peer sr-only" />
                    <Label
                      htmlFor="xl"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-600 [&:has([data-state=checked])]:border-amber-600"
                    >
                      <div className="mb-3 rounded-md bg-amber-100 p-2">
                        <Cake className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Party Size (10")</p>
                        <p className="text-sm text-muted-foreground">Serves 6+ dogs</p>
                      </div>
                      <p className="mt-2 font-bold text-amber-600">$39.99</p>
                    </Label>
                  </div>
                </RadioGroup>
              </TabsContent>

              <TabsContent value="flavor" className="bg-white p-6 rounded-lg shadow-sm mt-4">
                <h2 className="text-xl font-semibold mb-4">Choose Cake Flavor</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer border-2 ${selectedFlavor === "peanut-butter" ? "border-amber-600" : "border-muted"}`}
                    onClick={() => setSelectedFlavor("peanut-butter")}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <div className="h-8 w-8 rounded-full bg-amber-600"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Peanut Butter</h3>
                        <p className="text-sm text-muted-foreground">Rich peanut flavor (xylitol-free)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedFlavor === "pumpkin" ? "border-amber-600" : "border-muted"}`}
                    onClick={() => setSelectedFlavor("pumpkin")}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <div className="h-8 w-8 rounded-full bg-orange-500"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Pumpkin</h3>
                        <p className="text-sm text-muted-foreground">Seasonal favorite, rich in fiber</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedFlavor === "carrot" ? "border-amber-600" : "border-muted"}`}
                    onClick={() => setSelectedFlavor("carrot")}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <div className="h-8 w-8 rounded-full bg-orange-400"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Carrot</h3>
                        <p className="text-sm text-muted-foreground">Vitamin-rich and naturally sweet</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedFlavor === "banana" ? "border-amber-600" : "border-muted"}`}
                    onClick={() => setSelectedFlavor("banana")}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <div className="h-8 w-8 rounded-full bg-yellow-300"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Banana</h3>
                        <p className="text-sm text-muted-foreground">Naturally sweet and potassium-rich</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-xl font-semibold mt-8 mb-4">Choose Frosting</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer border-2 ${selectedFrosting === "yogurt" ? "border-amber-600" : "border-muted"}`}
                    onClick={() => setSelectedFrosting("yogurt")}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Greek Yogurt</h3>
                        <p className="text-sm text-muted-foreground">Creamy, protein-rich (unsweetened)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedFrosting === "coconut" ? "border-amber-600" : "border-muted"}`}
                    onClick={() => setSelectedFrosting("coconut")}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <div className="h-8 w-8 rounded-full bg-gray-50"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Coconut Cream</h3>
                        <p className="text-sm text-muted-foreground">Dairy-free alternative</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="decoration" className="bg-white p-6 rounded-lg shadow-sm mt-4">
  <h2 className="text-xl font-semibold mb-4">Choose Decorations</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card
      className={`cursor-pointer border-2 ${
        selectedDecoration === "paw-prints" ? "border-amber-600" : "border-muted"
      }`}
      onClick={() => setSelectedDecoration("paw-prints")}
    >
      <CardContent className="p-4">
        <div className="h-32 w-32 bg-white rounded-md mb-3 flex items-center justify-center">
          <Image
            src="https://i.pinimg.com/736x/b2/ba/41/b2ba41a6d6e174ea9cc3cc27ccfda043.jpg"
            alt="Paw Print Decoration"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h3 className="font-medium">Paw Prints</h3>
        <p className="text-sm text-muted-foreground">
          Classic paw print design made with carob
        </p>
      </CardContent>
    </Card>

    <Card
      className={`cursor-pointer border-2 ${
        selectedDecoration === "bone-shaped" ? "border-amber-600" : "border-muted"
      }`}
      onClick={() => setSelectedDecoration("bone-shaped")}
    >
      <CardContent className="p-4">
        <div className="h-32 w-32 bg-white rounded-md mb-3 flex items-center justify-center">
          <Image
            src="https://i.pinimg.com/736x/ba/a5/8c/baa58cf26ace0fd4338f60bdbf1e6061.jpg"
            alt="Bone Shaped Decoration"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h3 className="font-medium">Bone Shaped</h3>
        <p className="text-sm text-muted-foreground">
          Yogurt bone decorations on top
        </p>
      </CardContent>
    </Card>

    <Card
      className={`cursor-pointer border-2 ${
        selectedDecoration === "birthday-hat" ? "border-amber-600" : "border-muted"
      }`}
      onClick={() => setSelectedDecoration("birthday-hat")}
    >
      <CardContent className="p-4">
        <div className="h-32 w-32 bg-white rounded-md mb-3 flex items-center justify-center">
          <Image
            src="https://i.pinimg.com/736x/bd/0a/fb/bd0afb154257a0147930536323cf40cd.jpg"
            alt="Birthday Hat Decoration"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h3 className="font-medium">Birthday Hat</h3>
        <p className="text-sm text-muted-foreground">
          Festive birthday hat design
        </p>
      </CardContent>
    </Card>

    <Card
      className={`cursor-pointer border-2 ${
        selectedDecoration === "custom" ? "border-amber-600" : "border-muted"
      }`}
      onClick={() => setSelectedDecoration("custom")}
    >
      <CardContent className="p-4">
        <div className="h-32 w-32 bg-white rounded-md mb-3 flex items-center justify-center">
          <Image
            src="https://i.pinimg.com/736x/b0/6d/1e/b06d1e873e66c25e2e02340b20762845.jpg"
            alt="Custom Decoration"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h3 className="font-medium">Custom Design</h3>
        <p className="text-sm text-muted-foreground">
          Describe your custom design in the message section
        </p>
      </CardContent>
    </Card>
  </div>
</TabsContent>

              <TabsContent value="message" className="bg-white p-6 rounded-lg shadow-sm mt-4">
                <h2 className="text-xl font-semibold mb-4">Add a Message</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="occasion">Occasion</Label>
                    <Select defaultValue="birthday">
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="adoption">Adoption Anniversary</SelectItem>
                        <SelectItem value="holiday">Holiday Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dog-name">Dog's Name</Label>
                    <Input id="dog-name" placeholder="Enter your dog's name" />
                  </div>

                  <div>
                    <Label htmlFor="message">Custom Message (Optional)</Label>
                    <Textarea id="message" placeholder="Example: Happy 3rd Birthday, Max!" className="resize-none" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Max 30 characters. Will be written with dog-safe ingredients.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="special-instructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="special-instructions"
                      placeholder="Any allergies or special requests?"
                      className="resize-none"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Your Custom Cake</h2>

              <div className="aspect-square relative mb-4 bg-gray-100 rounded-md overflow-hidden">
                <ProductViewer3D/>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Size:</span>
                  <span className="capitalize">{selectedSize}</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Flavor:</span>
                  <span className="capitalize">{selectedFlavor.replace("-", " ")}</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Frosting:</span>
                  <span className="capitalize">{selectedFrosting}</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Decoration:</span>
                  <span className="capitalize">{selectedDecoration.replace("-", " ")}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-bold mb-6">
                <span>Total:</span>
                <span className="text-amber-600">${calculatePrice()}</span>
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">
                Add to Cart <ChevronRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                All cakes are made fresh to order and require 48 hours notice
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

