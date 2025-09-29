import HeroMobileScreen from "@/components/home/hero/heroMobile";
import HeroDesktop from "../components/home/hero/heroDesktop";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
      <div className="block md:hidden">
        <HeroMobileScreen />
      </div>
    </div>
  );
}
