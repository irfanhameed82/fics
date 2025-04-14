"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Pause } from "lucide-react"

export default function SuccessStoriesSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }

    setIsPlaying(!isPlaying)
  }

  // Update isPlaying state when video plays or pauses
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    videoElement.addEventListener("play", handlePlay)
    videoElement.addEventListener("pause", handlePause)
    videoElement.addEventListener("ended", handleEnded)

    return () => {
      videoElement.removeEventListener("play", handlePlay)
      videoElement.removeEventListener("pause", handlePause)
      videoElement.removeEventListener("ended", handleEnded)
    }
  }, [isMounted])

  return (
    <section className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Success Stories</h1>
          <h2 className="text-xl text-gray-700 mb-6">Finding Innovative & Creative Solutions</h2>

          <div className="space-y-4 text-gray-600">
            <p>
              FICS promotes entrepreneurship and innovation by allowing participants to address the most pressing social
              and environmental issues at the core of society. More than an annual competition, FICS has proven to be a
              vast resource of much sought-after solutions.
            </p>

            <p>
              Our objective at FICS has always been to aid society through innovative & creative solutions by recruiting
              individuals with a significant drive to bring about change that would consequently have a positive impact
              on the society we live in today. The video here highlights some of the top success stories generating out
              of FICS over the years.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/consultation"
              className="inline-flex items-center bg-[#2980b9] hover:bg-[#3498db] text-white px-6 py-3 rounded-md transition-colors"
            >
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
          {isMounted && (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=400&width=600"
                controls={false}
              >
                <source src="https://res.cloudinary.com/dxh8rsy7p/video/upload/f_auto,q_auto/v1744663859/ltjf9v2gpz7xkgsyypdj.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom play/pause button */}
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-[#2980b9]" />
                  ) : (
                    <Play className="h-8 w-8 text-[#2980b9] ml-1" />
                  )}
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
