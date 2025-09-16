"use client";
import Link from "next/link";
import { AlignJustify, ChevronDown, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
interface NavLink {
  href: string;
  label: string;
}
interface NavItem {
  label: string;
  key: string;
  href?: string;
  links?: NavLink[];
}
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    {
      label: "About",
      key: "about",
      links: [
        { href: "/about", label: "About FICS" },
        { href: "/about/testimonials", label: "Testimonials" },
      ],
    },
    {
      label: "Competition",
      key: "competition",
      links: [
        { href: "/stages", label: "Stages" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    {
      label: "Best Projects",
      key: "best-projects",
      links: [
        { href: "/bestproject-2024", label: "Best Projects 2024" },
        { href: "/bestproject-2023", label: "Best Projects 2023" },
        { href: "/bestproject-2022", label: "Best Projects 2022" },
        { href: "/bestproject-2021", label: "Best Projects 2021" },
        { href: "/bestproject-2020", label: "Best Projects 2020" },
        { href: "/bestproject-2019", label: "Best Projects 2019" },
        { href: "/bestproject-2018", label: "Best Projects 2018" },
        { href: "/bestproject-2017", label: "Best Projects 2017" },
        { href: "/bestproject-2016", label: "Best Projects 2016" },
        { href: "/bestproject-2015", label: "Best Projects 2015" },
      ],
    },
    {
      label: "FICS 2025",
      key: "fics-2025",
      links: [
        { href: "/idea", label: "Submit Ideas" },
        { href: "/ideasubmitted", label: "Ideas Submitted" },
      ],
    },
    {
      label: "International",
      key: "international",
      href: "/international"
    }
  ];

  const contactlist:NavItem[] = [
    {
      label: "Contact Us",
      key: "contact-us",
      href: "/contact-organizers"
    }
  ];

  return (
    <nav className="z-50 bg-white shadow-sm"  ref={navRef}>
      <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="FICS Logo" 
                width={100} 
                height={50} 
                className="w-auto h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link
              href="/"
              className="px-3 py-2 font-medium text-gray-900 transition-colors hover:text-blue-600 text-md"
            >
              Home
            </Link>

            {/* Group hover dropdowns */}
            <div className="hidden space-x-8 md:flex">
              {[...navItems, ...contactlist].map((item) => (
                <div key={item.key} className="relative group">
                  {item.href && !item.links ? (
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 font-medium text-gray-900 transition-colors hover:text-blue-600 text-md"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center px-3 py-2 font-medium text-gray-900 transition-colors hover:text-blue-600 text-md"
                        onClick={() => toggleDropdown(`${item.key}-desktop`)}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                      </button>
                      
                      <div className={`absolute z-10 hidden group-hover:block w-56 bg-white shadow-lg rounded-md overflow-hidden 
        ${item.key === "contact-us" ? "right-0" : "left-0"}`}>
                        <div className="py-1">
                          {item.links?.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-900 rounded-md hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <AlignJustify className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="h-screen overflow-y-auto bg-white border-t border-gray-200 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
             className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {[...navItems, ...contactlist].map((item) => (
              <div key={item.key} className="py-2">
                {item.href && !item.links ? (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(`${item.key}-mobile`)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:text-blue-600 hover:bg-gray-50"
                    >
                      <span>{item.label}</span>
                      {activeDropdown === `${item.key}-mobile` ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                    
                    {activeDropdown === `${item.key}-mobile` && (
                      <div className="pl-4 mt-2 space-y-1">
                        {item?.links?.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  function toggleDropdown(key: string) {
    setActiveDropdown(activeDropdown === key ? null : key);
  }
}