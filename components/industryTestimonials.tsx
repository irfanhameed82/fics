"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Muazzam Arsalan Bhatti",
    role: "Founder and CEO Afforez Technology",
    content:
      "Lorem ipsum dolor sit amet consectetur. Parturibus mauris nivis volutpat turm enim pede parturient. A fermentum mortes venenatis condimentum euismod pellentesque. Consectetur aliquot ac morbi pretium pellentesque. Condimentum aliquot ac morbi pretium augue.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO at TechVision Inc.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Parturibus mauris nivis volutpat turm enim pede parturient. A fermentum mortes venenatis condimentum euismod pellentesque. Consectetur aliquot ac morbi pretium pellentesque. Condimentum aliquot ac morbi pretium augue.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Muazzam Arsalan Bhatti",
    role: "Founder and CEO Afforez Technology",
    content:
      "Lorem ipsum dolor sit amet consectetur. Parturibus mauris nivis volutpat turm enim pede parturient. A fermentum mortes venenatis condimentum euismod pellentesque. Consectetur aliquot ac morbi pretium pellentesque. Condimentum aliquot ac morbi pretium augue.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Alex Chen",
    role: "Lead Developer at InnovateTech",
    content:
      "Lorem ipsum dolor sit amet consectetur. Parturibus mauris nivis volutpat turm enim pede parturient. A fermentum mortes venenatis condimentum euismod pellentesque. Consectetur aliquot ac morbi pretium pellentesque. Condimentum aliquot ac morbi pretium augue.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Product Manager at FutureSoft",
    content:
      "Lorem ipsum dolor sit amet consectetur. Parturibus mauris nivis volutpat turm enim pede parturient. A fermentum mortes venenatis condimentum euismod pellentesque. Consectetur aliquot ac morbi pretium pellentesque. Condimentum aliquot ac morbi pretium augue.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function IndustryTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCard, setShowCard] = useState([0, 1, 2])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  // Auto-play functionality with smooth transition
  useEffect(() => {
    window.innerWidth < 768 ? setShowCard([0]) : setShowCard([0, 1, 2])
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000) 
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, window.innerWidth])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Handle dot navigation
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Handle manual navigation
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  // Variants for slide animations with linear transition
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <div className="px-4 mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900">What they say in industry ?</h2>
      </motion.div>

      {/* Slider container */}
      <div className="relative overflow-hidden">
        <div className="relative w-full h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "linear", duration: 0.5 },
                opacity: { duration: 0.3 },
              }}
              className="absolute w-full"
            >
              <div className="grid gap-8 sm:cols-2 md:grid-cols-3">
                {/* Display 3 testimonials at once, starting from currentIndex */}
                {showCard.map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length
                  const testimonial = testimonials[index]
                  return (
                    <div key={`${testimonial.id}-${index}`} className="flex flex-col h-full">
                      <div className="flex flex-col h-full overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                        <div className="flex flex-col items-center justify-between flex-1 p-6">
                          <div className="flex flex-col items-center mb-6">
                            <Avatar className="w-24 h-24 mb-4 bg-gray-200">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback className="bg-gray-200">
                                <User className="w-12 h-12 text-blue-500" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-sm text-center text-gray-600 line-clamp-6">{testimonial.content}</div>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900">—{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="p-0 transition-colors focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${
                index === currentIndex % testimonials.length ? "bg-blue-500" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={false}
              animate={
                index === currentIndex % testimonials.length
                  ? { scale: 1.2, backgroundColor: "#3b82f6" }
                  : { scale: 1, backgroundColor: "#d1d5db" }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}