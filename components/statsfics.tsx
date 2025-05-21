"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { BarChart3, Lightbulb, Globe, Target, Rocket, Building, Award } from "lucide-react"

interface Statistic {
  value: number
  suffix: string
  label: string
  icon: React.ReactNode
  color: string
}

const statistics: Statistic[] = [
  {
    value: 4000,
    suffix: "+",
    label: "Startup Ideas Submitted",
    icon: <Lightbulb size={24} />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Projects with Working Prototypes",
    icon: <Rocket size={24} />,
    color: "from-purple-500 to-pink-400",
  },
  {
    value: 10,
    suffix: "+",
    label: "National & International Partners",
    icon: <Building size={24} />,
    color: "from-amber-500 to-orange-400",
  },
  {
    value: 20,
    suffix: "",
    label: "Schools and Departments",
    icon: <Globe size={24} />,
    color: "from-emerald-500 to-teal-400",
  },
  {
    value: 12,
    suffix: "+",
    label: "Successful Iterations",
    icon: <BarChart3 size={24} />,
    color: "from-rose-500 to-red-400",
  },
  {
    value: 17,
    suffix: "",
    label: "SDGs Addressed",
    icon: <Target size={24} />,
    color: "from-indigo-500 to-blue-400",
  },
  {
    value: 12,
    suffix: "+",
    label: "Intellectual Properties",
    icon: <Award size={24} />,
    color: "from-green-500 to-emerald-400",
  },
]

export default function StatisticsFics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative pt-8 pb-2 font-sans overflow-hidden">
      {/* Background elements */}
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute w-40 h-40 bg-blue-500 rounded-full top-10 left-10"></div>
        <div className="absolute bg-purple-500 rounded-full bottom-10 right-10 w-60 h-60"></div>
        <div className="absolute w-40 h-40 bg-green-500 rounded-full top-1/2 right-1/4"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header section with info text */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4  text-md font-medium rounded-full bg-blue-50 text-[#393e41]"
          >
            OUR IMPACT
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto  text-md text-gray-600"
          >
            FICS has been at the forefront of fostering innovation and entrepreneurship among university students. Our
            platform has enabled thousands of ideas to transform into impactful projects addressing real-world
            challenges.
          </motion.p>
        </div>

        {/* Statistics grid */}
        <div ref={ref} className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col items-center h-full p-4 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl">
                <div
                  className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}
                >
                  {stat.icon}
                </div>

                <div className="flex items-end justify-center mb-2">
                  <motion.span
                    className="text-2xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {isInView ? <Counter from={0} to={stat.value} duration={2} /> : 0}
                  </motion.span>
                  <motion.span
                    className="text-2xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {stat.suffix}
                  </motion.span>
                </div>

                <motion.div
                  className={`w-10 h-1 rounded-full bg-gradient-to-r ${stat.color} mb-3`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "2.5rem" } : { width: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                />

                <motion.p
                  className="text-sm font-normal text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

interface CounterProps {
  from: number
  to: number
  duration: number
}

function Counter({ from, to, duration }: CounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    // If the target number is 0, don't animate
    if (to === 0) {
      setCount(0)
      return
    }

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Easing function for smoother animation near the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(from + (to - from) * easeOutQuart))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(to)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [from, to, duration])

  return <>{count}</>
}
