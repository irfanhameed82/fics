"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredYear, setHoveredYear] = useState<string | null>(null)


  // Hardcoded timeline data
  const timelineData = {
    events: [
      {
        year: "2013",
        description: "Established Pakistan's first innovative center, NUST",
        position: "top",
      },
      {
        year: "2012",
        description: "FICS project approved by ICONS Board of Governors.",
        position: "bottom",
      },
      {
        year: "2016",
        description: "Deloitte's feasibility study confirmed FICS's potential.",
        position: "top",
      },
      {
        year: "2019",
        description: "Approved as Pakistan's first science park under Public Private Partnership (P3A).",
        position: "bottom",
      },
      {
        year: "2020",
        description: "Declared Pakistan's first Tech hi-tech and competitive tech solution.",
        position: "top",
      },
      {
        year: "2024",
        description: "Inauguration of Center for Emerging Technologies (CEMTECH) with master plan for 5-6 high-rise towers to be completed.",
        position: "bottom",
      },
    ],
  }

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="relative w-full py-12">
      {/* Title Section with Animation */}
      <div className="container flex items-center justify-center px-4 mx-auto mb-12">
        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-wider md:text-5xl outlined-text"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            GENESIS OF
          </motion.h2>
          <motion.h2
            className="ml-2 text-4xl font-bold tracking-widest text-blue-500 md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            FICS
          </motion.h2>
        </motion.div>
      </div>

      {/* Desktop Timeline (Horizontal) */}
      {!isMobile && (
        <div className="container hidden px-4 mx-auto md:block">
          <div className="relative">
            {/* Top Descriptions */}
            <div className="flex justify-between mb-8">
              {timelineData.events.map((event, index) => (
                <div key={`top-${index}`} className="w-full px-2 text-center">
                  {event.position === "top" && (
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className={`max-w-[200px] mx-auto transition-colors duration-300 ${
                        hoveredYear === event.year ? 'text-blue-500 ' : 'text-gray-700'
                      }`}
                    >
                      {event.description}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline with Years */}
            <div className="relative flex items-center justify-between">
              {/* Main Timeline Line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gray-300"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              ></motion.div>

              {/* Years and Connecting Lines */}
              {timelineData.events.map((event, index) => (
                <div key={`year-${index}`} className="relative z-10 flex flex-col items-center">
                  {/* Year Circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredYear(event.year)}
                    onHoverEnd={() => setHoveredYear(null)}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center justify-center w-16 h-16 text-lg font-bold rounded-full shadow-md transition-colors duration-300 ${
                      hoveredYear === event.year 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-black text-white'
                    }`}
                  >
                    {event.year}
                  </motion.div>

                  {/* Connecting Dotted Line to Next Year (except last item) */}
                  {index < timelineData.events.length - 1 && (
                    <motion.div
                      className="absolute h-px border-t border-dotted border-gray-400 top-1/2 left-[calc(50%+32px)] transform -translate-y-1/2"
                      style={{ width: "calc(100% - 64px)" }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    ></motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Descriptions */}
            <div className="flex justify-between mt-8">
              {timelineData.events.map((event, index) => (
                <div key={`bottom-${index}`} className="w-full px-2 text-center">
                  {event.position === "bottom" && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className={`max-w-[200px] mx-auto transition-colors duration-300 ${
                        hoveredYear === event.year ? 'text-blue-500 ' : 'text-gray-700'
                      }`}
                    >
                      {event.description}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Timeline (Vertical with centered years and alternating content) */}
      {isMobile && (
        <div className="container px-4 mx-auto md:hidden">
          <div className="relative flex flex-col items-center">
            {/* Vertical Timeline Line */}
            <motion.div
              className="absolute top-0 bottom-0 w-0.5 bg-gray-300 border-dashed border-l border-gray-300"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ height: "calc(100% - 32px)" }}
            ></motion.div>

            {timelineData.events.map((event, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="relative flex items-center w-full mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Year Circle (Centered) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredYear(event.year)}
                  onHoverEnd={() => setHoveredYear(null)}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`absolute z-10 flex items-center justify-center w-16 h-16 text-lg font-bold transform -translate-x-1/2 rounded-full shadow-md left-1/2 transition-colors duration-300 ${
                    hoveredYear === event.year 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-black text-white'
                  }`}
                >
                  {event.year}
                </motion.div>

                {/* Content - Alternating Left/Right */}
                <div className={`w-full flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <motion.div
                    className={cn(
                      "w-[calc(50%-32px)] p-4 bg-white rounded-lg shadow-sm transition-colors duration-300",
                      index % 2 === 0 ? "mr-[calc(50%+32px)]" : "ml-[calc(50%+32px)]",
                      hoveredYear === event.year ? 'border-blue-500 border-2' : ''
                    )}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <p className={`text-sm transition-colors duration-300 ${
                      hoveredYear === event.year ? 'text-blue-500 ' : 'text-gray-700'
                    }`}>
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}