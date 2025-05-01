"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lightbulb, Zap, Globe, Rocket, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Page() {


  return (
    <div className="min-h-screen bg-transparent">
      {/* Header Section */}
      <div className="relative overflow-hidden shadow-xl bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 ">
        

        <div className="container px-4 py-8 mx-auto text-center ">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <Lightbulb size={40} className="text-white" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="block">Innovate</span>
            <span className="block mt-1 text-white/90">Submit</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
              Transform the Future!
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto mt-6"
          >
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-white/10"></div>
      </div>

      {/* Features Grid */}
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <div className="p-3 mb-4 bg-orange-100 rounded-full w-fit">
              <Zap size={24} className="text-orange-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Innovative Ideas</h3>
            <p className="text-gray-600">
              We're looking for groundbreaking concepts that challenge the status quo and offer fresh perspectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <div className="p-3 mb-4 bg-teal-100 rounded-full w-fit">
              <Globe size={24} className="text-teal-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Global Impact</h3>
            <p className="text-gray-600">
              Align your project with UN Sustainable Development Goals to create meaningful social change.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <div className="p-3 mb-4 bg-purple-100 rounded-full w-fit">
              <Rocket size={24} className="text-purple-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Future-Ready</h3>
            <p className="text-gray-600">
              Develop solutions that anticipate tomorrow's challenges and leverage cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container px-4 py-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative p-8 overflow-hidden bg-white shadow-lg rounded-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-70"></div>

          <h2 className="relative mb-6 text-3xl font-bold text-gray-900">Overview</h2>
          <div className="relative space-y-6 text-lg text-gray-700">
            <p>
              At FICS, we believe in the power of ideas to shape the future. If you have an innovative idea that can
              make a lasting impact, we want you to share it with the world. Before submitting, please take a moment to
              review the{" "}
              <a
                href="/stages"
                className="font-medium text-[#2980b9] hover:underline-offset-2  transition-colors hover:text-indigo-500 hover:underline"
              >
                evaluation criteria
              </a>{" "}
              to ensure your idea stands out in the competition.
            </p>
            <p>
              To guide you through the FICS journey, you'll need a faculty supervisor who will help you refine your idea
              and ensure it meets the necessary requirements. Not sure who to approach? Reach out to your school or
              contact our Lead Coordinators for assistance.
            </p>
            <p>
              For additional questions, our registration team is here to help—contact us at{" "}
              <a
                href="mailto:fics_nust@icon.nust.edu.pk"
                className="font-medium text-[#2980b9] transition-colors hover:text-indigo-500 cursor-pointer hover:underline"
              >
                fics_nust@icon.nust.edu.pk
              </a>
              .
            </p>
          </div>
        </motion.div>
      </section>

      {/* SDGs Section */}
      <section className="container px-4 py-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative p-8 overflow-hidden text-gray-800 shadow-lg bg-white/50 rounded-2xl"
        >
          {/* <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {/* <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg> 
          </div> */}

          <h2 className="relative mb-6 text-3xl font-semibold text-black">Align with Global Goals</h2>
          <p className="relative mb-6 text-lg text-black">
            Your idea should align with one or more of the United Nations Sustainable Development Goals (SDGs). We're
            looking for solutions that not only showcase technological innovation but also create meaningful social
            impact. If your project can help solve global challenges such as climate change, inequality, or education,
            we want to hear from you.
          </p>

          <div className="relative flex flex-wrap gap-2 mt-6">
  {[
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequality",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals"
  ].map((tag, i) => (
    <span key={i} className="px-3 py-1 text-sm font-medium text-white bg-[#2980b9] rounded-full backdrop-blur-sm">
      {tag}
    </span>
  ))}
</div>

        </motion.div>
      </section>

      {/* Idea Submission Section */}
      <section className="container px-4 py-12 mx-auto mb-16 max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative p-8 overflow-hidden bg-white shadow-lg rounded-2xl"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 -mb-20 -mr-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-70"></div>

          <h2 className="relative mb-6 text-3xl font-bold text-gray-900">What We're Looking For</h2>
          <p className="relative mb-8 text-lg text-gray-700">
            We are seeking forward-thinking projects that solve real-world problems using technology. Whether through
            AI, sustainability solutions, or novel digital tools, your idea should create a lasting, positive impact. If
            you believe your idea can drive change and inspire others, this is the platform for you!
          </p>

          <div className="relative flex justify-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold cursor-pointer text-white transition-all duration-300 bg-[#2980b9]  hover:bg-[#2980b9]"
              
            >
                 <Link href="/register/student">Register Your Idea</Link>
              
              <ChevronRight className="ml-2" size={18} />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}
