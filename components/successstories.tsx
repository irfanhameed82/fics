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
    <section className="mb-5 overflow-hidden bg-white border border-gray-200 shadow-sm ">
      <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-3xl font-semibold text-black md:text-4xl">Success Stories</h1>
          <h2 className="mb-6 text-xl text-gray-900">Finding Innovative & Creative Solutions</h2>

          <div className="space-y-4 text-gray-800">
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

         
        </div>

        {/* Right Video */}
        <div className="relative flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg aspect-video">
          {isMounted && (
            <>
              <video
                ref={videoRef}
                className="object-cover w-full h-full"
                autoPlay={false}
                controls={true}
                controlsList="nodownload"
              >
                <source  src="https://res.cloudinary.com/dxh8rsy7p/video/upload/v1746813977/FICS_NUST_Islamabad_success_full_stories_zni8tp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom play/pause button */}
              {/* <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center transition-colors bg-black/30 hover:bg-black/40"
              >
                <div className="p-4 rounded-full shadow-lg bg-white/90">
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-[#2980b9]" />
                  ) : (
                    <Play className="h-8 w-8 text-[#2980b9] ml-1" />
                  )}
                </div>
              </button> */}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
