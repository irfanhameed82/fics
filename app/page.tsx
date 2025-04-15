import Event from "@/components/event/event";
import FicsAtGlance from "@/components/FicsAtGlance";
import HeroSection from "@/components/herosection";
import SuccessStoriesSection from "@/components/successstories";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-full min-h-screen bg-white ">
      
      <HeroSection/>
      <div className="max-w-7xl">
      <FicsAtGlance/>
      <SuccessStoriesSection/>
      <Event/>
    </div>
    </div>
  );
}
