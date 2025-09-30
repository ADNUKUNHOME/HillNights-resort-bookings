"use client";

import React, { useEffect, useState } from "react";
import { Variants, useAnimation, motion } from "framer-motion";
import { MotionDiv, MotionImg } from "@/components/lib/motion";
import Star from "./stars";
import NavBubble from "./navBubble";
import WhatsAppBooking from "./whatsappButton";
import { useNightMode } from "@/context/NightModeContext";

const DAY_IMG = "https://png.pngtree.com/png-clipart/20240921/original/pngtree-tropical-hotel-accurate-png-image_16062852.png";
const NIGHT_IMG = "https://i.insider.com/5c3e552710f0d00a9430668b?width=700";

const CONTAINER_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { stiffness: 40 } }
};

export default function HeroMobileScreen(): React.ReactElement {
    const { isNight, setIsNight } = useNightMode();
    const controls = useAnimation();

    useEffect(() => {
        const t = setTimeout(() => setIsNight(false), 2200);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <section aria-label="HillNights hero - mobile" className="relative w-full min-h-screen bg-black/5">

            {/* Crossfade background images */}
            <MotionImg
                src={NIGHT_IMG}
                alt="Night background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                initial={{ opacity: isNight ? 1 : 0 }}
                animate={{ opacity: isNight ? 1 : 0 }}
                transition={{ duration: 1.5 }}
            />
            <MotionImg
                src={DAY_IMG}
                alt="Day background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                    background: "linear-gradient(to top, #87ceeb 0%, #a0d8f1 50%, #ffffff 100%)"
                }}
                initial={{ opacity: isNight ? 0 : 1 }}
                animate={{ opacity: isNight ? 0 : 1 }}
                transition={{ duration: 1.5 }}
            />


            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                animate={{
                    background: isNight
                        ? 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                        : 'linear-gradient(to top, rgba(255,255,255,0.3), transparent)',
                }}
                transition={{ duration: 1.5 }}
                aria-hidden
            />

            {isNight && (
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
                    {[...Array(12)].map((_, i) => (
                        <Star
                            key={`m-star-${i}`}
                            x={Math.random() * 100}
                            y={Math.random() * 55}
                            delay={Math.random() * 4}
                        />
                    ))}
                </div>
            )}

            {/* Top bar: brand + toggles */}
            <header className="relative z-20 flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center ${isNight ? "text-white" : "text-black/80"} font-bold`}>HN</div>
                    <div className={`${isNight ? 'text-white' : 'text-black'} font-bold`}>HillNights</div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        aria-label="toggle-day-night"
                        onClick={() => setIsNight((s) => !s)}
                        className="p-2 rounded-md backdrop-blur-sm border border-white/10 bg-white/6 text-white"
                        title={isNight ? "Switch to Day" : "Switch to Night"}
                    >
                        {isNight ? "🌙" : "☀️"}
                    </button>
                </div>
            </header>

            {/* Main content container */}
            <MotionDiv
                className="relative z-20 px-6 pt-14 pb-28 flex flex-col items-start gap-4 max-w-xl mx-auto"
                variants={CONTAINER_VARIANTS}
                initial="hidden"
                animate={controls}
            >
                <h1 className="relative text-7xl sm:text-6xl tracking-tight font-black">
                    <span
                        className="absolute inset-0 text-black"
                        style={{
                            textShadow:
                                "1px 0 currentColor, -1px 0 currentColor, 0 1px currentColor, 0 -1px currentColor",
                        }}
                        aria-hidden="true"
                    >
                        Sleep under the stars.
                    </span>

                    <span className={`relative ${!isNight ? "bg-gradient-to-tr from-emerald-700 via-yellow-600 to-emerald-700" : "bg-gradient-to-tr from-gray-900 via-emerald-700 to-gray-900"}  bg-clip-text text-transparent`}>
                        Sleep under the stars.
                    </span>
                </h1>

                <div className="mt-2 w-full flex flex-col gap-3">
                    <div className="flex items-center justify-between w-full gap-3">
                        <div className="rounded-2xl p-3 backdrop-blur-sm border shadow-sm flex-1 flex items-center justify-between">
                            <div>
                                <div className={`${isNight ? 'text-xs text-white/70' : 'text-xs text-black/60'}`}>Next available</div>
                                <div className={`${isNight ? 'text-base font-semibold text-white' : 'text-base font-semibold text-black'}`}>Weekend • 2 nights</div>
                            </div>
                            <div className="text-right">
                                <div className={`${isNight ? 'text-sm font-bold text-white' : 'text-sm font-bold text-black'}`}>₹5,199</div>
                                <div className={`${isNight ? 'text-xs text-white/70' : 'text-xs text-black/60'}`}>per couple</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <WhatsAppBooking />
                        <button
                            type="button"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            className="flex-1 rounded-full px-4 py-3 text-sm font-medium backdrop-blur-sm border border-white/10"
                            style={{
                                background: isNight ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                color: 'white'
                            }}
                        >
                            Explore
                        </button>
                    </div>

                    <div className="flex gap-2 mt-1 flex-wrap">
                        <span className={`text-xs rounded-full px-3 py-1 ${isNight ? 'bg-white/8 text-white/90' : 'bg-black/10 text-black/90'}`}>Local guides</span>
                        <span className={`text-xs rounded-full px-3 py-1 ${isNight ? 'bg-white/8 text-white/90' : 'bg-black/10 text-black/90'}`}>Contactless</span>
                        <span className={`text-xs rounded-full px-3 py-1 ${isNight ? 'bg-white/8 text-white/90' : 'bg-black/10 text-black/90'}`}>Handpicked</span>
                    </div>
                </div>
            </MotionDiv>

            <nav className="fixed bottom-4 left-0 right-0 z-30 px-4">
                <div className="overflow-x-auto scrollbar-none bg-white/10 backdrop-blur rounded-full px-3 py-2 shadow-md border border-white/20">
                    <div className="inline-flex items-center gap-3">
                        <NavBubble label="Discover" icon={<span>🔎</span>} onClick={() => { }} alwaysShowLabel />
                        <NavBubble label="Book" icon={<span>📩</span>} onClick={() => { }} alwaysShowLabel />
                        <NavBubble label="Hosts" icon={<span>🏡</span>} onClick={() => { }} alwaysShowLabel />
                        <NavBubble label={isNight ? "Night" : "Day"} icon={isNight ? <span>🌙</span> : <span>☀️</span>} onClick={() => setIsNight(!isNight)} alwaysShowLabel />
                        <NavBubble label="Profile" icon={<span>👤</span>} onClick={() => { }} alwaysShowLabel />
                        <NavBubble label="More" icon={<span>➕</span>} onClick={() => { }} alwaysShowLabel />
                        <NavBubble label="Trips" icon={<span>🧳</span>} onClick={() => { }} alwaysShowLabel />
                        <NavBubble label="Offers" icon={<span>🎉</span>} onClick={() => { }} alwaysShowLabel />
                    </div>
                </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
        </section>
    );
}
