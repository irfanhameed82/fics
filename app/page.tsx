import Event from "@/components/event/event";
import FicsAtGlance from "@/components/FicsAtGlance";
import HeroSection from "@/components/herosection/Herosection";
import Partners from "@/components/partners/partners";
import StatisticsFics from "@/components/statsfics";
import SuccessStoriesSection from "@/components/successstories";

export default function Home() {
  return (
    <div className="overflow-hidden overflow-y-hidden" >
      <HeroSection/>
      <div >
        <StatisticsFics/>
      <FicsAtGlance/>
      <section id="event">
      <Event/>
      </section>
      <SuccessStoriesSection/>
      <Partners/>
      </div>
    </div>
  );
}
