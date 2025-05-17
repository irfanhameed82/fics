"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredYear, setHoveredYear] = useState<string | null>(null)

  const timelineData = {
    events: [
      {
        year: "2013 - Inception",
        description:
          "Launched at NUST as a platform to harness student potential in solving real-world challenges through tech-driven, innovative solutions.",
        position: "top",
      },
      {
        year: "2016 - National Expansion",
        description:
          "Opened to universities across Pakistan, transforming into a national-level competition and fostering cross-institutional collaboration.",
        position: "bottom",
      },
      {
        year: "2022 - International Expansion",
        description:
          "Became Pakistan's first international student innovation program, inviting global participation and collaborations.",
        position: "top",
      },
      {
        year: "2023 -  Launch of FICS Türkiye Chapter",
        description:
          "Established its first international chapter in Türkiye, marking the beginning of its global chapter initiative.",
        position: "bottom",
      },
      {
        year: "2024 – Launch of FICS Azerbaijan Chapter",
        description:
          "Continuing its global outreach, the FICS Azerbaijan Chapter was launched, promoting cross-border innovation among youth.",
        position: "top",
      },
      {
        year: "2025 – Launch of FICS Sri Lanka, Russia & Thailand Chapters",
        description:
          "Expanded further into Asia and Eastern Europe, with new chapters launched in Sri Lanka, Russia, and Thailand.",
        position: "bottom",
      },
      {
        year: "2025 – Launch of FICS Junior",
        description:
          "FICS Junior introduced as Pakistan's first and only international entrepreneurial competition for school students (Grade 8 to A-Levels), nurturing innovation at an early age.",
        position: "top",
      },
    ],
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="relative py-12">
      <div className="flex items-center justify-center mx-auto mb-12 ">
        <motion.div
          className="flex items-start "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row">
            <h2 className="text-3xl font-bold tracking-wider md:text-5xl outlined-text">GENESIS OF</h2>
            <h2 className="sm:ml-2 text-4xl font-bold tracking-widest text-[#248ABD] md:text-5xl">FICS</h2>
          </div>
        </motion.div>
      </div>

      {!isMobile && (
        <div className="container hidden px-4 mx-auto md:block">
          <div className="relative">
            {/* Top Descriptions */}
            <div className="relative flex justify-between mb-4">
              {timelineData.events.map((event, index) => (
                <div key={`top-${index}`} className="w-full px-2 text-center">
                  {event.position === "top" && (
                    <>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={`max-w-[200px] mx-auto transition-colors duration-300 ${
                          hoveredYear === event.year ? "text-[#248ABD]" : "text-gray-700"
                        }`}
                      >
                        {event.description}
                      </motion.p>
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0.5 bg-gray-400 transform -translate-x-1/2"
                        style={{ height: "40px", top: "100%" }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <motion.div
                          className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-gray-400 rounded-full left-1/2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        ></motion.div>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline Line + Years */}
            <div className="relative flex items-center justify-between mx-8">
              <motion.div
                className="absolute left-0 right-0 h-px bg-gray-300"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              ></motion.div>

              {timelineData.events.map((event, index) => (
                <div key={`year-${index}`} className="relative z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredYear(event.year)}
                    onHoverEnd={() => setHoveredYear(null)}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center justify-center w-16 h-16 text-lg font-bold rounded-full shadow-md transition-colors duration-300 ${
                      hoveredYear === event.year ? "bg-[#248ABD] text-white" : "bg-black text-white"
                    }`}
                  >
                    {event.year.split(" ")[0]}
                  </motion.div>

                  {index < timelineData.events.length - 1 && (
                    <motion.div
                      className="absolute h-px border-t border-gray-400 border-dotted top-1/2"
                      style={{
                        width: "calc(100% - 64px)",
                        left: "calc(50% + 32px)",
                        transform: "translateY(-50%)",
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    ></motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Descriptions */}
            <div className="relative flex justify-between mt-8">
              {timelineData.events.map((event, index) => (
                <div key={`bottom-${index}`} className="w-full px-2 text-center">
                  {event.position === "bottom" && (
                    <>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className={`max-w-[200px] mx-auto transition-colors duration-300 ${
                          hoveredYear === event.year ? "text-[#248ABD]" : "text-gray-700"
                        }`}
                      >
                        {event.description}
                      </motion.p>
                      <motion.div
                        className="absolute top-0 left-1/2 w-0.5 bg-gray-400 transform -translate-x-1/2"
                        style={{ height: "40px", bottom: "100%" }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <motion.div
                          className="absolute top-0 w-2 h-2 transform -translate-x-1/2 bg-gray-400 rounded-full left-1/2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        ></motion.div>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Timeline */}
      {isMobile && (
        <div className="container px-4 mx-auto md:hidden">
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute top-0 bottom-0 w-0.5 bg-gray-300 border-dashed border-l border-gray-300"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ height: "calc(100% - 32px)" }}
            ></motion.div>

            {timelineData.events.map((event, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="relative flex items-center w-full mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredYear(event.year)}
                  onHoverEnd={() => setHoveredYear(null)}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`absolute z-10 flex items-center justify-center w-16 h-16 text-lg font-bold transform -translate-x-1/2 rounded-full shadow-md left-1/2 transition-colors duration-300 ${
                    hoveredYear === event.year ? "bg-[#248ABD] text-white" : "bg-black text-white"
                  }`}
                >
                  {event.year.split(" ")[0]}
                </motion.div>

                <div className={`w-full flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <motion.div
                    className={cn(
                      "w-[calc(50%-32px)] p-4 bg-white rounded-lg shadow-sm transition-colors duration-300",
                      index % 2 === 0 ? "mr-[calc(50%+32px)]" : "ml-[calc(50%+32px)]",
                      hoveredYear === event.year ? "border-[#248ABD] border-2" : "",
                    )}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        hoveredYear === event.year ? "text-[#248ABD]" : "text-gray-700"
                      }`}
                    >
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
