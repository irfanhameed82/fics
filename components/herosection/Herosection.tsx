"use client"

import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { Calendar, Volume2, VolumeX, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface EventData {
  title: string
  imagePath: string
  modalImage: string
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Predefined event data
  const events: EventData[] = [
    {
      title: "FICS Turkiye",
      imagePath: "/banner/turkeybanner.jpg",
      modalImage: "/banner/turkeybanner.jpg"
    },
    {
      title: "FICS Thailand",
      imagePath: "/banner/thailandbanner.jpg",
      modalImage: "/banner/thailandbanner.jpg"
    },
    {
      title: "FICS Azerbaijan",
      imagePath: "/banner/azerbaijanbanner.jpg",
      modalImage: "/banner/azerbaijanbanner.jpg"
    }
  ]

  // Optimized video loading with IntersectionObserver
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = "https://res.cloudinary.com/dxh8rsy7p/video/upload/q_auto:low/v1746812854/FICS_highlight_2024_ep48hr.mp4"
            video.load()
            observer.unobserve(video)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(video)

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
      video.play().catch(e => console.error("Video play failed:", e))
    }

    video.addEventListener('canplay', handleCanPlay)
    video.muted = true
    video.preload = "none"

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      observer.unobserve(video)
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(prev => !prev)
    }
  }

  const openEventModal = (index: number) => {
    setSelectedEvent(index)
  }

  const closeEventModal = () => {
    setSelectedEvent(null)
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#47a196] to-[#00547E]">
      {/* Main Content */}
      <div className="relative flex w-full">
        <div className="grid w-full grid-cols-1 max-w-7xl lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center px-4 py-4 sm:py-16 md:py-24">
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-4xl">
                Transforming Ideas Into
                <span className="block mt-1 text-white">Impactful Solutions</span>
              </h1>

              <p className="mb-8 text-sm leading-relaxed text-white md:text-md">
                FINDING INNOVATIVE & CREATIVE SOLUTIONS (FICS) is a global platform empowering students to solve real-world problems through creativity,
                technology, and collaboration. Join the movement to create meaningful change.
              </p>
            </div>

            {/* Event Cards */}
            <div className="grid w-full max-w-lg grid-cols-3 gap-4">
              {events.map((event, index) => (
                <EventCard
                  key={event.title}
                  title={event.title}
                  imagePath={event.imagePath}
                  onClick={() => openEventModal(index)}
                />
              ))}
              <Button asChild className="col-span-3 mt-4 text-white bg-gradient-to-b from-[#3BB0A1] to-[#00547E] hover:from-[#3BB0A1]/90 hover:to-[#00547E]/90">
                <Link href="/#event">See All Events</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex px-4 py-4 sm:py-4 md:py-12">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-lg aspect-video">
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0d3b4f]">
                  <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
                </div>
              )}
              <video
                ref={videoRef}
                className="object-cover w-full h-full"
                playsInline
                loop
                muted={isMuted}
                autoPlay
                poster="/video-poster.jpg"
              >
                <source 
                  src="https://res.cloudinary.com/dxh8rsy7p/video/upload/q_auto:low/v1746812854/FICS_highlight_2024_ep48hr.mp4" 
                  type="video/mp4" 
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d3b4f]/20 to-transparent rounded-lg"></div>

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

      {/* Event Modal */}
      <Dialog open={selectedEvent !== null} onOpenChange={open => !open && closeEventModal()}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black overflow-hidden rounded-lg">
          <DialogClose className="absolute z-10 p-2 rounded-full bg-black/50 top-2 right-2 hover:bg-black/70">
            <X className="w-5 h-5 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {selectedEvent !== null && (
            <div className="relative aspect-[16/9]">
              <Image
                src={events[selectedEvent].modalImage}
                alt={events[selectedEvent].title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">{events[selectedEvent].title}</h3>
                <Button asChild>
                  <Link href="/idea">Register</Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

const EventCard = React.memo(function EventCard({
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
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
      <Image
        src={imagePath}
        alt={title}
        width={300}
        height={200}
        className="object-cover w-full h-32"
        priority={false}
        loading="lazy"
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
})