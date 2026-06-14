import Link from "next/link"
import { Github, Twitter, Linkedin, Calculator } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Calculator", href: "#calculator" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ],
  resources: [
    { name: "GPA Guide", href: "/about" },
    { name: "Academic Tips", href: "/features" },
    { name: "Study Strategies", href: "/features" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GPA Calculator
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calculate your GPA and CGPA with ease. Track your academic performance and achieve your goals with our powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GPA Calculator. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}