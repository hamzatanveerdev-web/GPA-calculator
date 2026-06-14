export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GPA Calculator",
    "description": "Calculate your GPA and CGPA across all semesters with ease. A clean and modern calculator for academic performance tracking.",
    "url": "https://gpacalculator.com",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "GPA Calculation",
      "CGPA Tracking",
      "Multiple Credit Support",
      "Quality Point Conversion",
      "Privacy-Focused"
    ],
    "author": {
      "@type": "Organization",
      "name": "GPA Calculator"
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is GPA and how is it calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GPA (Grade Point Average) is a numerical representation of your academic performance. It's calculated by converting your marks into quality points based on a standardized table, then averaging these points across all subjects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between GPA and CGPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GPA refers to the Grade Point Average for a single semester or term, while CGPA (Cumulative Grade Point Average) is the average of GPAs across multiple semesters."
        }
      },
      {
        "@type": "Question",
        "name": "What credit ranges does this calculator support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator supports multiple credit ranges: 20, 40, 60, 80, and 100. These correspond to different types of courses and credit systems used in various educational institutions."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  )
}