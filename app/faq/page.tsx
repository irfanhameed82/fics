import { FAQSection } from "@/components/faqsquestionaire";
import { CircleHelp } from "lucide-react";

export default function page (){
    return (
        <div className="pb-5 bg-white">
             <div className="relative  w-full h-20 sm:h-24 w-full bg-gradient-to-b from-[#3BB0A1] to-[#00547E] flex items-center justify-center mb-5">
        <h1 className="text-4xl font-semibold tracking-widest text-white">FAQ</h1>
        <CircleHelp size={50} color="#fafafa" strokeWidth={3} className="mx-4 mt-1 transition-all animation animate-float-spin"/>
      </div>
        <FAQSection/>
        </div>
    )
}