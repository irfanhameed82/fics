"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const VIDEO_URL = "https://res.cloudinary.com/dxh8rsy7p/video/upload/f_auto,q_auto/v1744663859/ltjf9v2gpz7xkgsyypdj.mp4"

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative w-full bg-gray-600 h-80 sm:h-screen">
      {/* Optimized Cloudinary Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-fill`}
          onLoadedData={() => setIsVideoLoaded(true)}
          // Cloudinary optimization parameters
          src={`${VIDEO_URL}?fm=mp4&q=70`} // Further optimize with format and quality
        >
          Your browser does not support the video tag.
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 animate-pulse"></div>
        )}
      </div>

      

      {/* Optimized Registration Notification */}
      <div className="absolute w-full max-w-xs px-4 z-1000 -bottom-10 right-1 sm:right-4 sm:max-w-sm sm:px-0">
        <div className="bg-[#3498db]/90 hover:bg-[#3498db] p-4 text-white shadow-lg transition-all duration-300 backdrop-blur-sm">
          <p className="mb-3 text-sm font-medium sm:text-base">
            FICS 2025 Registrations are open now!
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-1">
            <div className="relative flex items-center ">
              <span className="w-28 sm:w-44 h-0.5 bg-white "></span>
              <div className="absolute right-0 w-4 h-4 border-t-2 border-l-2 border-white rotate-135"></div>
            </div>
            </div>
            <Button
              className="bg-[#29b6f6] hover:bg-[#0288d1] text-white border-none transition-colors rounded-non outline-none duration-300"
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
