"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Partner {
  alt: string
  logo: string
}

const partners = [
  { alt: "mindworks", logo: "/partner/mindworks.png" },
  { alt: "national instruments", logo: "/partner/nationalinstruments.png" },
  { alt: "nustalumni", logo: "/partner/nustalumni.png" },
  { alt: "oracle", logo: "/partner/oracle.png" },
  { alt: "rastgar", logo: "/partner/rastgar.png" },
  { alt: "sdpi", logo: "/partner/sdpi.png" }
]

export default function Partners() {
  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="flex flex-col items-center justify-center w-full py-20 bg-white">
      {/* Header Section */}
      <div className="relative flex items-center justify-center w-full max-w-6xl mb-16">
        {/* Logo */}
        <motion.div
          className="absolute top-0 w-12 h-12 -left-15 md:w-16 md:h-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image src="/fics.png" alt="FICS Logo" width={64} height={64} className="object-cover" />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-xl font-semibold text-gray-800 md:text-3xl lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our Partners
          <motion.span
            className="absolute -bottom-2 left-1/2 w-16 h-1 bg-[#248ABD] -translate-x-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        </motion.h2>
      </div>

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden">
        <InfiniteLoopSlider duplicatedPartners={duplicatedPartners} />
      </div>
    </div>
  )
}

interface InfiniteLoopSliderProps {
  duplicatedPartners: Partner[]
}

function InfiniteLoopSlider({ duplicatedPartners }: InfiniteLoopSliderProps) {
  const [width, setWidth] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Calculate the width of the slider container on mount and window resize
  useEffect(() => {
    const calculateWidth = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth / 2
        setWidth(sliderWidth)
      }
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [])

  // Animation duration based on the number of partners (slower with more partners)
  const animationDuration = 25

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="flex items-center"
        animate={{
          x: [-width, 0],
        }}
        transition={{
          x: {
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* First set of partners */}
        <div className="flex items-center gap-12 px-4 py-8 mt-5">
          {partners.map((partner, index) => (
            <div key={`partner-1-${index}`} className="flex items-center justify-center h-20 min-w-[150px]">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.alt}
                width={120}
                height={120}
                className="object-contain w-auto h-36"
              />
            </div>
          ))}
        </div>

        {/* Duplicated set for seamless looping */}
        <div className="flex items-center gap-12 px-4 py-8 mt-5">
          {partners.map((partner, index) => (
            <div key={`partner-2-${index}`} className="flex items-center justify-center h-20 min-w-[150px]">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain w-auto h-36"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
