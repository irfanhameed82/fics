import { Inter } from "next/font/google";
import type { Metadata } from "next";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata ={
    title: 'Stage 2 Rubrics',
    description: 'Evaluation rubrics for stage 2 of FICS competitions',
}
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
        {children}
      </body>
    </html>
  );
}
