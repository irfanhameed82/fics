"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Link from "next/link"

export default function StagesSection() {
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
    <section className="py-16 bg-slate-50">
      <div className="container max-w-5xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-4xl font-semibold text-center text-slate-800"
        >
          Stages
        </motion.h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300"></div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
            

            {/* Stage 1 Section */}
            <motion.div variants={itemVariants} className="relative mb-20">
              {/* Timeline dot */}
              <div className="absolute z-10 w-5 h-5 bg-white left-[15px] top-12">
                <div className="w-full h-full border-2 border-gray-400 rounded-full p-0.5 box-border">
                  <div className="w-full h-full rounded-full bg-cyan-500"></div>
                </div>
              </div>

              {/* Circle extension with icon */}
              <div className="absolute top-7 left-10">
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-cyan-500">
                  <div className="items-center text-4xl font-bold text-white ">1</div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 ml-32">
                <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Online Idea Submission</h3>

                <div className="py-2 bg-transparent">
                  <p className="mb-4 text-slate-600">
                   Student teams submit a detailed synopsis of their innovative idea aligned with social impact. All ideas must be endorsed by the respective faculty supervisor before being reviewed by FICS Management.
                  </p>

                  <p className="mb-2 font-medium text-slate-700">Synopsis Deadline:</p>
                  <ul className="mb-4 space-y-1 list-none text-slate-600">
                    <li>National Teams: January 2025</li>
                    <li>International Teams: June-July 2025</li>
                  </ul>
                  <p className="mb-4 text-slate-600">
                    <span className="text-black">Evaluation Criteria:</span> Originality, social relevance, clarity of problem statement, and alignment with FICS themes.
                  </p>
                  <Link href="/rubrics/stage1" className="font-medium transition-colors text-cyan-600 hover:text-cyan-800">
                    Rubric for Stage 1
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stage 2 Section */}
            <motion.div variants={itemVariants} className="relative mb-20">
              {/* Timeline dot */}
              <div className="absolute z-10 w-5 h-5 bg-white left-[15px] top-12">
                <div className="w-full h-full border-2 border-gray-400 rounded-full p-0.5 box-border">
                  <div className="w-full h-full rounded-full bg-cyan-500"></div>
                </div>
              </div>

              {/* Circle extension with icon */}
              <div className="absolute top-7 left-10">
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-cyan-500">
                  <div className="text-4xl font-bold text-white">2</div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 ml-32">
                <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Pitching Session</h3>

                <div className="py-2 bg-transparent">
                  <p className="mb-4 text-slate-600">
                    Shortlisted teams advance to the pitching phase where they formally present their ideas in front of a panel of industry experts and academic mentors. These sessions are conducted both locally and internationally in collaboration with partner universities, creating inclusive platforms for idea evaluation and community engagement. Presentations are assessed based on the innovation, impact, practicality, and potential for commercialization.

                  </p>

                  <p className="mb-2 font-medium text-slate-700">Event Timeline:</p>
                  <ul className="mb-4 space-y-1 list-none text-slate-600">
                    <li>National Pitching Sessions: April-May 2025</li>
                    <li>International Pitching Sessions: May-July 2025</li>
                  </ul>
                  <p className="mb-4 text-slate-600">
                    <span className="text-black">Evaluation Criteria:</span> Presentation clarity, innovation, scalability, technical feasibility, and social impact.
                  </p>

                  <Link href="/rubrics/stage2" className="font-medium transition-colors text-cyan-600 hover:text-cyan-800">
                    Rubric for Stage 2
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Stage 3 Section */}
            <motion.div variants={itemVariants} className="relative mb-20">
              {/* Timeline dot */}
              
              <div className="absolute z-10 w-5 h-5 bg-white left-[15px] top-12">
                <div className="w-full h-full border-2 border-gray-400 rounded-full p-0.5 box-border">
                  <div className="w-full h-full rounded-full bg-cyan-500"></div>
                </div>
              </div>
              {/* Circle extension with icon */}
              <div className="absolute top-7 left-10">
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-cyan-500">
                  <div className="text-4xl font-bold text-white ">3</div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 ml-32">
                <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Grand Finale</h3>

                <div className="py-2 bg-transparent">
                  <p className="mb-4 text-slate-600">
                    Finalist teams develop working prototypes of their proposed solutions under the guidance of assigned academic and industry mentors. These prototypes are showcased at the Grand Finale event, where a distinguished panel of judges evaluates their functionality, effectiveness, and readiness for deployment or commercialization.
                  </p>

                  <p className="mb-2 font-medium text-slate-700">Event timeline:</p>
                  <ul className="mb-4 space-y-1 list-none text-slate-600">
                    <li>Grand Finale - August 2025</li>
                  </ul>
                  <p className="mb-4 text-slate-600">
                    <span className="text-black">Evaluation Criteria:</span> Prototype functionality, user-friendliness, real-world applicability, and potential for market deployment.
                  </p>  
                  <Link href="/rubrics/stage3" className="font-medium transition-colors text-cyan-600 hover:text-cyan-800">
                    Rubric for Stage 3
                  </Link>
                </div>
              </div>
            </motion.div>
            

            
            {/* Prizes Section */}
            <motion.div variants={itemVariants} className="relative mb-20">
              {/* Timeline dot */}
              <div className="absolute z-10 w-5 h-5 bg-white left-[15px] top-12">
                <div className="w-full h-full border-2 border-gray-400 rounded-full p-0.5 box-border">
                  <div className="w-full h-full rounded-full bg-cyan-500"></div>
                </div>
              </div>

              {/* Circle extension with icon */}
              <div className="absolute top-7 left-10">
                <div className="flex items-center justify-center rounded-full w-14 h-14 bg-cyan-500">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 ml-32">
                <h3 className="mb-4 text-2xl font-semibold text-cyan-600">Awards</h3>

                <div className="py-2 bg-transparent">
                  <p className="mb-4 text-slate-600">
                    Cash prizes and recognition will be given to the top-performing teams in the following categories at the Grand Finale of FICS 2025:
                  </p>

                  <ul className="pl-5 mb-4 space-y-2 list-disc text-slate-700">
                    <li>National Winner – FICS 2025</li>
                    <li>Global Champion – FICS 2025</li>
                    <li>Social Impact Award</li>
                    <li>First Runner-Up</li>
                    <li>Second Runner-Up</li>
                  </ul>
                  <p className="mb-4 text-slate-600">
                    This stage attracts significant interest from industry partners, offering participants valuable opportunities for mentorship, sponsorship, and industry exposure. The Winners will also be offered free incubation space at NUST’s TechOne Incubation Centre, supporting the transformation of their idea into a viable startup.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
