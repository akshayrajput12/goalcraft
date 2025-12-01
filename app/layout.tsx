import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://goalcraft.in'), // Replace with actual domain
  title: {
    default: "GoalCraft – Boost Your Restaurant on Swiggy & Zomato",
    template: "%s | GoalCraft"
  },
  description: "GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies, boosting brand visibility and sales.",
  keywords: ["Restaurant Consulting", "Swiggy Growth", "Zomato Growth", "Menu Engineering", "Food Photography", "Restaurant Marketing", "GoalCraft"],
  authors: [{ name: "GoalCraft" }],
  creator: "GoalCraft",
  publisher: "GoalCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png', 
        sizes: '512x512',
        url: '/logo.png',
      }
    ]
  },
  openGraph: {
    title: "GoalCraft – Boost Your Restaurant on Swiggy & Zomato",
    description: "GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies.",
    url: 'https://goalcraft.in',
    siteName: 'GoalCraft',
    images: [
      {
        url: '/logo.png', // Should ideally be a larger OG image
        width: 800,
        height: 600,
        alt: 'GoalCraft Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GoalCraft – Boost Your Restaurant on Swiggy & Zomato",
    description: "GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies.",
    images: ['/logo.png'], // Should ideally be a larger OG image
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
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png?v=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png?v=1" />
        <link rel="shortcut icon" href="/logo.png?v=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#29bdb8" />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
