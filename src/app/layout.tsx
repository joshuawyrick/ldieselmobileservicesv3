import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA, SITE_URL } from '@/lib/constants';
import Template from './template';
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  title: {
    default: `24/7 Mobile Diesel Mechanic on the Central Coast | ${COMPANY_NAME}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: `24/7 mobile diesel mechanic for San Luis Obispo & Santa Barbara. Emergency roadside assistance for heavy-duty trucks, on-site repair & fleet maintenance on Highway 101. Call ${PHONE_NUMBER} now!`,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `24/7 Mobile Diesel Mechanic on the Central Coast | ${COMPANY_NAME}`,
    description: '24/7 mobile diesel mechanic for San Luis Obispo & Santa Maria. Emergency roadside assistance, on-site truck repair & fleet maintenance.',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: '#DE3131', // Cherry Red
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_NAME,
    "url": SITE_URL,
    "telephone": PHONE_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "390 Apricot St.",
      "addressLocality": "Nipomo",
      "addressRegion": "CA",
      "postalCode": "93444",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.0444,
      "longitude": -120.4752
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "San Luis Obispo County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Santa Barbara County"
      }
    ],
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "description": "24/7 Mobile Diesel Mechanic services in San Luis Obispo and Santa Barbara counties, specializing in heavy-duty truck repair and emergency roadside assistance."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <Template>{children}</Template>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
