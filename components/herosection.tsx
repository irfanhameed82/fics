"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const VIDEO_URL = "https://res.cloudinary.com/dxh8rsy7p/video/upload/f_auto,q_auto/v1744663859/ltjf9v2gpz7xkgsyypdj.mp4"

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Optimized Cloudinary Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
          // Cloudinary optimization parameters
          src={`${VIDEO_URL}?fm=mp4&q=70`} // Further optimize with format and quality
        >
          Your browser does not support the video tag.
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        )}
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Hero content can go here */}
      </div>

      {/* Optimized Registration Notification */}
      <div className="absolute bottom-0 right-1 sm:right-4 z-20 w-full max-w-xs sm:max-w-sm px-4 sm:px-0">
        <div className="bg-[#3498db]/90 hover:bg-[#3498db] p-4 text-white shadow-lg transition-all duration-300 backdrop-blur-sm">
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