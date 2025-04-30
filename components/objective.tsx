
"use client"
import React from 'react';
import { motion } from "framer-motion"
import { Code, Lightbulb, Users, Briefcase, Globe } from "lucide-react"

export function Objectives() {
  const objectives = [
    {
      id: 1,
      icon: <Code className="w-5 h-5" />,
      title: "Technical Innovation",
      description:
        "To encourage students to become valuable members of society and contribute towards societal / community development by deploying technical knowledge and scientific tools.",
    },
    {
      id: 2,
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Creative Solutions",
      description:
        "To allow students to think creatively and develop the latest applications and innovative technology based-solutions, hence encouraging them to work on practical utilization of knowledge.",
    },
    {
      id: 3,
      icon: <Users className="w-5 h-5" />,
      title: "Commercialization Platform",
      description:
        "To serve as a platform for identifying ideas and technologies that can be commercialized and converted into viable products and services.",
    },
    {
      id: 4,
      icon: <Briefcase className="w-5 h-5" />,
      title: "Industry Collaboration",
      description:
        "To bring the Industry on board to provide regular mentorship to the participating students and thereby provide an opportunity not only for the students to learn from the expertise and experience of Industry partners but also for the Industry to discover the potential of our students and engage with the students and the Institute on a more long-term basis.",
    },
    {
      id: 5,
      icon: <Globe className="w-5 h-5" />,
      title: "Entrepreneurial Culture",
      description:
        "To foster an entrepreneurial culture within NUST and at a national & international level; a culture that facilitates and supports innovation and its translation into benefits for our society and our economy.",
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
                Project
                <br />
                Objective
              </h2>
              <div className="h-1 mb-4 w-36 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            </motion.div>
            
          </div>

          {/* Right side with timeline */}
          <div className="md:w-2/3 lg:w-3/4 md:pl-8 lg:pl-16">
            {/* Introduction text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-8 text-md sm:text-xl text-slate-600"
            >
              FICS is part of an on-going and continuous exercise at NUST aimed at facilitating entrepreneurship, which
              is in line with the NUST mission. FICS concentrates more on Social Entrepreneurship. Some of the
              objectives of FICS are given below:-
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
                        <div className="w-4 h-4 rounded-full md:w-5 md:h-5 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center mb-1">
                        <div className="mr-2 text-xl text-cyan-600">{objective.icon}</div>
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
