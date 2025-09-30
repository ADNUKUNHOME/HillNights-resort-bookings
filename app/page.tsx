'use client';

import HeroMobileScreen from "@/components/home/hero/heroMobile";
import HeroDesktop from "../components/home/hero/heroDesktop";
import ExperiencesMobile from "../components/home/experiences/experiencesMobile";
import ExperiencesDesktop from "@/components/home/experiences/experientcesDesktop";
import { useNightMode } from "@/context/NightModeContext";

export default function Home() {
  const { isNight } = useNightMode();
  return (
    <div>
      {/* Hero Section */}
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
      <div className="block md:hidden">
        <HeroMobileScreen />
      </div>

      {/* Experiences Section */}
      <div className="hidden md:block">
        <ExperiencesDesktop isNight={isNight} />
      </div>
      <div className="block md:hidden">
        <ExperiencesMobile isNight={isNight} />
      </div>
    </div>
  );
}