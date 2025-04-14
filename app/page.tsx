import FicsAtGlance from "@/components/FicsAtGlance";
import HeroSection from "@/components/herosection";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <HeroSection/>
      <FicsAtGlance/>
    </div>
  );
}
