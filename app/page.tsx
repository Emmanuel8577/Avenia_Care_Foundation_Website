import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StatsSection } from "@/components/StatsSection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <StatsSection />
      <EventsSection />
    </main>
  );
}