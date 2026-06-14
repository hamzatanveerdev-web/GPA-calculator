import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | GPA Calculator Common Questions",
  description: "Find answers to frequently asked questions about GPA calculation, CGPA tracking, quality points, and using our academic performance calculator.",
  keywords: ["GPA calculator FAQ", "CGPA questions", "grade point average help", "academic calculator support"],
}

const faqs = [
  {
    question: "What is GPA and how is it calculated?",
    answer: "GPA (Grade Point Average) is a numerical representation of your academic performance. It's calculated by converting your marks into quality points based on a standardized table, then averaging these points across all subjects. Our calculator uses a 4.0 scale, which is common in many educational institutions.",
  },
  {
    question: "What is the difference between GPA and CGPA?",
    answer: "GPA refers to the Grade Point Average for a single semester or term, while CGPA (Cumulative Grade Point Average) is the average of GPAs across multiple semesters. CGPA gives you an overall view of your academic performance throughout your entire program.",
  },
  {
    question: "What credit ranges does this calculator support?",
    answer: "Our calculator supports multiple credit ranges: 20, 40, 60, 80, and 100. These correspond to different types of courses and credit systems used in various educational institutions. Each range has its own quality point table for accurate conversion.",
  },
  {
    question: "How accurate are the calculations?",
    answer: "Our calculator uses established quality point tables that follow academic standards. The calculations are precise and consistent with how most institutions convert marks to GPA. However, always verify with your institution's specific grading policy, as some may have slight variations.",
  },
  {
    question: "Can I save my data for later?",
    answer: "Currently, the calculator processes data in real-time without saving. However, you can manually add multiple semesters to track your CGPA. Your data stays on your device and is not stored on our servers for privacy reasons.",
  },
  {
    question: "What are quality points?",
    answer: "Quality points are numerical values assigned to mark ranges based on the credit system. For example, in a 40-credit system, certain mark ranges correspond to specific quality points. These are then converted to GPA on a 4.0 scale. Our calculator handles this conversion automatically.",
  },
  {
    question: "Why is GPA capped at 4.0?",
    answer: "The 4.0 scale is a widely used standard in academic grading. Even if your quality points calculation exceeds 4.0, we cap it at 4.0 to maintain consistency with standard academic grading systems. This ensures your GPA is comparable across different institutions.",
  },
  {
    question: "Can I use this calculator for any educational system?",
    answer: "Our calculator is designed to be flexible and works with many educational systems that use quality point tables. However, grading systems can vary significantly between institutions and countries. We recommend checking with your institution to ensure compatibility.",
  },
  {
    question: "How do I calculate my required grades for a target GPA?",
    answer: "To calculate required grades for a target GPA, you can use our calculator to experiment with different mark combinations. Enter your current grades and then adjust the marks for remaining subjects to see how they affect your overall GPA.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, absolutely. All calculations are performed client-side on your device. We do not store, transmit, or have access to your academic data. Your privacy is our priority, which is why we don't require account registration or data storage.",
  },
  {
    question: "Can I calculate GPA for past semesters?",
    answer: "Yes, you can use our manual semester entry feature to input GPA values for past semesters. This allows you to calculate your CGPA including historical academic performance even if you don't have the detailed marks for earlier semesters.",
  },
  {
    question: "What should I do if my institution uses a different grading scale?",
    answer: "If your institution uses a significantly different grading scale, our calculator might not be directly compatible. However, you can often convert your grades to the 4.0 scale using conversion tables provided by your institution or educational authorities.",
  },
]

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about GPA calculation, our calculator features, and academic performance tracking.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-hover rounded-lg border px-4 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
          <h2 className="text-3xl font-bold">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Can't find the answer you're looking for? Our calculator is designed to be intuitive, but we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="text-lg button-hover shadow-lg hover:shadow-xl"
            >
              <Link href="/#calculator">Try the Calculator</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-lg button-hover"
            >
              <Link href="/about">Learn More About GPA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}