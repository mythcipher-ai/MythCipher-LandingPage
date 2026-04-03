import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "MythCipher  Automate Social Media, Emails & Content with AI",
  description:
    "MythCipher automates your LinkedIn, YouTube, email campaigns, and content creation with AI. Connect in one click. No code. No chaos. Built in India.",
  openGraph: {
    title:
      "MythCipher  Automate Social Media, Emails & Content with AI",
    description:
      "MythCipher automates your LinkedIn, YouTube, email campaigns, and content creation with AI. Connect in one click. No code. No chaos. Built in India.",
    url: "https://mythcipher.in",
  },
  alternates: {
    canonical: "https://mythcipher.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MythCipher",
  description:
    "AI-powered automation platform for social media scheduling, email campaigns, and content creation. LinkedIn, YouTube, Instagram, and email automations.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://mythcipher.in",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "INR", name: "Free Trial" },
    { "@type": "Offer", price: "499", priceCurrency: "INR", name: "Monthly" },
    { "@type": "Offer", price: "5999", priceCurrency: "INR", name: "Yearly" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* // Replace GTM-XXXXXXX with your Tag Manager ID from tagmanager.google.com */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}</Script>

        {/* // Replace G-XXXXXXXXXX with your GA4 Measurement ID from analytics.google.com */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* // Replace GTM-XXXXXXX with your Tag Manager ID */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
