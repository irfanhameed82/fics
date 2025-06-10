
"use client"
import React from 'react';
import { motion } from "framer-motion"
import { Code, Lightbulb, Users, Briefcase, Globe, LightbulbIcon, Rocket } from "lucide-react"

export function Objectives() {
  const objectives = [
    {
      id: 1,
      icon: <Code className="w-5 h-5" />,
      title: "Technical Innovation",
      description:
        "Empowers students to solve pressing societal challenges using innovative, tech-driven solutions aligned with the UN Sustainable Development Goals (SDGs).",
    },
    {
      id: 2,
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Creative Solutions",
      description:
        "To give students a platform where they can fill the gap between practical applications and theoretical studies. This gives them the push to develop innovative technology based solutions using the knowledge they can apply.",
    },
    {
      id: 3,
      icon: <Users className="w-5 h-5" />,
      title: "Commercialization Platform",
      description:
        "To serve as a platform for ideas to become a reality by providing the necessary commercialisation and marketing opportunities so that the technologies they develop take the form of viable products and services to the consumers.",
    },
    {
      id: 4,
      icon: <Briefcase className="w-5 h-5" />,
      title: "Industry Collaboration",
      description:
        "To bring not only the industry within the reach of students so that they can receive proper mentorship and market relevance, but also bring the academic capabilities within the grasp of major market tycoons so that they can see the potential of students present in the society.",
    },
    {
      id: 5,
      icon: <Rocket className="w-5 h-5" />,
      title: "Entrepreneurial Culture",
      description:
        "To foster an entrepreneurial culture nationally and internationally; a culture that supports innovation and its benefits for our society and economy, by bringing venture capitalists to students and conversely.",
    },
    {
      id: 6,
      icon: <Globe className="w-5 h-5" />,
      title: "Global Innovation Platform",
      description:
        "To connect creative minds across the world to come together and exchange information to enhance our understanding of the world and develop a collective response to serious global challenges.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-2 overflow-hidden ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col content-start md:flex-row">
          {/* Left side with title */}
          <div className="mb-8 md:w-1/3 lg:w-1/4 md:mb-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {/* Title with decorative line */}
              
              <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
                
                Objectives
              </h2>
              <div className="h-1 mb-4 w-36 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            </motion.div>
            
          </div>

          {/* Right side with timeline */}
          <div className="md:w-2/3 lg:w-3/4 ">
            {/* Introduction text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mb-8 text-md sm:text-xl text-slate-600"
            >
            Anchored in NUST’s mission to foster knowledge-based economic development, FICS places a strong emphasis on technology-driven social entrepreneurship. The program empowers students to develop impactful solutions that address real-world societal challenges.
            <br/>
            Key objectives of FICS include:



            </motion.div>

            {/* Timeline container */}
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-[18px] md:left-[22px] top-[10px] bottom-10 w-0.5 bg-cyan-500/30"></div>

              {/* Timeline items */}
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
                {objectives.map((objective, index) => (
                  <motion.div key={objective.id} variants={itemVariants} className="flex mb-10 md:mb-12">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 mr-4 md:mr-6">
                      <div className="flex items-center justify-center bg-white border-2 rounded-full w-9 h-9 md:w-11 md:h-11 border-cyan-500">
                        <div className="w-4 h-4 rounded-full md:w-5 md:h-5 text-cyan-600">{objective.icon}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center mb-1">
                        
                        <h3 className="text-xl font-semibold text-slate-800">{objective.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{objective.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
