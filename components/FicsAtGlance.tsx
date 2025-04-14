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
    <section className=" py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="relative  mx-auto">
        <div className="flex  items-center gap-4 mb-24">
          <div className="absolute top-1 left-0 w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/fics.png"
              alt="FICS Logo"
              width={64}
              height={64}
              className="object-cover "
            />
          </div>
          <h2 className="text-3xl mx-20 mt-10 md:text-4xl lg:text-5xl font-bold text-gray-800 relative">
            FICS at a Glance
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2a9d8f]"></span>
          </h2>
        </div>

        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`p-8 h-full flex flex-col items-center text-center transition-all duration-300 ${
                  hoveredCard === index ? "bg-gradient-to-br from-[#2a9d8f] to-[#3a7ca5]" : "bg-[#3a7ca5]"
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-md">
                  <card.icon className={`w-10 h-10 ${hoveredCard === index ? "text-[#2a9d8f]" : "text-[#3a7ca5]"}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/90 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
