"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Rocket } from "lucide-react"

interface Statistic {
  value: number
  suffix: string
  label: string
}

const statistics: Statistic[] = [
  {
    value: 1000,
    suffix: "+",
    label: "Startup Ideas Submitted",
  },
  {
    value: 400,
    suffix: "+",
    label: "Projects with Working Prototypes",
  },
  {
    value: 10,
    suffix: "+",
    label: "National & International Partners",
  },
  {
    value: 20,
    suffix: "",
    label: "Schools and Departments",
  },
  {
    value: 9,
    suffix: "",
    label: "9 Successful Iterations",
  },
  {
    value: 17,
    suffix: "",
    label: "SDGs",
  },
  {
    value: 70,
    suffix: "+",
    label: "IPs",
  },
]

export default function StatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="pb-10 bg-white ">
      <div className="container px-4 mx-auto">
        {/* Title with icon */}
        <div className="flex justify-center mb-16 ">
          <div className="relative inline-block px-12 py-4 border-2 border-gray-800 rounded-full cursor-pointer hover:border-gray-400 hover:bg-gray-100">
            <Rocket className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2" />
            <h2 className="text-2xl font-bold text-center">Our Statics</h2>
          </div>
        </div>

        {/* Statistics grid */}
        <div ref={ref} className="grid grid-cols-2 gap-y-12 md:grid-cols-4 lg:grid-cols-7">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2 text-center">
                <motion.span
                  className="text-4xl font-bold text-[#0288D1]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {isInView ? <Counter from={0} to={stat.value} duration={2} /> : 0}
                </motion.span>
                <motion.span
                  className="text-4xl font-bold text-[#0288D1]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {stat.suffix}
                </motion.span>
              </div>
              <motion.div
                className="w-16 h-0.5 bg-gray-300 mb-2"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : { width: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              />
              <motion.p
                className="text-sm text-center max-w-[120px]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.label}
              </motion.p>
            </div>
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
