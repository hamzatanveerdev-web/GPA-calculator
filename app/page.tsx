import GpaCalculator from "@/components/gpa-calculator"
import StructuredData from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingUp, BookOpen, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Calculator,
    title: "Accurate Calculations",
    description: "Calculate your GPA and CGPA with precision using our quality point table system.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your academic performance across multiple semesters in one place.",
  },
  {
    icon: BookOpen,
    title: "Flexible Credits",
    description: "Support for various credit ranges (20, 40, 60, 80, 100) to fit your curriculum.",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get immediate calculations without any waiting time or complex forms.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your academic data stays on your device. We don't store or share your information.",
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Simple, intuitive interface designed for students and educators alike.",
  },
]

const howItWorks = [
  {
    step: "1",
    title: "Add Your Subjects",
    description: "Enter subject names, marks obtained, and total credit range for each subject.",
  },
  {
    step: "2",
    title: "Calculate GPA",
    description: "Click calculate to get your semester GPA instantly using quality points.",
  },
  {
    step: "3",
    title: "Track CGPA",
    description: "Add multiple semesters to calculate your cumulative GPA across all terms.",
  },
]

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Calculate Your <span className="gradient-text">GPA</span> with Ease
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Track your academic performance, calculate semester GPAs, and monitor your cumulative GPA across all semesters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="text-lg button-hover shadow-lg hover:shadow-xl pulse-glow"
              >
                <Link href="#calculator">Start Calculating</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg button-hover"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our GPA Calculator?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Designed for students who want to track their academic journey accurately and efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card 
                    key={feature.title} 
                    className="card-hover animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Calculate your GPA in three simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div 
                  key={step.step} 
                  className="text-center space-y-4 animate-fadeInUp"
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your GPA</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Enter your subject details below to calculate your semester GPA and track your cumulative GPA.
              </p>
            </div>
            <div className="max-w-4xl mx-auto animate-scaleIn">
              <GpaCalculator />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold">Start Tracking Your <span className="gradient-text">Academic Success</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join thousands of students who use our GPA calculator to stay on top of their academic goals.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg button-hover shadow-lg hover:shadow-xl pulse-glow"
            >
              <Link href="#calculator">Calculate Your GPA Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}