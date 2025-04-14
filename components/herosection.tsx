"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Handle cases where video might not load properly
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/video/fics-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

      {/* Content container for better accessibility */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* You can add your hero content here */}
      </div>

      {/* Registration notification - improved positioning and responsiveness */}
      <div className="absolute bottom-0 right-1  sm:right-4 z-20 w-full max-w-xs sm:max-w-sm px-4 sm:px-0">
        <div className="bg-[#3498db] p-4 text-white shadow-lg">
          <p className="mb-3 font-medium text-sm sm:text-base">
            FICS 2025 Registrations are open now!
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center">
              <div className="flex flex-col gap-1">
                <div className="h-0.5 w-8 bg-white"></div>
                <div className="h-0.5 w-8 bg-white ml-4"></div>
              </div>
            </div>
            <Button
              className="bg-[#29b6f6] hover:bg-[#0288d1] text-white border-none transition-colors duration-300"
              onClick={() => alert("Registered!")}
              aria-label="Register for FICS 2025"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}