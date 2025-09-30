"use client";

import React, { useEffect } from "react";
import { useAnimation, Variants } from "framer-motion";
import WhatsAppBooking from "./whatsappButton";
import { MotionDiv, MotionImg } from "@/components/lib/motion";
import Star from "./stars";
import NavBubble from "./navBubble";
import FeatureChip from "./featureChip";
import { useNightMode } from "@/context/NightModeContext";

const SKY_VARIANTS: Variants = {
    night: { background: "linear-gradient(180deg,#071229 0%, #0b2340 60%, #082028 100%)" },
    day: { background: "linear-gradient(180deg,#8fd3ff 0%, #c7e9ff 50%, #eafaf8 100%)" },
};

const STAR_VARIANTS: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

export default function HeroDesktop(): React.ReactElement {
    const { isNight, setIsNight } = useNightMode();

    const skyControls = useAnimation();
    const sunControls = useAnimation();
    const starsControls = useAnimation();
    const cloudsControls = useAnimation();

    // Auto switch from night → day on first view
    useEffect(() => {
        const timer = setTimeout(() => setIsNight(false), 2500);
        return () => clearTimeout(timer);
    }, [setIsNight]);

    useEffect(() => {
        (async () => {
            if (isNight) {
                starsControls.start("visible");
                await skyControls.start("night", { duration: 3, ease: "easeInOut" });
                await sunControls.start("hidden");
            } else {
                starsControls.start("hidden");
                await skyControls.start("day", { duration: 3, ease: "easeInOut" });
                await sunControls.start("visible");
                cloudsControls.start({
                    x: [-30, 30, -30],
                    transition: { repeat: Infinity, duration: 18, ease: "linear" },
                });
            }
        })();
    }, [isNight, skyControls, sunControls, starsControls, cloudsControls]);

    return (
        <section
            aria-label="HillNights hero"
            className="relative w-full min-h-screen overflow-hidden"
        >
            {/* Sky background */}
            <MotionDiv
                animate={skyControls}
                initial="night"
                variants={SKY_VARIANTS}
                className="absolute inset-0 -z-20 transition-colors duration-1000"
            />

            {/* Stars */}
            <MotionDiv
                initial="visible"
                animate={starsControls}
                variants={STAR_VARIANTS}
                className="pointer-events-none absolute left-12 top-12 z-10 flex gap-2"
            >
                <div className="pointer-events-none absolute inset-0 z-10">
                    {[...Array(50)].map((_, i) => (
                        <Star
                            key={i}
                            x={Math.random() * 100}
                            y={Math.random() * 100}
                            delay={Math.random() * 5}
                        />
                    ))}
                </div>
            </MotionDiv>

            {/* Left vertical menu */}
            <nav className="fixed left-2 top-1/4 z-30 flex flex-col gap-4">
                <NavBubble label="Discover" icon="🔎" onClick={() => { }} />
                <NavBubble label="Experiences" icon="🎒" onClick={() => { }} />
                <NavBubble label="Book Direct" icon="📩" onClick={() => { }} />
                <NavBubble label="Local Hosts" icon="🏡" onClick={() => { }} />
                <NavBubble
                    label={isNight ? "Switch to Day" : "Switch to Night"}
                    icon={isNight ? "🌙" : "☀️"}
                    onClick={() => setIsNight(!isNight)}
                />
            </nav>

            {/* Promo chip */}
            <MotionDiv
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute right-8 top-12 z-30 rounded-xl backdrop-blur-md border px-4 py-2 bg-white/10 border-white/8 text-white"
            >
                <div className="text-xs">Launch Offer</div>
                <div className="text-sm font-semibold">Save up to 15% — Direct Bookings</div>
            </MotionDiv>

            {/* Main content */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 py-12 flex items-center gap-8">
                {/* Left column */}
                <div className="w-full md:w-5/12">
                    <div className="mb-6">
                        <div className="text-lg font-extrabold uppercase tracking-wider text-white/70">
                            HillNights
                        </div>
                        <h1
                            className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight text-white"
                        >
                            Sleep under the stars. Wake to mountain sunrises.
                        </h1>
                        <p
                            className={`mt-4 max-w-md ${isNight ? "text-white/60" : "text-black/60"
                                }`}
                        >
                            Curated boutique stays in Wayanad — packages, local guides, and experiences organized for you. Book direct & save.
                        </p>
                    </div>

                    {/* Booking card */}
                    <MotionDiv
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className={`mt-6 rounded-2xl p-4 backdrop-blur-sm border shadow-lg hover:shadow-2xl max-w-sm ${isNight ? "bg-white/6 border-white/10" : "bg-black/5 border-black/10"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <div
                                    className={`text-xs ${isNight ? "text-white/60" : "text-black/60"
                                        }`}
                                >
                                    Next available
                                </div>
                                <div
                                    className={`text-lg font-semibold ${isNight ? "text-white/90" : "text-black/90"
                                        }`}
                                >
                                    Weekend • 2 nights
                                </div>
                            </div>
                            <div className="text-right">
                                <div
                                    className={`text-sm font-bold ${isNight ? "text-white/80" : "text-black/80"
                                        }`}
                                >
                                    ₹5,199
                                </div>
                                <div
                                    className={`text-xs ${isNight ? "text-white/70" : "text-black/70"
                                        }`}
                                >
                                    per couple
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 flex gap-3 items-center justify-between">
                            <WhatsAppBooking />
                            <button
                                className={`rounded-full border-none px-4 py-2 text-sm backdrop-blur-sm ${isNight
                                    ? "bg-white/20 text-white"
                                    : "bg-black/10 text-black"
                                    }`}
                                onClick={() =>
                                    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                                }
                                type="button"
                            >
                                Explore
                            </button>
                        </div>
                    </MotionDiv>

                    {/* Micro features */}
                    <div className="mt-6 flex gap-4 flex-wrap">
                        <FeatureChip label="Local guides" desc="trusted" isNight={isNight} />
                        <FeatureChip label="Contactless check-in" desc="easy" isNight={isNight} />
                        <FeatureChip label="Handpicked stays" desc="curated" isNight={isNight} />
                    </div>
                </div>

                {/* Right column */}
                <div className="hidden md:flex md:w-7/12 items-center justify-center relative">
                    {/* Floating cloud */}
                    <MotionImg
                        src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cloud-PNG/Realistic_Cloud_PNG_Transparent_Clip_Art_Image.png?m=1629830700"
                        alt="cloud"
                        className={`absolute left-[-6%] top-0 w-80 ${isNight ? "opacity-30" : "opacity-95"} z-50`}
                        style={{ pointerEvents: "none" }}
                        animate={{ x: [-100, 20, -100] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />

                    {/* Resort card with smooth cross-fade images */}
                    <MotionDiv
                        initial="hidden"
                        animate="visible"
                        className="relative w-[680px] max-w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/25"
                    >
                        {/* Overlay gradient */}
                        <MotionDiv
                            className="absolute inset-0 z-20 pointer-events-none"
                            initial={{ opacity: isNight ? 0.6 : 0.2 }}
                            animate={{
                                opacity: isNight ? [0.6, 0.4, 0.6] : [0.2, 0.1, 0.2]
                            }}
                            transition={{ duration: 18, repeat: Infinity }}
                            style={{
                                background: isNight
                                    ? "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.0))"
                                    : "linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0.0))"
                            }}
                        />

                        {/* Day image */}
                        <MotionImg
                            src="https://png.pngtree.com/png-clipart/20240921/original/pngtree-tropical-hotel-accurate-png-image_16062852.png"
                            alt="HillNights resort day"
                            className="block w-full h-[430px] object-cover absolute inset-0"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isNight ? 0 : 1 }}
                            transition={{ duration: 2 }}
                        />

                        {/* Night image */}
                        <MotionImg
                            src="https://i.insider.com/5c3e552710f0d00a9430668b?width=700"
                            alt="HillNights resort night"
                            className="block w-full h-[430px] object-cover absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isNight ? 1 : 0 }}
                            transition={{ duration: 5 }}
                        />

                        {/* Keep a container so height doesn’t collapse */}
                        <div className="relative block w-full h-[430px]" />

                        {/* Tag bottom left */}
                        <div className="absolute left-6 bottom-6 z-30">
                            <div
                                className={`rounded-2xl px-4 py-2 backdrop-blur-sm border ${isNight
                                    ? "bg-white/8 border-white/10 text-white/90"
                                    : "bg-black/10 border-black/20 text-black/90"
                                    }`}
                            >
                                <div className="text-xs">Featured</div>
                                <div className="text-sm font-semibold">Plantation Stay • 2 nights</div>
                            </div>
                        </div>
                    </MotionDiv>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </section>
    );
}