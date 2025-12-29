import Breadcrumb from "../Components/Breadcrumb";
import PageHero from "../Components/PageHero";
import AboutCompanySection from "../Components/AboutCompanySection";
import VisionMissionSection from "../Components/VisionMissionSection";
import LeadershipSection from "../Components/LeadershipSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";

export default function About() {
  return (
    <>
      <Breadcrumb current="About Us" />

      <PageHero
        title="About Our Company"
        subtitle="Building Strong Foundations for a Better Tomorrow"
      />

      <AboutCompanySection />

      <VisionMissionSection />

      <LeadershipSection />

      <WhyChooseUsSection />
    </>
  );
}
