import Event from "@/components/event/event";
import FicsAtGlance from "@/components/FicsAtGlance";
import Timeline from "@/components/GenesisofFics";
import HeroSection from "@/components/herosection";
import Partners from "@/components/partners/partners";
import StatisticsSection from "@/components/statistics";
import SuccessStoriesSection from "@/components/successstories";


export default function Home() {
  return (
    <div className="overflow-hidden overflow-y-hidden" >
      
      <HeroSection/>
      <div >
      <FicsAtGlance/>
      <SuccessStoriesSection/>
      <Event/>
      <Timeline/>
      <Partners/>
      <StatisticsSection/>
      </div>
    </div>
  );
}
