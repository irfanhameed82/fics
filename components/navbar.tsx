"use client"

import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="FICS Logo" priority width={100} height={50} />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <div className="relative group">
            <Link href="/about" className="text-gray-600 py-4 hover:text-gray-800 flex items-center">
              About <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {/* Dropdown menu list */}
            <div className="absolute left-0 hidden  w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block z-10">
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                About FICS
              </Link>
              <Link href="/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Testimonials
              </Link>
              <Link href="/vision-2025" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Vision 2025
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/competition" className="text-gray-600 py-4 hover:text-gray-800 flex items-center">
              Competition <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {/* Dropdown menu list */}
            <div className="absolute left-0 hidden  w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block z-10">
              <Link href="/stages" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Stages
              </Link>
              <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                FAQ
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/best-projects" className="text-gray-600 py-4 hover:text-gray-800 flex items-center">
              Best Projects <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {/* Dropdown menu list */}
            <div className="absolute left-0 hidden  w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block z-10">
              <Link href="/best-projects-2023" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Best Projects 2023
              </Link>
              <Link href="/best-projects-2022" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Best Projects 2022
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/fics-2025" className="text-gray-600 py-4 hover:text-gray-800 flex items-center">
              FICS 2025 <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {/* Dropdown menu list */}
            <div className="absolute left-0 hidden  w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block z-10">
              <Link href="/ideas-submit" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Ideas Submit
              </Link>
              <Link href="/projects-shortlisted" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Projects Shortlisted
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/contact-us" className="text-gray-600 py-4 hover:text-gray-800 flex items-center">
              Contact Us <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {/* Dropdown menu list */}
            <div className="absolute right-0 hidden  w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block z-10">
              <Link href="/contact-organizers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Contact the Organizers
              </Link>
              <Link href="/global-contacts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Global Points of Contact
              </Link>
              <Link href="/nust-contacts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                NUST Points of Contact
              </Link>
            </div>
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

          {/* About dropdown for mobile */}
          <div className="py-2">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-800"
            >
              About
              {activeDropdown === "about" ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {activeDropdown === "about" && (
              <div className="pl-4 mt-2 border-l-2 border-gray-200">
                <Link href="/about" className="block py-2 text-gray-600 hover:text-gray-800">
                  About FICS
                </Link>
                <Link href="/testimonials" className="block py-2 text-gray-600 hover:text-gray-800">
                  Testimonials
                </Link>
                <Link href="/vision-2025" className="block py-2 text-gray-600 hover:text-gray-800">
                  Vision 2025
                </Link>
              </div>
            )}
          </div>

          {/* Competition dropdown for mobile */}
          <div className="py-2">
            <button
              onClick={() => toggleDropdown("competition")}
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-800"
            >
              Competition
              {activeDropdown === "competition" ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {activeDropdown === "competition" && (
              <div className="pl-4 mt-2 border-l-2 border-gray-200">
                <Link href="/stages" className="block py-2 text-gray-600 hover:text-gray-800">
                  Stages
                </Link>
                <Link href="/faq" className="block py-2 text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* Best Projects dropdown for mobile */}
          <div className="py-2">
            <button
              onClick={() => toggleDropdown("best-projects")}
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-800"
            >
              Best Projects
              {activeDropdown === "best-projects" ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {activeDropdown === "best-projects" && (
              <div className="pl-4 mt-2 border-l-2 border-gray-200">
                <Link href="/best-projects-2023" className="block py-2 text-gray-600 hover:text-gray-800">
                  Best Projects 2023
                </Link>
                <Link href="/best-projects-2022" className="block py-2 text-gray-600 hover:text-gray-800">
                  Best Projects 2022
                </Link>
              </div>
            )}
          </div>

          {/* FICS 2025 dropdown for mobile */}
          <div className="py-2">
            <button
              onClick={() => toggleDropdown("fics-2025")}
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-800"
            >
              FICS 2025
              {activeDropdown === "fics-2025" ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {activeDropdown === "fics-2025" && (
              <div className="pl-4 mt-2 border-l-2 border-gray-200">
                <Link href="/ideas-submit" className="block py-2 text-gray-600 hover:text-gray-800">
                  Ideas Submit
                </Link>
                <Link href="/projects-shortlisted" className="block py-2 text-gray-600 hover:text-gray-800">
                  Projects Shortlisted
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us dropdown for mobile */}
          <div className="py-2">
            <button
              onClick={() => toggleDropdown("contact-us")}
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-800"
            >
              Contact Us
              {activeDropdown === "contact-us" ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {activeDropdown === "contact-us" && (
              <div className="pl-4 mt-2 border-l-2 border-gray-200">
                <Link href="/contact-organizers" className="block py-2 text-gray-600 hover:text-gray-800">
                  Contact the Organizers
                </Link>
                <Link href="/global-contacts" className="block py-2 text-gray-600 hover:text-gray-800">
                  Global Points of Contact
                </Link>
                <Link href="/nust-contacts" className="block py-2 text-gray-600 hover:text-gray-800">
                  NUST Points of Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
