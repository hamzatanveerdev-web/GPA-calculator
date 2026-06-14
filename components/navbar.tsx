"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calculator } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "FAQ", href: "/faq" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GPA Calculator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith("#") && pathname === "/")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <Button 
              asChild 
              size="sm" 
              className="ml-4 button-hover shadow-md hover:shadow-lg"
            >
              <Link href="#calculator">Calculate Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 transition-colors"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-2 mt-8">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || (item.href.startsWith("#") && pathname === "/")
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200
                          ${isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          }
                        `}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                  <div className="pt-4 mt-4 border-t">
                    <Button 
                      asChild 
                      className="w-full button-hover shadow-md"
                      size="lg"
                    >
                      <Link href="#calculator" onClick={() => setIsOpen(false)}>
                        Calculate Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}