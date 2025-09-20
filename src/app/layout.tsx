import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'One X Transmission - Gearbox Specialist Shah Alam',
  description: 'Khusus CVT dan automatik. Diagnosis tepat, jaminan kerja, terus WhatsApp bila sedia. Call +60 11-3105 1677.',
  keywords: 'one x transmission, gearbox specialist shah alam, gearbox repair shah alam, cvt specialist shah alam, gearbox overhaul shah alam, gearbox service shah alam, gearbox diagnosis shah alam',
  authors: [{ name: 'One X Transmission' }],
  creator: 'One X Transmission',
  publisher: 'One X Transmission',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#111111',
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    url: 'https://pakargearboxshahalam.com',
    siteName: 'One X Transmission',
    title: 'One X Transmission - Gearbox Specialist Shah Alam',
    description: 'Khusus CVT dan automatik. Diagnosis tepat, jaminan kerja, terus WhatsApp bila sedia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'One X Transmission - CVT dan Gearbox Automatik'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pakar Gearbox Shah Alam - Diagnosis Tepat, Baiki Sekali Jalan',
    description: 'Khusus CVT dan automatik. Diagnosis tepat, jaminan kerja.',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://pakargearboxshahalam.com'
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ms-MY" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "@id": "https://pakargearboxshahalam.com#business",
              "name": "One X Transmission",
              "description": "Gearbox specialist di Shah Alam. Diagnosis tepat, jaminan kerja.",
              "url": "https://onextransmission.com",
              "telephone": "+601131051677",
              "email": "info@onextransmission.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jalan Kampung Batu 7, Jln Kebun Tambahan",
                "addressLocality": "Shah Alam",
                "addressRegion": "Selangor",
                "postalCode": "40460",
                "addressCountry": "MY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "3.0738",
                "longitude": "101.5183"
              },
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 09:00-17:00"
              ],
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Shah Alam"
              },
              "serviceType": [
                "Pembaikan Gearbox",
                "Overhaul CVT",
                "Diagnosis Gearbox",
                "Servis Gearbox Automatik"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `
          }}
        />
      </body>
    </html>
  )
}
