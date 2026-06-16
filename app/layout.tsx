import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Directory | Hardev Gohel AI Consultancy',
    template: '%s | AI Tools Directory'
  },
  description: 'Discover the best AI tools for your business. Curated by Hardev Gohel, AI Automation Consultant and expert in practical AI workflows.',
  keywords: ['AI tools', 'AI consultancy', 'Hardev Gohel', 'AI automation', 'workflow automation', 'AI consultants', 'AI directory'],
  authors: [{ name: 'Hardev Gohel', url: 'https://hardevgohel.in' }],
  creator: 'Hardev Gohel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hardevgohel.in',
    title: 'AI Tools Directory | Hardev Gohel AI Consultancy',
    description: 'Discover the best AI tools for your business. Curated by Hardev Gohel, AI Automation Consultant.',
    siteName: 'AI Tools Directory'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Directory | Hardev Gohel AI Consultancy',
    description: 'Discover the best AI tools for your business. Curated by Hardev Gohel, AI Automation Consultant.',
    creator: '@HardevGohel'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://hardevgohel.in/#website",
      "url": "https://hardevgohel.in",
      "name": "AI Tools Directory",
      "publisher": {
        "@id": "https://hardevgohel.in/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://hardevgohel.in/#person",
      "name": "Hardev Gohel",
      "url": "https://hardevgohel.in",
      "jobTitle": "AI Automation Consultant",
      "description": "AI Automation Consultant and Systems Architect helping businesses design custom no-code automations.",
      "sameAs": [
        "https://www.linkedin.com/in/hardevgohel/",
        "https://www.youtube.com/channel/UCJ4FmQ9TBTUh5sPSzh_mQkw"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://hardevgohel.in/#consultancy",
      "name": "Hardev Gohel AI Consultancy",
      "url": "https://hardevgohel.in",
      "description": "Practical AI workflows and automation consulting by Hardev Gohel.",
      "founder": {
        "@id": "https://hardevgohel.in/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
