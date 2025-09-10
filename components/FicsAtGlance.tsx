"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import program from "@/public/ficsglance/program.png"
import sdg from "@/public/ficsglance/Sustainable Development.png"
import brainstroming from "@/public/ficsglance/Brainstorming.png"
import social from "@/public/ficsglance/Social.png"
import economy from "@/public/ficsglance/Economy.png"
import startup from "@/public/ficsglance/Startup.png"

export default function FicsAtGlance() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
 const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

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
      title: "Technology-Driven Social Entrepreneurship",
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
    <section className="px-4 bg-transparent">
      <div className="relative mx-auto">
        {/* Background Circles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <motion.div 
            className="absolute w-20 h-20 bg-blue-500 rounded-full md:w-40 md:h-40"
            animate={{
              x: ["0%", "25%", "0%", "-5%", "0%"],
              y: ["0%", "25%", "0%", "-45%", "0%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ top: "10%", left: "10%" }}
          />
          
          <motion.div 
            className="absolute bg-purple-500 rounded-full w-40 h-40 md:w-60 md:h-60"
            animate={{
              x: ["0%", "10%", "0%", "-10%", "0%"],
              y: ["0%", "35%", "0%", "-15%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ bottom: "10%", right: "10%" }}
          />

          <motion.div 
            className="absolute bg-orange-500 rounded-full w-25 h-25 md:w-30 md:h-30"
            animate={{
              x: ["0%", "10%", "0%", "-10%", "0%"],
              y: ["0%", "35%", "0%", "-15%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ bottom: "30%", right: "60%" }}
          />

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
          />
        </div>

        {/* Main Content */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* Header Section */}
          <div className="flex items-center  mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 md:w-16 md:h-16"
            >
              <Image
                src="/fics.png"
                alt="FICS Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </motion.div>

            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
              }}
              className="text-xl px-10 flex  font-semibold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl"
            >
              FICS at a Glance
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden bg-white border border-gray-100 shadow-md rounded-xl"
              >
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-gradient-to-b from-[#3BB0A1] to-[#00547E] rounded-full">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="text-white"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}