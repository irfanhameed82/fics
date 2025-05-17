import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Home, Info, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] ">
      <div className="relative px-4 py-4 text-white md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Logo and Social Media */}
            <div className="flex flex-col items-start">
              <div className="p-4 mb-8 bg-transparent rounded-b-lg">
              <Image src="/Rectangle8.png" alt="logo background" width={220} height={100} className="absolute -top-1 left-10" />
                <Image src="/logo.png" alt="FICS Logo" width={120} height={60}  className="absolute z-10 top-1 left-23"/>
              </div>

              <h3 className="mb-6 text-xl font-semibold">Connect With Us</h3>
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
              <h3 className="mb-6 text-xl font-semibold underline underline-offset-4 ">Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="flex items-center transition-colors hover:text-gray-200">
                    <Home size={16} className="mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center transition-colors hover:text-gray-200">
                    <Info size={16} className="mr-2" />
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center transition-colors hover:text-gray-200">
                    <Phone size={16} className="mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-xl font-semibold underline underline-offset-4 ">Have a Question? </h3>
              <div className="space-y-4">
                <p className="transition-colors hover:text-gray-200">
                  <Link href="https://facebook.com/NUSTFICS">facebook.com/NUSTFICS</Link>
                </p>
                <p className="transition-colors hover:text-gray-200">
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
      <div className="px-4 py-4 text-white bg-transparent md:px-8">
        <div className="container mx-auto text-center">
          <p>Copyright © 2015-2024 NUST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
