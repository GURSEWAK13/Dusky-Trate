import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Shield, Lock, Eye, Database, Globe } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">How we collect, use, and protect your personal information</p>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: March 15, 2023</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="collection">Information Collection</TabsTrigger>
            <TabsTrigger value="use">Information Use</TabsTrigger>
            <TabsTrigger value="sharing">Information Sharing</TabsTrigger>
            <TabsTrigger value="rights">Your Rights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-amber-600" />
                  Privacy Policy Overview
                </CardTitle>
                <CardDescription>A summary of how we handle your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                  <p className="mb-4">
                    At DUSKY-TARTE, we respect your privacy and are committed to protecting your personal information.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                    visit our website, make a purchase, or interact with us in any way.
                  </p>
                  <p>
                    We encourage you to read this Privacy Policy carefully to understand our practices regarding your
                    personal information. By accessing or using our website and services, you acknowledge that you have
                    read and understand this Privacy Policy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Database className="mr-2 h-4 w-4 text-amber-600" />
                        Information We Collect
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li>Personal information (name, email, address)</li>
                        <li>Order and transaction information</li>
                        <li>Payment details (securely processed)</li>
                        <li>Pet information (optional)</li>
                        <li>Website usage and device information</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Eye className="mr-2 h-4 w-4 text-amber-600" />
                        How We Use Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li>Process and fulfill your orders</li>
                        <li>Provide customer support</li>
                        <li>Improve our products and services</li>
                        <li>Send order updates and marketing (with consent)</li>
                        <li>Prevent fraud and enhance security</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Globe className="mr-2 h-4 w-4 text-amber-600" />
                        Information Sharing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li>Service providers (shipping, payment processing)</li>
                        <li>Legal requirements and protection</li>
                        <li>Business transfers (if applicable)</li>
                        <li>With your consent</li>
                        <li>Never sold to third parties for marketing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Key Privacy Principles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Data Minimization</p>
                        <p className="text-sm text-muted-foreground">
                          We only collect information that's necessary to provide our services and improve your
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Transparency</p>
                        <p className="text-sm text-muted-foreground">
                          We clearly communicate how we collect, use, and share your information through this Privacy
                          Policy.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Security</p>
                        <p className="text-sm text-muted-foreground">
                          We implement appropriate technical and organizational measures to protect your personal
                          information.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">User Control</p>
                        <p className="text-sm text-muted-foreground">
                          We provide you with options to control your information and respect your privacy choices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Changes to This Privacy Policy</h3>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last Updated" date at the top of this policy</li>
                    <li>Sending an email notification to registered users (for significant changes)</li>
                    <li>Displaying a notice on our website</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect
                    your information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collection" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5 text-amber-600" />
                  Information Collection
                </CardTitle>
                <CardDescription>
                  Details about the types of information we collect and how we collect it
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Types of Information We Collect</h3>
                  <p className="mb-4">
                    We collect several types of information from and about users of our website and services:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Personal Information</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Postal address</li>
                        <li>Phone number</li>
                        <li>Payment information (processed securely through our payment processors)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Order Information</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Products purchased</li>
                        <li>Purchase date</li>
                        <li>Order value</li>
                        <li>Shipping information</li>
                        <li>Gift messages (if applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Pet Information (Optional)</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Pet name</li>
                        <li>Breed</li>
                        <li>Birthday</li>
                        <li>Dietary preferences or restrictions</li>
                        <li>Photos (if uploaded)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Technical Information</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Operating system</li>
                        <li>Referral source</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">How We Collect Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Direct Collection</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>When you create an account</li>
                        <li>When you place an order</li>
                        <li>When you sign up for our newsletter</li>
                        <li>When you contact our customer service</li>
                        <li>When you participate in surveys or promotions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Automated Collection</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Through cookies and similar technologies</li>
                        <li>Through server logs</li>
                        <li>Through analytics tools</li>
                        <li>Through your device information</li>
                        <li>Through your browsing activity on our site</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Cookies and Similar Technologies</h3>
                  <p className="mb-4">
                    We use cookies and similar technologies to enhance your browsing experience, analyze website
                    traffic, and personalize content. These technologies collect information about how you interact with
                    our website.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Types of Cookies We Use</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>
                          <span className="font-medium">Essential Cookies:</span> Required for the website to function
                          properly
                        </li>
                        <li>
                          <span className="font-medium">Functional Cookies:</span> Remember your preferences and
                          settings
                        </li>
                        <li>
                          <span className="font-medium">Analytics Cookies:</span> Help us understand how visitors use
                          our site
                        </li>
                        <li>
                          <span className="font-medium">Marketing Cookies:</span> Used to deliver relevant
                          advertisements
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Managing Cookies</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        You can manage your cookie preferences through:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Our Cookie Preferences Center</li>
                        <li>Your browser settings</li>
                        <li>Third-party opt-out tools</li>
                      </ul>
                      <p className="text-sm italic mt-2">
                        Note that disabling certain cookies may affect the functionality of our website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Information from Third Parties</h3>
                  <p className="mb-4">In some cases, we may receive information about you from third parties:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Social media platforms when you interact with our content or connect your account</li>
                    <li>Business partners who offer joint promotions or services</li>
                    <li>Payment processors who verify transaction information</li>
                    <li>Shipping providers who update delivery status</li>
                    <li>Analytics providers who help us understand website traffic</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    When we receive information from third parties, we protect it in accordance with this Privacy
                    Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="use" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5 text-amber-600" />
                  Information Use
                </CardTitle>
                <CardDescription>How we use the information we collect from you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How We Use Your Information</h3>
                  <p className="mb-4">We use the information we collect for various purposes, including:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Order Processing and Fulfillment</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Process and confirm your orders</li>
                        <li>Arrange for shipping and delivery</li>
                        <li>Manage payments and refunds</li>
                        <li>Provide order updates and shipping notifications</li>
                        <li>Respond to order-related inquiries</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Account Management</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Create and manage your account</li>
                        <li>Authenticate your identity</li>
                        <li>Maintain your order history</li>
                        <li>Store your preferences and settings</li>
                        <li>Provide account-related notifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Customer Service</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Respond to your inquiries and requests</li>
                        <li>Provide technical support</li>
                        <li>Address complaints and resolve disputes</li>
                        <li>Improve our customer service experience</li>
                        <li>Train our customer service team (with notice)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Marketing and Communications</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Send promotional emails (with your consent)</li>
                        <li>Provide pet birthday reminders (if opted in)</li>
                        <li>Inform you about new products and special offers</li>
                        <li>Conduct surveys and collect feedback</li>
                        <li>Personalize marketing content based on your preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Product and Service Improvement</h3>
                  <p className="mb-4">We use information to improve our products, services, and website:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Analyze purchasing patterns and trends</li>
                    <li>Develop new products based on customer preferences</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Test and troubleshoot new features</li>
                    <li>Measure the effectiveness of our marketing campaigns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Security and Fraud Prevention</h3>
                  <p className="mb-4">We use information to protect our business and our customers:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Detect and prevent fraudulent transactions</li>
                    <li>Monitor for unauthorized account access</li>
                    <li>Protect against malicious, deceptive, or illegal activity</li>
                    <li>Enforce our terms of service and other policies</li>
                    <li>Verify identity for high-value or suspicious transactions</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Legal Basis for Processing (EU/UK Users)</h3>
                  <p className="mb-4">
                    For users in the European Union or United Kingdom, we process your personal information based on one
                    or more of the following legal grounds:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Contract:</span> Processing is necessary to fulfill our contractual
                      obligations to you (e.g., processing your order)
                    </li>
                    <li>
                      <span className="font-medium">Consent:</span> You have given us permission to process your
                      information for specific purposes (e.g., marketing emails)
                    </li>
                    <li>
                      <span className="font-medium">Legitimate Interests:</span> Processing is necessary for our
                      legitimate business interests, provided these interests don't override your rights
                    </li>
                    <li>
                      <span className="font-medium">Legal Obligation:</span> Processing is necessary to comply with our
                      legal obligations
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sharing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-amber-600" />
                  Information Sharing
                </CardTitle>
                <CardDescription>How and when we share your information with third parties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Who We Share Your Information With</h3>
                  <p className="mb-4">
                    We may share your personal information with the following categories of third parties:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Service Providers</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Payment processors (to process transactions)</li>
                        <li>Shipping and delivery companies (to deliver orders)</li>
                        <li>Cloud storage providers (to store data securely)</li>
                        <li>Email service providers (to send communications)</li>
                        <li>Customer service platforms (to manage inquiries)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Business Partners</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Analytics providers (to analyze website traffic)</li>
                        <li>Marketing partners (for joint promotions)</li>
                        <li>Social media platforms (when you connect accounts)</li>
                        <li>Fraud prevention services (to protect against fraud)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Legal Requirements and Business Transfers</h3>
                  <p className="mb-4">We may also disclose your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Legal Requirements:</span> To comply with applicable law,
                      regulation, legal process, or governmental request
                    </li>
                    <li>
                      <span className="font-medium">Rights Protection:</span> To enforce our terms of service and other
                      agreements, or to protect our rights, property, or safety
                    </li>
                    <li>
                      <span className="font-medium">Business Transfers:</span> In connection with a merger, acquisition,
                      reorganization, sale of assets, or bankruptcy
                    </li>
                    <li>
                      <span className="font-medium">Emergency Situations:</span> To address fraud, security issues, or
                      technical problems
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Information We Do Not Share</h3>
                  <p className="mb-4">
                    We do not sell, rent, or trade your personal information to third parties for their marketing
                    purposes. We also do not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Share your payment information except with payment processors</li>
                    <li>Provide your personal information to unaffiliated third parties for their direct marketing</li>
                    <li>Share your information with data brokers</li>
                    <li>Use your information for automated decision-making that would have legal effects</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">International Data Transfers</h3>
                  <p className="mb-4">
                    We are based in the United States, and the information we collect may be stored and processed in the
                    United States or other countries where our service providers maintain facilities. These countries
                    may have data protection laws that are different from those in your country.
                  </p>
                  <p className="mb-4">
                    When we transfer personal information outside of the European Economic Area, United Kingdom, or
                    Switzerland, we implement appropriate safeguards:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Standard contractual clauses approved by the European Commission</li>
                    <li>Binding corporate rules for transfers to data controllers</li>
                    <li>Derogations for specific situations, such as your explicit consent</li>
                    <li>Adequacy decisions where applicable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rights" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-amber-600" />
                  Your Privacy Rights
                </CardTitle>
                <CardDescription>
                  Understanding and exercising your rights regarding your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
                  <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Access and Portability</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Right to access your personal information</li>
                        <li>Right to receive a copy of your information in a structured, commonly used format</li>
                        <li>Right to transfer your information to another service</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Correction and Deletion</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Right to correct inaccurate or incomplete information</li>
                        <li>Right to request deletion of your personal information</li>
                        <li>Right to request restriction of processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Objection and Restriction</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Right to object to processing of your information</li>
                        <li>Right to withdraw consent at any time</li>
                        <li>Right to opt out of marketing communications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Additional Rights</h4>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Right to non-discrimination for exercising your rights</li>
                        <li>Right to lodge a complaint with a supervisory authority</li>
                        <li>Right to opt out of sale of personal information (where applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">How to Exercise Your Rights</h3>
                  <p className="mb-4">You can exercise your privacy rights in the following ways:</p>
                  <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <span className="font-medium">Account Settings:</span> Many of your rights can be exercised by
                      logging into your account and updating your information or preferences
                    </li>
                    <li>
                      <span className="font-medium">Contact Us:</span> Email our Privacy Team at privacy@duskytarte.com
                      with your specific request
                    </li>
                    <li>
                      <span className="font-medium">Opt-Out Links:</span> Use the unsubscribe link in our marketing
                      emails or text messages
                    </li>
                    <li>
                      <span className="font-medium">Privacy Request Form:</span> Complete the privacy request form on
                      our website
                    </li>
                  </ol>
                  <p className="text-sm italic mt-2">
                    We will respond to all legitimate requests within 30 days. In some cases, we may need to verify your
                    identity before processing your request.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">California Privacy Rights</h3>
                  <p className="mb-4">
                    If you are a California resident, you have specific rights under the California Consumer Privacy Act
                    (CCPA) and California Privacy Rights Act (CPRA):
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Right to know what personal information we collect and disclose</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to opt-out of the sale or sharing of personal information</li>
                    <li>Right to limit use and disclosure of sensitive personal information</li>
                    <li>Right to non-discrimination for exercising your rights</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    To exercise your California privacy rights, please contact us at privacy@duskytarte.com or call our
                    toll-free number at 1-800-XXX-XXXX.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2">Data Retention</h3>
                  <p className="mb-4">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in
                    this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria
                    used to determine our retention periods include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>The length of time we have an ongoing relationship with you</li>
                    <li>Legal obligations we must comply with (e.g., tax, accounting requirements)</li>
                    <li>Statutes of limitations for potential legal claims</li>
                    <li>Guidelines from relevant data protection authorities</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    When we no longer need to process your information, we will either delete or anonymize it, or if
                    deletion is not possible, we will securely store it and isolate it from further processing until
                    deletion is possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Us About Privacy</h2>
          <p className="mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
            please contact our Privacy Team:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-muted-foreground mb-1">privacy@duskytarte.com</p>
              <p className="text-sm text-muted-foreground">We aim to respond within 2 business days</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Mail</h3>
              <p className="text-muted-foreground">
                DUSKY-TARTE Privacy Team
                <br />
                123 Paw Street
                <br />
                Portland, OR 97201
                <br />
                United States
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Privacy Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq/privacy">View Privacy FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

