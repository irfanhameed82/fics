import { Objectives } from "@/components/objective"
import Image from "next/image"
import { ArrowRight, Globe, Rocket, Target } from "lucide-react"
import Link from "next/link"
const metadata = {
    title: "About FICS",
    description: "Finding Innovative & Creative Solutions for a sustainable future",
    }
export default function Page() {
  return (
    <div className="flex flex-col max-w-full min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
  

        <div className="container px-4 py-20 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full text-cyan-700 bg-cyan-100">
                <Globe className="w-4 h-4 mr-2" />
                Global Innovation Platform
              </div>
              <h1 className="text-3xl font-semibold tracking-wide text-[#248ABD] sm:text-5xl md:text-6xl">
                About FICS
              </h1>
              <p className="text-lg font-medium text-slate-700">
                Finding Innovative & Creative Solutions for a sustainable future
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#objectives"
                  className="inline-flex items-center px-6 py-3 font-medium text-white transition-all rounded-lg bg-gradient-to-r from-cyan-500 to-[#248ABD] hover:from-cyan-600 hover:to-blue-700"
                >
                  Our Objectives
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full overflow-hidden shadow-2xl h-80 rounded-xl">
                <Image
                  src="/ficsimage.jpg"
                  alt="FICS Global Innovation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10 space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-1 rounded-full ${i === 2 ? "w-16 bg-cyan-500" : "w-8 bg-slate-200"}`}></div>
              ))}
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                <span className="text-2xl font-semibold text-cyan-600">F</span>inding
                <span className="text-2xl font-semibold text-cyan-600"> I</span>nnovative &
                <span className="text-2xl font-semibold text-cyan-600"> C</span>reative
                <span className="text-2xl font-semibold text-cyan-600"> S</span>olutions (FICS) is the flagship
                international entrepreneurship program of the National University of Sciences & Technology (NUST) that
                encourages Undergraduate and Postgraduate students to devise technology-based solutions with a focus on
                real-world problems.
              </p>

              <p>
                It is a global competition between the brightest minds who present innovative solutions to some of the
                world's most challenging issues. FICS is aligned with the United Nations 17 Sustainable Development
                Goals (SDGs) and is held annually with participation from universities all across the world.
              </p>

              <div className="p-6 my-8 border bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-cyan-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-800">Global Expansion</h3>
                    <p className="text-slate-700">
                      In 2023, FICS expanded its reach globally by hosting its first-ever international pitching event
                      at Gazi University, Ankara, Türkiye. The event saw participation from 20 universities, where
                      students presented innovative ideas to address pressing global challenges.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                The success of FICS in Turkey reinforced its position as a platform for global collaboration and
                innovation. This year FICS 2024 is expanding and conducting similar pitching events in other
                universities in USA, Türkiye, Azerbaijan, UK and more.
              </p>

              <div className="p-6 my-8 border border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-600">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-800">Climate Change Initiative</h3>
                    <p className="text-slate-700">
                      FICS 2024 also has a special category award in Climate Change and will be partnering with
                      Azerbaijan and COP29 for a consortium of HEIs and top student ideas to be showcased at COP29.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 mx-auto">
          <Objectives />
        </div>
      </section>
    </div>
  )
}
