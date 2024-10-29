import Banner from "@/ServicePage/components/Banner";
import HomeSection from "@/ServicePage/components/HomeSection";
import ServiceSection from "@/ServicePage/components/ServiceSection";
import { SatisfactionSection } from "@/components/card/GrennCard";
import WasteManagementCard from "@/ServicePage/components/ManagmentsWorks";
import ExploreInsightSection from "@/ServicePage/components/ExploreInsightSection";
import FqsSection from "@/ServicePage/components/FqsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex flex-col justify-center items-center mx-20 ">
        <ServiceSection />
        <HomeSection />
        <SatisfactionSection />
        <WasteManagementCard />
        <ExploreInsightSection />
        <FqsSection />
      </div>
    </div>
  );
}
