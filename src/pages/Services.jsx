import Breadcrumb from "../Components/Breadcrumb";
import PageHero from "../Components/PageHero";
import ServicesIntroSection from "../Components/ServicesIntroSection";
import ServicesGridSection from "../Components/ServicesGridSection";
import ProcessSection from "../Components/ProcessSection";
import ServicesAdvantagesSection from "../Components/ServicesAdvantagesSection";
import ServicesCTASection from "../Components/ServicesCTASection";

export default function Services() {
  return (
    <>
      <Breadcrumb current="Services" />

      <PageHero
        title="Our Services"
        subtitle="Complete Road & Infrastructure Construction Solutions"
        bgImage="https://images.financialexpressdigital.com/2022/03/1-711.jpg"
      />

      <ServicesIntroSection />
      <ServicesGridSection />
      <ProcessSection />
      <ServicesAdvantagesSection />
      <ServicesCTASection />
    </>
  );
}
