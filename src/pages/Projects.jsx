import { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import PageHero from "../Components/PageHero";
import ProjectsIntroSection from "../Components/ProjectsIntroSection";
import ProjectFilter from "../Components/ProjectFilter";
import ProjectsGridSection from "../Components/ProjectsGridSection";
import OngoingProjectsSection from "../Components/OngoingProjectsSection";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Breadcrumb current="Projects" />

      <PageHero
        title="Our Projects"
        subtitle="Building India's Infrastructure – One Project at a Time"
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKUlNFEXm9rdZSjGw3a56jd2yUci3AIIQ0A&s"
      />

      <ProjectsIntroSection />

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <ProjectFilter active={filter} onChange={setFilter} />
          <ProjectsGridSection filter={filter} />
        </div>
      </section>

      <OngoingProjectsSection />
    </>
  );
}
