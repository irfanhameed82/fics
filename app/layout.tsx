import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FICS - Finding Innovative & Creative Solutions",
  authors: [{ name: "FICS" }],
  creator: "FICS",
  keywords: [
    "FICS",
    "Forum for Innovation and Creative Solutions",
    "Entrepreneurship",
    "Innovation",
  ],
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
      <div className="w-full sm:h-15 h-12 flex justify-between items-center overflow-hidden text-white  font-normal bg-[#00547E]  relative">
          <div className="w-full overflow-hidden marquee-container">
            <div className="flex items-center marquee-content whitespace-nowrap animate-marquee">
              <span className="mx-8">
                
                <a
                  href="https://forms.gle/5wuGkm44KXb8Hi8r7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline hover:text-gray-200"
                  aria-label="Register for FICS Junior"
                >
                  Register now for FICS Junior 2025
                </a>
              </span>
              <span className="mx-8">
                Register now for FICS Junior 2025.{" "}
                <a
                  href="https://forms.gle/5wuGkm44KXb8Hi8r7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline hover:text-gray-200"
                  aria-label="Register for FICS Junior"
                >
                  Register now
                </a>
              </span>
              <span className="mx-8">
             FICS International 2025.{" "}
                <a
                  href="/ideasubmitted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline hover:text-gray-200"
                  aria-label="Register for FICS Junior"
                >
                  Register now
                </a>
              </span>
            </div>
          </div>
        </div>
        

        {children}
        <Footer />
      </body>
    </html>
  );
}
