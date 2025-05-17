"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import program from "@/public/ficsglance/program.png";
import sdg from "@/public/ficsglance/Sustainable Development.png";
import brainstroming from "@/public/ficsglance/Brainstorming.png";
import social from "@/public/ficsglance/Social.png";
import economy from "@/public/ficsglance/Economy.png";
import startup from "@/public/ficsglance/Startup.png";

export default function FicsAtGlance() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      icon: program,
      title: "Year-Round Innovation Journey",
      description: "FICS is more than a competition — it is a year-round innovation and entrepreneurship program",
    },
    {
      icon: sdg,
      title: "SDG-Focused Innovation",
      description: "FICS is rooted in the United Nations Sustainable Development Goals (SDGs)",
    },
    {
      icon: startup,
      title: "Cultivating Startup Culture",
      description: "FICS nurtures a vibrant startup ecosystem",
    },
    {
      icon: social,
      title: "Technology-Driven Social Entrepreneurshi",
      description: "FICS is a leading international platform for tech-based social entrepreneurship",
    },
    {
      icon: economy,
      title: "Strong Industry Engagement",
      description: "Industry involvement is a cornerstone of FICS",
    },
    {
      icon: brainstroming,
      title: "Supportive Innovation Ecosystem",
      description:
        "FICS connects students with a rich network of stakeholders — from academia and government to industry and global organizations",
    },
  ]

  return (
    <section className="px-4  bg-transparent ">
    <div className="relative mx-auto">
     <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Blue circle - positioned relative to viewport */}
        <motion.div 
          className="absolute w-20 h-20 bg-blue-500 rounded-full md:w-40 md:h-40"
          animate={{
            x: ["0%", "25%", "0%", "-5%", "0%"],
            y: ["0%", "5%", "0%", "-5%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: "10%",
            left: "10%",
          }}
        ></motion.div>
        
        {/* Purple circle - positioned relative to viewport */}
        <motion.div 
          className="absolute bg-purple-500 rounded-full w-40 h-40 md:w-60 md:h-60"
          animate={{
            x: ["0%", "10%", "0%", "-10%", "0%"],
            y: ["0%", "5%", "0%", "-5%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            bottom: "10%",
            right: "10%",
          }}
        ></motion.div>
        
        {/* Green circle - positioned relative to viewport */}
        <motion.div 
          className="absolute w-20 h-20 bg-green-500 rounded-full md:w-40 md:h-40"
          animate={{
            x: ["0%", "-5%", "0%", "5%", "0%"],
            y: ["0%", "10%", "0%", "-10%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: "50%",
            right: "25%",
            transform: "translateY(-50%)",
          }}
        ></motion.div>
      </div>
      <div className="flex items-center w-full mb-8 sm:mb-10">
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
            <div className="flex items-start justify-center w-full h-16 mt-5 overflow-hidden ">
              {/* Text sliding in from left */}
              <motion.h2
                className="flex items-start justify-center text-xl font-semibold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl"
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 0.77, 0.47, 0.97] // Custom easing for smooth stop
                }}
              >
                FICS at a Glance
                
              </motion.h2>
            </div>

            
          </div>
        </div>
    
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="overflow-hidden border border-gray-100 shadow-lg rounded-xl ">
              <div className="flex flex-col items-center p-6 text-center">
                {/* Icon Circle */}
                <div className="flex items-center justify-center mb-4 text-white bg-gradient-to-b from-[#3BB0A1] to-[#00547E] rounded-full w-25 h-25 ">
                  <Image
                    src={card.icon || "/placeholder.svg"}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="text-white w-15 h-15"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-2xl">{card.title}</h3>

                {/* Description */}
                <p className="text-sm sm:text-gray-080 text-md">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
