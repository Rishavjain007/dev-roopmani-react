import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import FeaturesSection from "../Components/FeaturesSection";
import ProjectsSection from "../Components/ProjectsSection";
import TestimonialsSection from "../Components/TestimonialsSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us / Features */}
      <FeaturesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
