import Event from "@/components/event/event";
import FicsAtGlance from "@/components/FicsAtGlance";
import HeroSection from "@/components/herosection";
import Partners from "@/components/partners/partners";
import StatisticsSection from "@/components/statistics";
import SuccessStoriesSection from "@/components/successstories";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-full min-h-screen bg-white ">
      
      <HeroSection/>
      <div className="max-w-7xl">
      <FicsAtGlance/>
      <SuccessStoriesSection/>
      <Event/>
      <Partners/>
      <StatisticsSection/>
    </div>
    </div>
  );
}
