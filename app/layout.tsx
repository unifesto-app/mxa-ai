import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const agrandir = localFont({
  src: "./assets/fonts/Agrandir/Agrandir-Regular.otf",
  variable: "--font-agrandir",
  weight: "400",
  display: "swap",
});

const sweetApricot = localFont({
  src: "./assets/fonts/SweetApricot/SweetApricot.ttf",
  variable: "--font-sweet-apricot",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MxA.ai — Face Check-In by Unifesto | AI-Powered Event Entry",
  description: "Skip the queue with AI-powered facial recognition. Instant, contactless event check-in without QR codes or tickets. Match × Access for seamless event entry.",
  keywords: [
    "face check-in",
    "facial recognition",
    "AI event entry",
    "contactless check-in",
    "event management",
    "face recognition",
    "smart check-in",
    "event technology",
    "Unifesto",
    "MxA.ai",
    "Match x Access"
  ],
  authors: [{ name: "Unifesto" }],
  openGraph: {
    title: "MxA.ai — Face Check-In by Unifesto",
    description: "Skip the queue with AI-powered facial recognition. Instant, contactless event check-in without QR codes or tickets.",
    type: "website",
    url: "https://mxa.ai",
    siteName: "MxA.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "MxA.ai — Face Check-In by Unifesto",
    description: "Skip the queue with AI-powered facial recognition. Instant, contactless event check-in.",
    site: "@unifestoapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${agrandir.variable} ${sweetApricot.variable}`}>
      <body className="font-agrandir antialiased">
        {children}
      </body>
    </html>
  );
}
