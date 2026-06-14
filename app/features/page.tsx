import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, BookOpen, Clock, Shield, Zap, Smartphone, Share2, History } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | GPA Calculator Tools & Benefits",
  description: "Explore the powerful features of our GPA Calculator including accurate calculations, progress tracking, flexible credit support, and privacy-focused design.",
  keywords: ["GPA calculator features", "CGPA tracking", "academic tools", "student calculator features", "grade tracking"],
}

const features = [
  {
    icon: Calculator,
    title: "Accurate GPA Calculations",
    description: "Our calculator uses established quality point tables to ensure precise GPA calculations based on standard academic grading scales.",
    benefits: [
      "Supports multiple credit ranges (20, 40, 60, 80, 100)",
      "Uses quality point conversion system",
      "Capped at 4.0 GPA scale as per academic standards",
      "Real-time calculation as you enter marks",
    ],
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your academic journey across multiple semesters with our comprehensive CGPA tracking system.",
    benefits: [
      "Add multiple semesters to track progress",
      "Calculate cumulative GPA automatically",
      "Visual breakdown of semester performance",
      "Manual GPA entry for past semesters",
    ],
  },
  {
    icon: BookOpen,
    title: "Flexible Credit System",
    description: "Accommodates various educational systems with support for different credit ranges and grading schemes.",
    benefits: [
      "20, 40, 60, 80, and 100 credit ranges",
      "Customizable subject names",
      "Adaptable to different curricula",
      "Quality point tables for each range",
    ],
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get immediate calculations without any waiting time. Our optimized algorithm delivers results instantly.",
    benefits: [
      "Real-time GPA calculation",
      "No page reloads or waiting",
      "Instant CGPA updates",
      "Quick data entry interface",
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your academic data stays on your device. We don't store, share, or transmit your personal information.",
    benefits: [
      "No data collection or storage",
      "Client-side processing only",
      "No account required",
      "Complete data privacy",
    ],
  },
  {
    icon: Zap,
    title: "User-Friendly Interface",
    description: "Designed with students in mind, our interface is intuitive, clean, and easy to navigate.",
    benefits: [
      "Simple and clean design",
      "Mobile-responsive layout",
      "Intuitive data entry",
      "Clear result display",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Access your GPA calculator from any device - desktop, tablet, or mobile phone.",
    benefits: [
      "Works on all screen sizes",
      "Touch-friendly interface",
      "Consistent experience across devices",
      "No app download required",
    ],
  },
  {
    icon: History,
    title: "Semester History",
    description: "Keep track of all your semesters in one place with detailed history and easy management.",
    benefits: [
      "Save multiple semesters",
      "Edit or delete semesters",
      "Review past performance",
      "Compare semester results",
    ],
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your academic achievements with counselors, parents, or for applications when needed.",
    benefits: [
      "Clear result presentation",
      "Print-friendly layout",
      "Export-ready format",
      "Professional appearance",
    ],
  },
]

const useCases = [
  {
    title: "For Students",
    useCases: [
      "Track current semester performance",
      "Calculate required grades for target GPA",
      "Monitor overall academic progress",
      "Plan course load effectively",
    ],
  },
  {
    title: "For Educators",
    useCases: [
      "Demonstrate GPA calculation to students",
      "Verify student calculations",
      "Plan curriculum requirements",
      "Track class performance trends",
    ],
  },
  {
    title: "For Parents",
    useCases: [
      "Monitor child's academic progress",
      "Understand grading systems",
      "Set realistic academic goals",
      "Support educational planning",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Powerful Features for <span className="gradient-text">Academic Success</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive tools and benefits designed to help you track, calculate, and improve your academic performance.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={feature.title} 
                  className="card-hover animate-fadeInUp h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mr-2 mt-0.5">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Benefit?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Our GPA calculator is designed for everyone involved in academic achievement tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={useCase.title} 
                className="card-hover animate-fadeInUp"
                style={{ animationDelay: `${(index + 9) * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {useCase.useCases.map((item) => (
                      <li key={item} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold">Experience These Features Today</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Start using our feature-rich GPA calculator to take control of your academic journey.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg button-hover shadow-lg hover:shadow-xl pulse-glow"
          >
            <Link href="/#calculator">Try the Calculator</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}