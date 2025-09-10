"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Event() {
  return (
    <div className="relative flex flex-col w-full px-5 font-sans bg-white">
      {/* Event Heading Section */}
      <div className="relative flex items-center justify-between w-full px-6 ">
        {/* Centered Event Text */}
        <div className="flex justify-center flex-1">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-center text-gray-800 md:text-4xl lg:text-5xl">
              Events
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1a9a9a]" />
            </h2>
          </div>
        </div>

        {/* Right-Side Image */}
        <div className="w-12 h-12 mt-20 rotate-180 md:w-16 md:h-16">
          <Image
            src="/fics.png"
            alt="FICS Logo"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>

      {/* Event Cards Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Upcoming Events Card */}
        <div className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg group hover:shadow-xl">
          <div className="relative w-full h-64">
            <Image
              src="/upcoming/launchofjuniorfics.png"
              alt="Upcoming Events"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-3 text-2xl font-bold">Upcoming Events</h3>
            <p className="mb-4 text-sm opacity-90">
              Discover exciting upcoming FICS events and opportunities to showcase your innovations.
            </p>
            <Link href="/events/upcoming">
              <Button 
                variant="secondary" 
                className="w-full text-gray-800 transition-colors duration-300 bg-white hover:bg-gray-100"
              >
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>

        {/* National Events Card */}
        <div className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg group hover:shadow-xl">
          <div className="relative w-full h-64">
            <Image
              src="/national/grandfinale.jpg"
              alt="National Events"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-3 text-2xl font-bold">National Events</h3>
            <p className="mb-4 text-sm opacity-90">
              Explore FICS national events and competitions held across Pakistan.
            </p>
            <Link href="/events/national">
              <Button 
                variant="secondary" 
                className="w-full text-gray-800 transition-colors duration-300 bg-white hover:bg-gray-100"
              >
                View National Events
              </Button>
            </Link>
          </div>
        </div>

        {/* International Events Card */}
        <div className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg group hover:shadow-xl">
          <div className="relative w-full h-64">
            <Image
              src="/ficsazerbaijan/azerbaijaan.jpg"
              alt="International Events"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-3 text-2xl font-bold">International Events</h3>
            <p className="mb-4 text-sm opacity-90">
              Join global FICS events and connect with international innovators and entrepreneurs.
            </p>
            <Link href="/events/international">
              <Button 
                variant="secondary" 
                className="w-full text-gray-800 transition-colors duration-300 bg-white hover:bg-gray-100"
              >
                View International Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
