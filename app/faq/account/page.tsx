import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AccountFAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/faq">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to FAQ
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Account FAQ</h1>
          <p className="text-muted-foreground">Frequently asked questions about your DUSKY-TARTE account</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create a DUSKY-TARTE account?</AccordionTrigger>
              <AccordionContent>
                Creating an account is simple:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Click the "Account" icon in the top right corner of our website</li>
                  <li>Select "Create Account"</li>
                  <li>Enter your email address and create a password</li>
                  <li>Fill in your name and basic contact information</li>
                  <li>Optionally, add information about your dog(s)</li>
                  <li>Verify your email address by clicking the link in our confirmation email</li>
                </ol>
                You can also create an account during the checkout process. Having an account allows you to track
                orders, save favorite products, and receive personalized recommendations for your dog.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>I forgot my password. How do I reset it?</AccordionTrigger>
              <AccordionContent>
                To reset your password:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Click the "Account" icon in the top right corner</li>
                  <li>Select "Sign In"</li>
                  <li>Click "Forgot Password?" below the sign-in form</li>
                  <li>Enter the email address associated with your account</li>
                  <li>Check your email for a password reset link (check spam/junk folders if not received)</li>
                  <li>Click the link and follow instructions to create a new password</li>
                </ol>
                Reset links expire after 24 hours for security reasons. If you don't receive a reset email within 10
                minutes, please contact customer support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How do I add or update my pet's information?</AccordionTrigger>
              <AccordionContent>
                Managing your pet profiles is easy:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Go to "My Account" and select the "My Pets" tab</li>
                  <li>To add a new pet, click "Add New Pet"</li>
                  <li>To update an existing pet, select the pet and click "Edit"</li>
                  <li>Enter or update information like name, breed, birthday, weight, and dietary restrictions</li>
                  <li>Optionally, upload a photo of your pet</li>
                  <li>Save your changes</li>
                </ol>
                Adding detailed information about your pet helps us provide personalized product recommendations and
                birthday reminders. You can add multiple pets to your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I view my order history?</AccordionTrigger>
              <AccordionContent>
                To access your order history:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Go to "My Account" and select the "Orders" tab</li>
                  <li>View a list of all your past orders, sorted by date</li>
                  <li>Click on any order number to see detailed information</li>
                  <li>From the order details page, you can track shipments, reorder items, or contact support</li>
                </ol>
                We maintain your complete order history as long as you have an account with us. This makes it easy to
                reorder favorite items or check details of past purchases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I save multiple shipping addresses?</AccordionTrigger>
              <AccordionContent>
                Yes, you can save multiple shipping addresses:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Go to "My Account" and select the "Addresses" tab</li>
                  <li>Click "Add New Address" to add additional addresses</li>
                  <li>Give each address a nickname (e.g., "Home," "Work," "Mom's House")</li>
                  <li>Set one address as your default shipping address</li>
                  <li>Edit or delete addresses as needed</li>
                </ol>
                Saving multiple addresses is convenient for sending gifts to friends and family or having treats
                delivered to different locations. During checkout, you can select from your saved addresses or enter a
                new one.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How do I update my payment methods?</AccordionTrigger>
              <AccordionContent>
                To manage your saved payment methods:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Go to "My Account" and select the "Payment Methods" tab</li>
                  <li>View your existing payment methods</li>
                  <li>Click "Add New Card" to add a new payment method</li>
                  <li>To set a default payment method, select "Set as Default"</li>
                  <li>To remove a payment method, click "Remove"</li>
                </ol>
                For security, we don't store complete credit card numbers - only the last four digits are visible. All
                payment information is securely encrypted and processed in compliance with PCI DSS standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How do I change my email preferences?</AccordionTrigger>
              <AccordionContent>
                To update your communication preferences:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Go to "My Account" and select the "Notifications" tab</li>
                  <li>Choose which types of communications you want to receive:</li>
                  <ul className="list-disc pl-6 mt-1 mb-1">
                    <li>Order updates and shipping notifications</li>
                    <li>Special offers and promotions</li>
                    <li>Pet birthday reminders</li>
                    <li>New product announcements</li>
                    <li>Blog updates and educational content</li>
                  </ul>
                  <li>Select your preferred communication channels (email, SMS)</li>
                  <li>Save your preferences</li>
                </ol>
                You can also unsubscribe from marketing emails by clicking the "Unsubscribe" link at the bottom of any
                email. Note that transactional emails (order confirmations, shipping updates) will still be sent
                regardless of preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can I create a wishlist or save favorite products?</AccordionTrigger>
              <AccordionContent>
                Yes, you can save favorite products for future reference:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Browse our products</li>
                  <li>Click the heart icon on any product to add it to your favorites</li>
                  <li>Access your saved favorites by going to "My Account" and selecting the "Favorites" tab</li>
                  <li>
                    From your favorites list, you can quickly add items to your cart or remove them from your favorites
                  </li>
                </ol>
                This feature is great for keeping track of products you want to try or items your dog particularly
                enjoys. You can also share your favorites list with friends and family for gift ideas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
              <AccordionContent>
                If you wish to delete your account:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Sign in to your account</li>
                  <li>Go to "My Account" and select the "Settings" tab</li>
                  <li>Scroll to the bottom to find the "Delete Account" section</li>
                  <li>Click "Delete Account" and confirm your decision</li>
                  <li>Enter your password for security verification</li>
                  <li>Optionally, provide feedback on why you're leaving</li>
                </ol>
                Account deletion is permanent and cannot be undone. Deleting your account will remove all your personal
                information, saved addresses, payment methods, order history, and pet profiles. If you have any active
                orders, we recommend waiting until they're completed before deleting your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Is there a loyalty or rewards program?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer the "Paw Points" loyalty program:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Earn 1 Paw Point for every $1 spent</li>
                  <li>Earn bonus points for referring friends, leaving reviews, and celebrating your dog's birthday</li>
                  <li>Redeem points for discounts, free treats, or exclusive merchandise</li>
                  <li>Achieve different status levels (Puppy, Good Dog, Top Dog) with increasing benefits</li>
                  <li>Points never expire as long as your account remains active</li>
                </ul>
                Your Paw Points balance and status level are displayed in your account dashboard. You can view available
                rewards and redemption options in the "Rewards" tab. The program is free to join - all account holders
                are automatically enrolled.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Ready to manage your account?</h2>
          <p className="mb-4">
            Access your account dashboard to update your information, track orders, and manage your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/profile">Go to My Account</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Customer Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

