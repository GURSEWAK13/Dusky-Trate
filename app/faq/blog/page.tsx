import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BlogFAQPage() {
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
          <h1 className="text-3xl font-bold mb-2">Blog FAQ</h1>
          <p className="text-muted-foreground">Frequently asked questions about our blog content and contributions</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How often is the blog updated?</AccordionTrigger>
              <AccordionContent>
                We publish new content on our blog at least twice a week. We typically post new articles on Tuesdays and
                Fridays, with occasional special features for holidays and events. You can subscribe to our newsletter
                to get notified when new content is published.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What topics does the DUSKY-TARTE blog cover?</AccordionTrigger>
              <AccordionContent>
                Our blog covers a wide range of topics related to dog nutrition, health, and celebrations. This includes
                articles about dog-safe ingredients, the benefits of different fruits and vegetables for dogs,
                celebration ideas, dog birthday party planning tips, and success stories from our customers. We also
                feature interviews with veterinary nutritionists and other pet experts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I contribute to the blog?</AccordionTrigger>
              <AccordionContent>
                Yes! We welcome guest contributions from pet parents, veterinarians, dog trainers, and other pet
                professionals. If you'd like to contribute, please email us at blog@duskytarte.com with your topic idea
                and a brief writing sample. We're particularly interested in personal stories about celebrating special
                occasions with your dog, expert advice on canine nutrition, and creative ideas for dog-friendly
                celebrations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How can I share blog articles on social media?</AccordionTrigger>
              <AccordionContent>
                Each blog post has social sharing buttons at the bottom of the article that allow you to easily share on
                platforms like Facebook, Twitter, Pinterest, and Instagram. You can also copy the direct link to share
                via email or messaging apps. We love when our community shares our content and joins the conversation!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I request a specific topic for the blog?</AccordionTrigger>
              <AccordionContent>
                We're always looking for new topic ideas that would interest our community. You can suggest topics by
                commenting on existing blog posts, sending us a message through our contact form, or emailing
                blog@duskytarte.com. We review all suggestions and prioritize topics that multiple readers have
                requested.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Are the recipes on the blog the same as what's in your products?</AccordionTrigger>
              <AccordionContent>
                The recipes we share on our blog are simplified versions that pet parents can make at home. While they
                use similar dog-safe ingredients to our products, our commercial recipes have been developed with
                veterinary nutritionists and undergo more extensive testing and quality control. The blog recipes are
                great for occasional treats, while our products are formulated to be nutritionally balanced for special
                occasions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How do I comment on blog posts?</AccordionTrigger>
              <AccordionContent>
                You'll need to create a DUSKY-TARTE account to comment on our blog posts. Once logged in, scroll to the
                bottom of any article to find the comment section. We moderate all comments to ensure a positive
                community environment, so there may be a short delay before your comment appears. We encourage
                thoughtful discussion and questions related to the article topic.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can I subscribe to get blog updates?</AccordionTrigger>
              <AccordionContent>
                Yes! You can subscribe to our blog updates in several ways:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Sign up for our email newsletter (weekly digest of new content)</li>
                  <li>Follow us on social media where we share all new posts</li>
                  <li>Enable browser notifications on our website</li>
                  <li>Subscribe to our RSS feed if you use a feed reader</li>
                </ul>
                You can manage all subscription preferences in your account settings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to us directly.
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

