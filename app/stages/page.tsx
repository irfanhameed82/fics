"use client";
import { Lightbulb, Presentation, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import Image from "next/image";
import StagesSection from "@/components/StagesSection";
import stagesicons from "@/public/stagesicons.png";
interface StageInfo {
  title: string;
  icons: ReactElement;
  StageType: string;
  bgcolor: string; // should just be a hex color, like "#E3F6FF"
  description: string;
}

const stagesInfo: StageInfo[] = [
  {
    title: "Stage 1",
    icons: <Lightbulb className="w-5 h-5" />,
    StageType: "Online idea submission",
    bgcolor: "#E3F6FF",
    description:
      "The process begins with student teams submitting a synopsis of their innovative ideas that address pressing social challenges. Each idea is reviewed and endorsed by FICS Management following the approval of the respective faculty supervisor. Approved ideas are shortlisted for the next phase based on their originality, relevance, and potential impact.",
  },
  {
    title: "Stage 2",
    icons: <Presentation className="w-5 h-5" />,
    StageType: "Pitching Session",
    bgcolor: "#F7F7F7",
    description:
      "Shortlisted teams are then invited to present their ideas in structured pitching sessions held at both local and international levels. These sessions are organized in collaboration with partner universities, providing student teams the opportunity to showcase their projects to a wider audience. Using PowerPoint presentations, teams highlight the social impact, innovation, and feasibility of their proposed solutions. A panel of judges comprising industry experts evaluates the ideas based on their practicality, scalability, and potential for commercialization. These pitching evaluations not only foster healthy competition but also help integrate the local student community into the global innovation ecosystem.",
  },
  {
    title: "Stage 3",
    icons: <Users className="w-5 h-5" />,
    StageType: "Grand Finale",
    bgcolor: "#E3F6FF",
    description:
      "In the final phase, selected teams develop working prototypes of their ideas under the mentorship of professionals from both academia and industry. These prototypes are showcased before a distinguished panel of judges, who assess each project’s technical soundness, market readiness, and potential to create real-world impact. The Grand Finale takes place at NUST Campus in Islamabad, Pakistan, where the winning teams are awarded cash prizes along with 6-months mentoring & incubation support.",
  },
];

export default function Stage() {
  return (
    <div>
      <div className="relative h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] animate-gradient-x flex items-center justify-center mb-5 overflow-hidden">
        <h1 className="pb-4 text-4xl font-semibold tracking-widest text-white text-border-1 text-border-black">Stages</h1>
        <Image alt="stages" src={stagesicons} width={90}  className="absolute right-4 sm:right-12 -bottom-1 sm:bottom-1"/>
      </div>
      <div className="grid grid-cols-1 gap-4 px-5 mb-10 md:grid-cols-2 lg:grid-cols-3">
        {stagesInfo.map((stage, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-md`}
            style={{ backgroundColor: stage.bgcolor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-[#248ABD] text-4xl mb-4">{stage.icons}</div>
            <h2 className="mb-2 text-xl font-semibold">{stage.StageType}</h2>
            <p className="text-center text-gray-700">{stage.description}</p>
          </motion.div>
        ))}
      </div>
      {/* images section */}
        <div className="grid grid-cols-1 ">
            <div
           >
            <Image
                src="/stages-banner_colored_final.jpg"
                alt="Stage 1"
                width={500}
                height={500}
                className="object-contain w-full rounded-lg shadow-lg sm:w-full h-86"
                priority
            />
            </div>
            <StagesSection/>
            </div>
         
    </div>
  );
}
