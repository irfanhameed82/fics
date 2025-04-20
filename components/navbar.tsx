"use client";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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

  const navItems = [
    {
      label: "About",
      key: "about",
      links: [
        { href: "/about", label: "About FICS" },
        { href: "/about/testimonials", label: "Testimonials" },
        { href: "/about/vision", label: "Vision 2025" },
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
      ],
    },
    {
      label: "FICS 2025",
      key: "fics-2025",
      links: [
        { href: "/ideas-submit", label: "Ideas Submit" },
        { href: "/projects-shortlisted", label: "Projects Shortlisted" },
      ],
    },
    ];
    const contactlist = [
      {
        label: "Contact Us",
        key: "contact-us",
        links: [
          { href: "/contact-organizers", label: "Contact the Organizers" },
          { href: "/global-contacts", label: "Global Points of Contact" },
          { href: "/nust-contacts", label: "NUST Points of Contact" },
        ],
      }
    ];

  return (
    <nav className="bg-white shadow-md" ref={navRef}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link
          href="/"
          className="flex items-center transition-opacity duration-200 cursor-pointer hover:opacity-90"
        >
          <Image src="/logo.png" alt="FICS Logo" priority width={100} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-6 md:flex">
          <Link
            href="/"
            className="text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
          >
            Home
          </Link>

          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              ref={(el) => {
                dropdownRefs.current[`${item.key}-desktop`] = el;
              }}
            >
              <button
                onClick={() => toggleDropdown(`${item.key}-desktop`)}
                className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === `${item.key}-desktop` ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${
                  activeDropdown === `${item.key}-desktop`
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 pointer-events-none"
                }`}
              >
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
             {contactlist.map((item) => (
            <div
              key={item.key}
              className="relative"
              ref={(el) => {
                dropdownRefs.current[`${item.key}-desktop`] = el;
              }}
            >
              <button
                onClick={() => toggleDropdown(`${item.key}-desktop`)}
                className="flex items-center py-4 text-gray-600 transition-colors duration-200 cursor-pointer hover:text-gray-800"
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === `${item.key}-desktop` ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${
                  activeDropdown === `${item.key}-desktop`
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 pointer-events-none"
                }`}
              >
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

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
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="px-4 py-2 pb-4 bg-white md:hidden">
          <Link
            href="/"
            className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {navItems.map((item) => (
            <div
              key={item.key}
              className="py-1"
              ref={(el) => {
                dropdownRefs.current[`${item.key}-mobile`] = el;
              }}
            >
              <button
                onClick={() => toggleDropdown(`${item.key}-mobile`)}
                className="flex items-center justify-between w-full px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
              >
                <span>{item.label}</span>
                {activeDropdown === `${item.key}-mobile` ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === `${item.key}-mobile` && (
                <div className="pl-4 mt-1 border-l-2 border-gray-200">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-2 py-2 text-gray-600 transition-colors duration-200 rounded cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
