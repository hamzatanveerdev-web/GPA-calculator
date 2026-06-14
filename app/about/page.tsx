import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Target, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import "@/app/globals.css";
export const metadata: Metadata = {
  title: "About GPA Calculator | Academic Performance Tracking Tool",
  description: "Learn about our GPA Calculator tool designed to help students track their academic performance, calculate semester GPAs, and monitor cumulative GPA across all semesters.",
  keywords: ["GPA calculator", "CGPA calculator", "academic performance", "grade point average", "student tools"],
}

const aboutSections = [
  {
    icon: GraduationCap,
    title: "Our Mission",
    content: "We believe every student deserves easy access to tools that help them understand and improve their academic performance. Our GPA Calculator is designed to be simple, accurate, and accessible to all students.",
  },
  {
    icon: Target,
    title: "What We Offer",
    content: "Our calculator supports multiple credit ranges (20, 40, 60, 80, 100) commonly used in educational institutions. The quality point table system ensures accurate GPA calculations based on standard grading scales.",
  },
  {
    icon: Award,
    title: "Accuracy First",
    content: "We use established quality point tables to convert your marks into GPA values on a 4.0 scale. This ensures consistency with standard academic grading systems and helps you understand where you stand.",
  },
  {
    icon: BookOpen,
    title: "Educational Focus",
    content: "Beyond calculations, we aim to help students understand their academic progress, identify areas for improvement, and set realistic goals for their educational journey.",
  },
]

const qualityPointInfo = [
  {
    range: "20 credits",
    description: "Used for short courses or modules, with quality points scaled accordingly.",
  },
  {
    range: "40 credits",
    description: "Common for half-semester courses or practical modules.",
  },
  {
    range: "60 credits",
    description: "Standard for many semester-long courses.",
  },
  {
    range: "80 credits",
    description: "Used for comprehensive courses or lab-intensive subjects.",
  },
  {
    range: "100 credits",
    description: "Full-year courses or major subjects requiring extensive work.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About Our <span className="gradient-text">GPA Calculator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive tool designed to help students track their academic performance and achieve their educational goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* About Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aboutSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card 
                  key={section.title} 
                  className="card-hover animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quality Points Explanation */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Quality Points</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Our calculator uses a quality point table system to convert your marks into GPA values. Different credit ranges have different quality point scales to ensure fair assessment across various course types.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualityPointInfo.map((info, index) => (
                <Card 
                  key={info.range} 
                  className="card-hover animate-fadeInUp"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl gradient-text">{info.range}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How GPA is Calculated */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How GPA is Calculated</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { step: "Step 1", title: "Quality Points", content: "Your marks are converted to quality points based on the credit range of your subject. Our quality point table ensures this conversion follows academic standards." },
                { step: "Step 2", title: "GPA Calculation", content: "Quality points are divided by the standard divider (4, 8, 12, 16, or 20 depending on credit range) and then scaled to a 4.0 GPA system." },
                { step: "Step 3", title: "Semester GPA", content: "The GPA of all subjects in a semester are averaged to calculate your semester GPA, capped at 4.0." },
                { step: "Step 4", title: "CGPA Calculation", content: "Your cumulative GPA (CGPA) is the average of all your semester GPAs, giving you an overall view of your academic performance." },
              ].map((item, index) => (
                <Card 
                  key={item.step} 
                  className="card-hover animate-fadeInLeft"
                  style={{ animationDelay: `${(index + 8) * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold">Ready to Track Your GPA?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start using our calculator today to monitor your academic progress and achieve your goals.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg button-hover shadow-lg hover:shadow-xl pulse-glow"
            >
              <Link href="/#calculator">Calculate Your GPA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}