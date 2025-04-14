"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="FICS Logo" width={100} height={50} />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <div className="relative group">
            <Link href="/about" className="text-gray-600 hover:text-gray-800 flex items-center">
              About <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="/competition" className="text-gray-600 hover:text-gray-800 flex items-center">
              Competition <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="/best-projects" className="text-gray-600 hover:text-gray-800 flex items-center">
              Best Projects <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="/fics-2023" className="text-gray-600 hover:text-gray-800 flex items-center">
              FICS 2023 <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-800 flex items-center">
              Contact Us <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 bg-white">
          <Link href="/" className="block py-2 text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/competition" className="block py-2 text-gray-600 hover:text-gray-800">
            Competition
          </Link>
          <Link href="/best-projects" className="block py-2 text-gray-600 hover:text-gray-800">
            Best Projects
          </Link>
          <Link href="/fics-2023" className="block py-2 text-gray-600 hover:text-gray-800">
            FICS 2023
          </Link>
          <Link href="/contact-us" className="block py-2 text-gray-600 hover:text-gray-800">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
