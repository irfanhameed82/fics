"use client"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({})
  const navRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white shadow-md" ref={navRef}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center transition-opacity duration-200 cursor-pointer hover:opacity-90">
          <Image src="/logo.png" alt="FICS Logo" priority width={100} height={50} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-6 md:flex">
          <Link href="/" className="text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800">
            Home
          </Link>
          
          {/* About Dropdown */}
          <div 
            className="relative"
            ref={el => dropdownRefs.current['about-desktop'] = el}
          >
            <button
              onClick={() => toggleDropdown("about-desktop")}
              className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
            >
              About <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'about-desktop' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${activeDropdown === 'about-desktop' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/about" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                About FICS
              </Link>
              <Link href="/testimonials" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Testimonials
              </Link>
              <Link href="/vision-2025" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Vision 2025
              </Link>
            </div>
          </div>

          {/* Competition Dropdown */}
          <div 
            className="relative"
            ref={el => dropdownRefs.current['competition-desktop'] = el}
          >
            <button
              onClick={() => toggleDropdown("competition-desktop")}
              className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
            >
              Competition <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'competition-desktop' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${activeDropdown === 'competition-desktop' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/stages" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Stages
              </Link>
              <Link href="/faq" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                FAQ
              </Link>
            </div>
          </div>

          {/* Best Projects Dropdown */}
          <div 
            className="relative"
            ref={el => dropdownRefs.current['best-projects-desktop'] = el}
          >
            <button
              onClick={() => toggleDropdown("best-projects-desktop")}
              className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
            >
              Best Projects <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'best-projects-desktop' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${activeDropdown === 'best-projects-desktop' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/best-projects-2023" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Best Projects 2023
              </Link>
              <Link href="/best-projects-2022" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Best Projects 2022
              </Link>
            </div>
          </div>

          {/* FICS 2025 Dropdown */}
          <div 
            className="relative"
            ref={el => dropdownRefs.current['fics-2025-desktop'] = el}
          >
            <button
              onClick={() => toggleDropdown("fics-2025-desktop")}
              className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
            >
              FICS 2025 <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'fics-2025-desktop' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${activeDropdown === 'fics-2025-desktop' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/ideas-submit" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Ideas Submit
              </Link>
              <Link href="/projects-shortlisted" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Projects Shortlisted
              </Link>
            </div>
          </div>

          {/* Contact Us Dropdown */}
          <div 
            className="relative"
            ref={el => dropdownRefs.current['contact-us-desktop'] = el}
          >
            <button
              onClick={() => toggleDropdown("contact-us-desktop")}
              className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
            >
              Contact Us <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'contact-us-desktop' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute right-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${activeDropdown === 'contact-us-desktop' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/contact-organizers" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Contact the Organizers
              </Link>
              <Link href="/global-contacts" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                Global Points of Contact
              </Link>
              <Link href="/nust-contacts" className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100">
                NUST Points of Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="flex items-center p-2 transition-colors duration-200 rounded-md cursor-pointer md:hidden hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
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
        <div className="px-4 py-2 pb-4 bg-white md:hidden">
          <Link 
            href="/" 
            className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {/* About dropdown for mobile */}
          <div className="py-1" ref={el => dropdownRefs.current['about-mobile'] = el}>
            <button
              onClick={() => toggleDropdown("about-mobile")}
              className="flex items-center justify-between w-full px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            >
              <span>About</span>
              {activeDropdown === "about-mobile" ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {activeDropdown === "about-mobile" && (
              <div className="pl-4 mt-1 border-l-2 border-gray-200">
                <Link 
                  href="/about" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  About FICS
                </Link>
                <Link 
                  href="/testimonials" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Testimonials
                </Link>
                <Link 
                  href="/vision-2025" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Vision 2025
                </Link>
              </div>
            )}
          </div>

          {/* Competition dropdown for mobile */}
          <div className="py-1" ref={el => dropdownRefs.current['competition-mobile'] = el}>
            <button
              onClick={() => toggleDropdown("competition-mobile")}
              className="flex items-center justify-between w-full px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            >
              <span>Competition</span>
              {activeDropdown === "competition-mobile" ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {activeDropdown === "competition-mobile" && (
              <div className="pl-4 mt-1 border-l-2 border-gray-200">
                <Link 
                  href="/stages" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Stages
                </Link>
                <Link 
                  href="/faq" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* Best Projects dropdown for mobile */}
          <div className="py-1" ref={el => dropdownRefs.current['best-projects-mobile'] = el}>
            <button
              onClick={() => toggleDropdown("best-projects-mobile")}
              className="flex items-center justify-between w-full px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            >
              <span>Best Projects</span>
              {activeDropdown === "best-projects-mobile" ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {activeDropdown === "best-projects-mobile" && (
              <div className="pl-4 mt-1 border-l-2 border-gray-200">
                <Link 
                  href="/best-projects-2023" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Best Projects 2023
                </Link>
                <Link 
                  href="/best-projects-2022" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Best Projects 2022
                </Link>
              </div>
            )}
          </div>

          {/* FICS 2025 dropdown for mobile */}
          <div className="py-1" ref={el => dropdownRefs.current['fics-2025-mobile'] = el}>
            <button
              onClick={() => toggleDropdown("fics-2025-mobile")}
              className="flex items-center justify-between w-full px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            >
              <span>FICS 2025</span>
              {activeDropdown === "fics-2025-mobile" ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {activeDropdown === "fics-2025-mobile" && (
              <div className="pl-4 mt-1 border-l-2 border-gray-200">
                <Link 
                  href="/ideas-submit" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Ideas Submit
                </Link>
                <Link 
                  href="/projects-shortlisted" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Projects Shortlisted
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us dropdown for mobile */}
          <div className="py-1" ref={el => dropdownRefs.current['contact-us-mobile'] = el}>
            <button
              onClick={() => toggleDropdown("contact-us-mobile")}
              className="flex items-center justify-between w-full px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            >
              <span>Contact Us</span>
              {activeDropdown === "contact-us-mobile" ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {activeDropdown === "contact-us-mobile" && (
              <div className="pl-4 mt-1 border-l-2 border-gray-200">
                <Link 
                  href="/contact-organizers" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Contact the Organizers
                </Link>
                <Link 
                  href="/global-contacts" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  Global Points of Contact
                </Link>
                <Link 
                  href="/nust-contacts" 
                  className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
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