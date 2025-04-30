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
                    A complete synopsis for review, according to the provided outline. The teams are also encouraged to
                    submit a presentation or a video of their idea along with the synopsis. Any additional materials
                    supporting the idea must also be provided as a separate file.
                  </p>

                  <p className="mb-2 font-medium text-slate-700">Synopsis Deadline:</p>
                  <ul className="mb-4 space-y-1 list-none text-slate-600">
                    <li>For National Teams: Jan 2024</li>
                    <li>For International Teams: June 2024</li>
                  </ul>

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
                    A complete synopsis for review, according to the provided outline. The teams are also encouraged to
                    submit a presentation or a video of their idea along with the synopsis. Any additional materials
                    supporting the idea must also be provided as a separate file.
                  </p>

                  <p className="mb-2 font-medium text-slate-700">Synopsis Deadline:</p>
                  <ul className="mb-4 space-y-1 list-none text-slate-600">
                    <li>For National Teams: Jan 2024</li>
                    <li>For International Teams: June 2024</li>
                  </ul>

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
                    A complete synopsis for review, according to the provided outline. The teams are also encouraged to
                    submit a presentation or a video of their idea along with the synopsis. Any additional materials
                    supporting the idea must also be provided as a separate file.
                  </p>

                  <p className="mb-2 font-medium text-slate-700">Synopsis Deadline:</p>
                  <ul className="mb-4 space-y-1 list-none text-slate-600">
                    <li>For National Teams: Jan 2024</li>
                    <li>For International Teams: June 2024</li>
                  </ul>

                  <Link href="/rubrics/stage3" className="font-medium transition-colors text-cyan-600 hover:text-cyan-800">
                    Rubric for Stage 3
                  </Link>
                </div>
              </div>
            </motion.div>
            {/* Stage INTERNATIONAL Section */}
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
                  <div className="text-xl font-bold text-white ">FICS</div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 ml-32">
                <h3 className="mb-4 text-2xl font-semibold text-cyan-600">FICS International </h3>

                <div className="py-2 bg-transparent">
                  <p className="mb-4 text-slate-600">
                  FICS took a step ahead and expanded its reach globally and opened its doors to international participants and had partner universities from various regions including Turkey, Malaysia, Egypt, Azerbaijan, and Libya. The first ever FICS International Event was held in Türkiye, where 20 universities participated and presented their ideas. The program aims to expand its reach even further. This year not only are we collaborating with universities from all around the world for participation of students internationally, but we are also connecting with foreign experts, judges and mentors who are well-versed in international markets and strategies. This will prove to be a huge step forward towards developing global connections and to provide our youth with opportunities that are not restricted to their own countries only, but instead allow them to expand their potential and reach the relevant target market anywhere in the world.
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
                    Cash prizes will be awarded to the following winning teams of Stage 3
                  </p>

                  <ul className="pl-5 mb-4 space-y-2 list-disc text-slate-700">
                    <li>Winner FICS - (Cash Prize *)</li>
                    <li>First Runner-Up - (Cash Prize *)</li>
                    <li>Second Runner-Up - (Cash Prize *)</li>
                    <li>Special Prize Categories</li>
                  </ul>

                  <p className="mb-4 text-slate-600">Prize amounts will be announced soon.</p>

                  <p className="mb-4 text-slate-600">
                    Since this Stage witnesses a high level of interest and attendance from the Industry, students also
                    have the incentive of finding a long-term mentor and possibly sponsor for their idea. We also offer
                    free incubation space to the winner in our TechOne incubation space.
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
