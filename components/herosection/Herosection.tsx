"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Calendar, Volume2, VolumeX, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [showImageModal, setShowImageModal] = useState(false)

  // Event images mapping (high-resolution versions for the modal)
  const eventImages = [
    "/banner/turkeybanner.jpg", // Turkey
    "/banner/thailandbanner.jpg", // Thailand
    "/banner/azerbaijanbanner.jpg", // Azerbaijan
  ]

  // Event titles
  const eventTitles = ["FICS Turkey Event", "FICS Thailand Event", "FICS Azerbaijan Event"]

  // Handle video playback when component mounts
  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      // Preload video metadata for faster loading
      videoElement.preload = "metadata"

      videoElement.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })

      // Try to play the video muted by default for better autoplay compatibility
      videoElement.muted = true
      const playPromise = videoElement.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing video:", error)
        })
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", () => {
          setIsVideoLoaded(true)
        })
      }
    }
  }, [])

  // Toggle mute function
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  // Handle event card click
  const handleEventClick = (index: number) => {
    setSelectedEvent(index)
    setShowImageModal(true)
  }

  return (
    <>
      <section className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#47a196] to-[#00547E]">
    
        {/* Main Content - Two Column Layout */}
        <div className="relative z-10 flex w-full h-full ">
          <div className="grid w-full grid-cols-1 max-w-7xl lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-center py-4 sm:py-16 md:py-24">
              <div className="max-w-lg text-center lg:text-left">
                <h1 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
                  Transforming Ideas Into
                  <span className="block mt-1 text-white">Impactful Solutions</span>
                </h1>

                <p className="mb-8 text-sm leading-relaxed text-white md:text-md">
                  FINDING INNOVATIVE & CREATIVE SOLUTIONS(FICS) is a global platform empowering students to solve real-world problems through creativity,
                  technology, and collaboration. Join the movement to create meaningful change.
                </p>
              </div>

              {/* Event Cards */}
              <div className="grid w-full max-w-lg grid-cols-3 gap-4">
                <EventCard
                  title="FICS Turkey"
                  imagePath="/banner/turkeybanner.jpg"
                  onClick={() => handleEventClick(0)}
                />
                <EventCard
                  title="FICS Thailand"
                  imagePath="/banner/thailandbanner.jpg"
                  onClick={() => handleEventClick(1)}
                />
                <EventCard
                  title="FICS Azerbaijan"
                  imagePath="/banner/azerbaijanbanner.jpg"
                  onClick={() => handleEventClick(2)}
                />
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="flex px-2 py-4 sm:py-4 md:py-12">
              <div className="relative w-full max-w-2xl overflow-hidden rounded-lg aspect-video">
                {/* {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0d3b4f]">
                    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
                  </div>
                )} */}
                <video
                  ref={videoRef}
                  className="object-fill w-full h-full"
                  src="https://res.cloudinary.com/dxh8rsy7p/video/upload/v1746812854/FICS_highlight_2024_ep48hr.mp4"
                  playsInline
                  loop
                    muted={isMuted}
                  autoPlay
                  poster="/placeholder.svg?height=720&width=1280"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0d3b4f]/20 to-transparent rounded-lg"></div>

                Volume control button
                <button
                  onClick={toggleMute}
                  className="absolute z-20 p-2 transition-colors rounded-full bg-black/30 backdrop-blur-sm bottom-4 right-4 hover:bg-black/50"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#7eeee2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#7eeee2]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Image Modal */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black overflow-hidden rounded-lg">
          <DialogClose className="absolute z-10 p-2 rounded-full bg-black/50 top-2 right-2 hover:bg-black/70">
            <X className="w-5 h-5 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="relative w-full">
            {selectedEvent !== null && (
              <div className="relative aspect-[16/9]">
                <Image
                  src={eventImages[selectedEvent] || "/placeholder.svg"}
                  alt={eventTitles[selectedEvent]}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 flex p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">{eventTitles[selectedEvent]}</h3>
                  <Button >
                    Register
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Event Card Component
function EventCard({
  title,
  imagePath,
  onClick,
}: {
  title: string
  imagePath: string
  onClick: () => void
}) {
  return (
    <div
      className="relative overflow-hidden transition-all duration-300 rounded-lg cursor-pointer group hover:scale-105"
      onClick={onClick}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
      <Image
        src={imagePath || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="object-cover w-full h-32"
      />
      <p className="absolute left-0 right-0 z-20 text-sm font-medium text-center text-white bottom-2">{title}</p>

      {/* Magnify indicator overlay */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
    </div>
  )
}
