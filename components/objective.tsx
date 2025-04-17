"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Code, Lightbulb, Users, Briefcase, Globe } from "lucide-react"

export function Objectives() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const objectives = [
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Technical Innovation",
      description:
        "Empowering individuals to leverage cutting-edge technology to solve real-world problems and drive societal advancement.",
    },
    {
      id: 2,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Solutions",
      description:
        "Fostering creative thinking to develop innovative applications and technology-based solutions for practical knowledge utilization.",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      title: "Commercialization Platform",
      description:
        "Providing a launchpad for transforming promising ideas and technologies into viable commercial products and services.",
    },
    {
      id: 4,
      icon: <Briefcase className="w-6 h-6" />,
      title: "Industry Collaboration",
      description:
        "Building bridges between industry experts and participants through mentorship programs and long-term partnerships.",
    },
    {
      id: 5,
      icon: <Globe className="w-6 h-6" />,
      title: "Entrepreneurial Culture",
      description:
        "Cultivating an entrepreneurial mindset that drives innovation and creates economic and social value at local and global scales.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-transparent border-4 rounded-full border-cyan-500/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: 100 + Math.random() * 300,
              height: 100 + Math.random() * 300,
            }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Our Objectives
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700">
            We are committed to fostering innovation and entrepreneurship through a comprehensive approach that combines
            technical expertise, creative thinking, and industry collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid max-w-4xl gap-6 mx-auto"
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.id}
              variants={itemVariants}
              className={`bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 border border-slate-200 hover:border-cyan-500/50 ${
                activeIndex === index ? "shadow-lg shadow-cyan-500/20" : ""
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex items-center p-5 cursor-pointer">
                <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                  {objective.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-800">{objective.title}</h3>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-cyan-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-slate-700"
                >
                  <p>{objective.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
