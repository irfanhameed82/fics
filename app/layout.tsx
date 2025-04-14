import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FICS - Finding Innovative & Creative Solutions",
  authors: [{ name: "FICS" }],
  creator: "FICS",
  keywords: ["FICS", "Forum for Innovation and Creative Solutions", "Entrepreneurship", "Innovation"],
  description:
    "FICS promotes entrepreneurship and innovation by allowing participants to address the most pressing social and environmental issues.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
