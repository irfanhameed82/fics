import { FAQSection } from "@/components/faqsquestionaire";

export default function page (){
    return (
        <div className="pb-5 bg-white">
             <div className="relative h-52 w-full bg-[#248ABD] flex items-center justify-center mb-5">
        <h1 className="text-4xl font-semibold tracking-widest text-white">FAQ</h1>
      </div>
        <FAQSection/>
        </div>
    )
}