"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Target, Lightbulb, Network, Building2, Sparkles } from "lucide-react"
import Image from "next/image"

export default function FicsAtGlance() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      icon: Calendar,
      title: "Year Round Program",
      description: "FICS is not just a competition but a year round program",
    },
    {
      icon: Target,
      title: "SDGs",
      description: "Sustainable Development Goals (SDGs) are the key focus of FICS projects.",
    },
    {
      icon: Lightbulb,
      title: "Startup Culture",
      description: "FICS promotes and supports a startup culture and enables projects deployment.",
    },
    {
      icon: Network,
      title: "Social Entrepreneurship",
      description: "FICS is a technology based social entrepreneurship forum for students",
    },
    {
      icon: Building2,
      title: "Industry Involvement",
      description: "A major portion of FICS's success is attributed to the comprehensive industry involvement.",
    },
    {
      icon: Sparkles,
      title: "Supportive Ecosystem",
      description:
        "FICS provides a supportive eco-system for students to engage them with industry and churn out brilliant socially viable business ideas.",
    },
  ]

  return (
    <section className="px-4 py-8 bg-transparent">
      <div className="relative mx-auto">
      <div className="flex items-center w-full gap-4 mb-24">
          {/* Logo with appearing animation */}
          <motion.div
            className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/fics.png"
              alt="FICS Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col items-start justify-center w-full h-full pt-3">
            {/* Text container with overflow hidden */}
            <div className="relative h-16 mx-20 overflow-hidden ">
              {/* Text sliding in from left */}
              <motion.h2
                className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl"
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 0.77, 0.47, 0.97] // Custom easing for smooth stop
                }}
              >
                Finding Innovative & Creative Solution
                
                <motion.span
                  className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2a9d8f]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                />
              </motion.h2>
            </div>

            {/* "At a Glance" appearing after */}
            <motion.h2
              className="mx-20 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.6
              }}
            >
              At a Glance
            </motion.h2>
          </div>
        </div>
         

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`p-8 h-full flex flex-col items-center text-center transition-all duration-300 ${
                  hoveredCard === index ? "bg-[#2a9d8f] " : "bg-[#3a7ca5]"
                }`}
              >
                <div className="flex items-center justify-center w-20 h-20 mb-6 bg-white rounded-full shadow-md">
                  <card.icon className={`w-10 h-10 ${hoveredCard === index ? "text-[#2a9d8f]" : "text-[#3a7ca5]"}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                <p className="leading-relaxed text-white/90">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
