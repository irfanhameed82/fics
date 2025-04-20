"use client";
import { Lightbulb, Presentation, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import Image from "next/image";
import StagesSection from "@/components/StagesSection";

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
      "In Stage 1, student teams submit project synopsis of their unique ideas with positive social impact. These ideas are endorsed by FICS Management after the approval of the respective supervisor. Subsequently, the ideas shortlisted in Stage 1 make it to the next stage.",
  },
  {
    title: "Stage 2",
    icons: <Presentation className="w-5 h-5" />,
    StageType: "Pitching Session",
    bgcolor: "#F7F7F7",
    description:
      "In Stage 2 the student teams present their ideas to a wider audience in the form of PowerPoint presentation. The judges at this stage include Industry partners; they assess the impact and practicability of the project ideas, as well as their ability to be commercialized.",
  },
  {
    title: "Stage 3",
    icons: <Users className="w-5 h-5" />,
    StageType: "Prototype Development",
    bgcolor: "#E3F6FF",
    description:
      "In Stage 3, the student teams develop a prototype of their project ideas. The prototypes are developed under the guidance of mentors from the industry and academia. The prototypes are then presented to a panel of judges who assess their feasibility and impact.",
  },
];

export default function Stage() {
  return (
    <div>
      <div className="relative h-52 w-full bg-[#248ABD] flex items-center justify-center mb-5">
        <h1 className="text-4xl font-bold tracking-widest text-white">Stages</h1>
      
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
            <h2 className="mb-2 text-xl font-bold">{stage.StageType}</h2>
            <p className="text-center text-gray-700">{stage.description}</p>
          </motion.div>
        ))}
      </div>
      {/* images section */}
        <div className="grid grid-cols-1 ">
            <div
           >
            <Image
                src="/stages-banner_colore.jpg"
                alt="Stage 1"
                width={500}
                height={500}
                className="object-contain w-full rounded-lg shadow-lg sm:w-full h-96"
                priority
            />
            </div>
            <StagesSection/>
            </div>
         
    </div>
  );
}
