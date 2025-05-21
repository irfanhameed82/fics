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
            className="text-xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
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

      
      {/* Overview Section */}
      <section className="container px-4 py-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative p-8 overflow-hidden bg-white shadow-lg rounded-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-70"></div>

          <h2 className="relative mb-6 text-3xl font-semibold text-gray-900">Submit an Idea</h2>
          <div className="relative space-y-6 text-lg text-gray-700">
            <p>
            Please refer to the{" "}
              <a
                href="/stages"
                className="font-medium text-[#2980b9] hover:underline-offset-2  transition-colors hover:text-indigo-500 hover:underline"
              >
                evaluation criteria
              </a>{" "}
              before filling the form. Your idea will be judged against this criteria.
            </p>
            <p>
              Your team needs a faculty supervisor to guide you throughout the process of FICS Stage 2 and Stage 3 and make sure that your idea qualifies all requirements of the judges and evaluation committee.
            </p>
            <p>
              You can get in contact with a faculty supervisor from your school. Contact the {" "}
              <Link
                href="/nust-contacts"
                className="font-medium text-[#2980b9] transition-colors hover:text-indigo-500 cursor-pointer hover:underline"
              >
                Lead Co-coordinators
              </Link>
              .
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

      

      {/* Idea Submission Section */}
      <section className="container px-4 py-12 mx-auto mb-16 max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative p-2 overflow-hidden bg-white shadow-lg rounded-2xl"
        >
          
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
