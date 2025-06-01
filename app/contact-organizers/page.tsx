"use client"

import Image from "next/image"
import { Mail, ExternalLink, Linkedin, GitlabIcon as GitHub, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Define TypeScript interface for team members
interface TeamMember {
  name: string
  designation: string
  email: string
  image: string
}

// Executive members data
const ExecutiveMembers: TeamMember[] = [
  {
    name: "Zainab Zahra",
    designation: "President",
    email: "zanaibz.b22nbs@student.nust.edu.pk",
    image: "/ficsteam/Zainab Zahra(President).png",
  },
  {
    name: "Haleema Saleem",
    designation: "Vice President Outreach",
    email: "haleema.bsaf22nbs@student.nust.edu.pk",
    image: "/ficsteam/Haleema Saleem(VPoutreach).png",
  },
  {
    name: "Zainab Baloch",
    designation: "Vice President Finance and Registration",
    email: "zainabh.b22nbs@student.nust.edu.pk",
    image: "/ficsteam/Zainab Baloch(VPF&R).jpg",
  },
  {
    name: "Ayesha Shahid",
    designation: "Head of Human Resources",
    email: "ayesha.bpa21s3h@student.nust.edu.pk",
    image: "/ficsteam/ayesha Shahid(HoHR).jpg",
  },
  {
    name: "Muhammad Mutahir",
    designation: "Vice President Operations",
    email: "mmutahir097@gmail.com",
    image: "/ficsteam/Muhammad Mutahir(VPOperations).jpg",
  },
  {
    name: "Muhammad Sadiq",
    designation: "Head of Web & IT",
    email: "msadiqmfaisal@gmail.com",
    image: "/ficsteam/Muhammad Sadiq(HoW&IT).jpg",
  },
  {
    name: "Amen Tufail",
    designation: "Vice President Media",
    email: "atufail.ug22smme@student.nust.edu.pk",
    image: "/ficsteam/Amen Tufail(VP media).jpg",
  },
]

// Interface for organization leaders
interface OrganizationLeader {
  name: string
  designation: string
  email?: string
  phone?: string
  department: string
  image: string
}

// Organization leaders data
const organizationLeaders: OrganizationLeader[] = [
  {
    name: "Ms Sana Maqbool",
    designation: "Acting Director",
    email: "sanamaqbool1990@gmail.com",
    phone: "+92-51-90856240",
    department: "Innovation & Commercialization Office NUST (ICON)",
    image: "/ficsteam/Sana Maqbool(Acting Director).jpg",
  },
  {
    name: "Ms Sundas Imran",
    designation: "Senior Manager",
    phone: "+92-51-90851456",
   email: "managercac@ric.nust.edu.pk",
    department: "CAC - ICON",
    image: "/ficsteam/Sundas Imran(Senior Manager).jpg",
  },
  {
    name: "Mr Fawad kashan",
    designation: "Senior Manager Corporate Relations",
    phone: "+92-51-90856243",
    email: "manager.cr@nust.edu.pk",
    department: "CAC - ICON",
    image: "/ficsteam/Fawad Kashan(Senior Manager Corporate Relations).jpg",
  },
  {
    name: "Mr Muhammad Shahzada Ali",
    designation: "Assistant Manager",
    department: "CAC - ICON",
    email: "am.icon@nust.edu.pk",
    image: "/ficsteam/Muhammad Shahzada Ali(Assistant Manager).jpg",
  },
]

export default function ContactPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 12,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Tech-inspired Background */}
      <div className="relative h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex items-center justify-center mb-10">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">
          Organizers
        </h1>
      </div>
      {/* Main Content */}
      <div className="container px-4 mx-auto">
        <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-gray-900">
          For all general questions related to FICS, including participation, guidelines, and partnerships. Contact our organizing team here.
        </p>
      </div>

      <div className="container px-4 pb-12 py-4 mx-auto">
        {/* Leadership Section */}
        <section className="mb-24">
          {/* Main Leader - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 mb-16 overflow-hidden bg-white border-t-4 border-blue-500 rounded-lg shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              {/* <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full">
                <Image
                  src={organizationLeaders[0].image}
                  alt={organizationLeaders[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div> */}
              <h3 className="text-2xl font-bold text-gray-900">{organizationLeaders[0].name}</h3>
              <div className="px-4 py-1 mt-2 mb-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                {organizationLeaders[0].designation}
              </div>
              <p className="mt-2 text-gray-600">{organizationLeaders[0].department}</p>
              <div className="flex gap-4 mt-4">
                {organizationLeaders[0].email && (
                  <a href={`mailto:${organizationLeaders[0].email}`} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                )}
                {organizationLeaders[0].phone && (
                  <a href={`tel:${organizationLeaders[0].phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Other Leaders */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-3"
          >
            {organizationLeaders.slice(1).map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 overflow-hidden transition-all bg-white border-t-4 border-blue-400 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {/* <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div> */}
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <div className="px-3 py-1 mt-2 mb-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                    {leader.designation}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{leader.department}</p>
                  <div className="flex flex-col gap-2 mt-4">
                    {leader.email && (
                      <a href={`mailto:${leader.email}`} className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    )}
                    {leader.phone && (
                      <a href={`tel:${leader.phone.replace(/\D/g, '')}`} className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </a>
                    )}
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-blue-100 rounded-full opacity-20"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* Contact Information Section */}
        <section className="p-8 mb-24 overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Left Side - Contact Info */}
            <div className="w-full md:w-1/2">
              <div className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                Get in Touch
              </div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>
              <div className="flex items-center gap-3 p-4 mb-4 transition-colors rounded-lg bg-gray-50 hover:bg-blue-50">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:fics_nust@icon.nust.edu.pk" className="text-gray-700 transition-colors hover:text-blue-600">
                  fics_nust@icon.nust.edu.pk
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 mb-4 transition-colors rounded-lg bg-gray-50 hover:bg-blue-50">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                <MapPin />
                </div>
                <p  className="text-gray-700 transition-colors hover:text-blue-600">
                  RIC, Building NUST University H-12 Islamabad
                </p>
              </div>

              <div className="flex items-center gap-3 p-4 transition-colors rounded-lg bg-gray-50 hover:bg-blue-50">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center md:w-1/2 md:justify-end">
              <div className="relative w-64 h-64 overflow-hidden ">
                <Image src="/contactus.png" alt="Contact Illustration" fill className="object-cover rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Council Section */}
        <section className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
              Our Team
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900">Executive Council</h2>
            <p className="max-w-2xl mt-4 text-center text-gray-600">
              Meet our dedicated team working behind the scenes to drive innovation and excellence
            </p>
            <div className="w-20 h-1 mt-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          </div>

          {/* Featured Member (President) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16 overflow-hidden bg-white shadow-2xl rounded-xl"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-2/5">
                <div className="relative w-full h-96 md:h-full">
                  <Image
                    src={ExecutiveMembers[0].image || "/placeholder.svg"}
                    alt={ExecutiveMembers[0].name}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                </div>
                {/* Mobile info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:hidden">
                  <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-blue-100 rounded-full bg-blue-500/80">
                    {ExecutiveMembers[0].designation}
                  </div>
                  <h3 className="text-2xl font-bold">{ExecutiveMembers[0].name}</h3>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:w-3/5">
                {/* Desktop info */}
                <div className="hidden md:block">
                  <div className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                    {ExecutiveMembers[0].designation}
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-gray-900">{ExecutiveMembers[0].name}</h3>
                </div>
                <p className="mb-6 text-gray-600">
                  Leading our team with vision and expertise, driving innovation and excellence in all our initiatives.
                </p>
                <div className="flex items-center gap-3 p-4 transition-colors rounded-lg bg-gray-50 hover:bg-blue-50">
                  <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a
                    href={`mailto:${ExecutiveMembers[0].email}`}
                    className="text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {ExecutiveMembers[0].email}
                  </a>
                </div>
               
              </div>
            </div>
          </motion.div>

          {/* Other Executive Members */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ExecutiveMembers.slice(1).map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-72">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90"></div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                   
                    <h3 className="text-xl font-bold">{member.name}</h3>

                    {/* Contact info with slide-up animation */}
                    <div className="mb-5 transition-all duration-300 transform translate-y-8 sm:mb-0 sm:mt-3 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="inline-block p-1 px-3 mb-2 text-xs font-medium text-blue-100 rounded-full sm:py-1 bg-blue-500/80">
                      {member.designation}
                    </div>
                      <div className="flex items-center gap-2 text-blue-100">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.email}`} className="text-sm truncate hover:underline">
                          {member.email}
                        </a>
                      </div>

                      
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute w-20 h-20 border-t-2 border-r-2 top-4 right-4 border-blue-400/30 rounded-tr-xl"></div>
                <div className="absolute w-20 h-20 border-b-2 border-l-2 bottom-4 left-4 border-blue-400/30 rounded-bl-xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  )
}
