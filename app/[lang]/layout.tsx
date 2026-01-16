import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SHAPE - Your AI Fitness & Nutrition Coach",
  description: "Achieve your dream physique with personalized workout and nutrition plans powered by AI.",
  openGraph: {
    title: "SHAPE - Your AI Fitness & Nutrition Coach",
    description: "Achieve your dream physique with personalized workout and nutrition plans powered by AI.",
    url: "https://shape-site.vercel.app",
    siteName: "SHAPE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAPE - Your AI Fitness & Nutrition Coach",
    description: "Achieve your dream physique with personalized workout and nutrition plans powered by AI.",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
