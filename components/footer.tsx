import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Home, Info, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#2980b9] opacity-90 text-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Social Media */}
            <div className="flex flex-col items-start">
              <div className="bg-transparent p-4 rounded-b-lg mb-8">
                <Image src="/logo.png" alt="FICS Logo" width={120} height={60} />
              </div>

              <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com/NUSTFICS"
                  className="bg-[#1877f2] hover:bg-[#0e5aa7] w-10 h-10 flex items-center justify-center rounded-sm transition-colors"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://instagram.com/fics_nust"
                  className="bg-[#c32aa3] hover:bg-[#9a2183] w-10 h-10 flex items-center justify-center rounded-sm transition-colors"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="flex items-center hover:text-gray-200 transition-colors">
                    <Home size={16} className="mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center hover:text-gray-200 transition-colors">
                    <Info size={16} className="mr-2" />
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center hover:text-gray-200 transition-colors">
                    <Phone size={16} className="mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Have a Question?</h3>
              <div className="space-y-4">
                <p className="hover:text-gray-200 transition-colors">
                  <Link href="https://facebook.com/NUSTFICS">facebook.com/NUSTFICS</Link>
                </p>
                <p className="hover:text-gray-200 transition-colors">
                  <Link href="mailto:fics_nust@icon.nust.edu.pk">fics_nust@icon.nust.edu.pk</Link>
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="bg-[#1e6091] hover:bg-[#164e78] px-4 py-2 rounded-md transition-colors inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#1e6091] text-white py-4 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <p>Copyright © 2015-2024 NUST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
