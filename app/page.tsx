'use client';

import HeroMobileScreen from "@/components/home/hero/heroMobile";
import HeroDesktop from "../components/home/hero/heroDesktop";
import ExperiencesMobile from "../components/home/experiences/experiencesMobile";
import ExperiencesDesktop from "@/components/home/experiences/experientcesDesktop";
import { useNightMode } from "@/context/NightModeContext";
import Accommodations from "@/components/home/accommodations/accommodations";
import Gallery from "@/components/home/gallery/gallery";
import BookingSection from "@/components/home/bookingSection/bookingSection";
import ResortFooter from "@/components/common/footer/footer";
import GlobalNav from "@/components/common/nav/globalNav";

export default function Home() {
  const { isNight } = useNightMode();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section*/}
      <section id="hero">
        <div className="hidden md:block">
          <HeroDesktop />
        </div>
        <div className="block md:hidden">
          <HeroMobileScreen />
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences">
        <div className="hidden md:block">
          <ExperiencesDesktop isNight={isNight} />
        </div>
        <div className="block md:hidden">
          <ExperiencesMobile isNight={isNight} />
        </div>
      </section>

      {/* Accommodations */}
      <section id="accommodations">
        <Accommodations isNight={isNight} />
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery isNight={isNight} />
      </section>

      {/* Booking */}
      <section id="booking">
        <BookingSection isNight={isNight} />
      </section>

      {/* Footer */}
      <section id="footer">
        <ResortFooter isNight={isNight} />
      </section>

      {/* Global Nav */}
      <GlobalNav />
    </div>
  );
}
