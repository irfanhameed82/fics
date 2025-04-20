import Image from "next/image"
import { Mail, Clock, CircleUserRound } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
        <div className="pb-5 bg-white">
             <div className="relative h-52 w-full bg-[#248ABD] flex items-center justify-center mb-5">
        <h1 className="text-xl font-semibold tracking-widest text-white sm:text-4xl">Contact the Organisers</h1>
      </div>
      </div>
      <div>
      

        {/* Team Members */}
        <div className="flex flex-col items-center justify-center gap-8 mb-16 md:flex-row md:gap-16 lg:gap-24">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
          <CircleUserRound size={40} strokeWidth={0.75} />
            {/* <div className="w-32 h-32 mb-4 overflow-hidden border-4 rounded-full border-cyan-500">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Ms. Sana Maqbool"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
              <CircleUserRound strokeWidth={1.5} />
            </div> */}
            <h2 className="text-lg font-medium text-cyan-700">Ms. Sana Maqbool</h2>
            <p className="text-sm text-slate-600">General Manager</p>
            <p className="text-sm text-slate-600">CAC</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
          <CircleUserRound size={40} strokeWidth={0.75} />
            {/* <div className="w-32 h-32 mb-4 overflow-hidden border-4 rounded-full border-cyan-500">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Ms. Sundas Imran"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
              <CircleUserRound strokeWidth={1.5} />
            </div> */}
            <h2 className="text-lg font-medium text-cyan-700">Ms. Sundas Imran</h2>
            <p className="text-sm text-slate-600">Manager</p>
            <p className="text-sm text-slate-600">CAC</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center justify-between w-full p-12 bg-white md:flex-row">
          {/* Left Side - Contact Info */}
          <div className="w-full sm:w-1/2 lg:w-2/5">
            <h3 className="mb-4 text-xl font-medium text-cyan-600">For any issues or Queries</h3>
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-5 h-5 text-cyan-600" />
              <a href="mailto:fics.nust.25@gmail.com" className="transition-colors hover:text-cyan-600">
                fics.nust.25@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6 text-slate-700">
              <Clock className="w-5 h-5 text-cyan-600" />
              <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="justify-center hidden sm:flex md:w-1/2 lg:w-3/5 md:justify-end">
           
             
                <Image
                  src="/contactus.png"
                  alt="Contact Illustration"
                  width={240}
                  height={240}
                  className="object-contain"
                />
             
          </div>
        </div>
      </div>
    </div>
  )
}
