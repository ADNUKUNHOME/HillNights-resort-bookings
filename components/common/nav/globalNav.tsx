"use client";

import React from "react";
import { Home, Image, Bed, Calendar, Map, Moon, Sun } from "lucide-react";
import NavBubble from "./navBubble";
import { useNightMode } from "@/context/NightModeContext";

const NAV_ITEMS = [
    { label: "Experiences", icon: <Map size={16} />, target: "experiences" },
    { label: "Accommodations", icon: <Bed size={16} />, target: "accommodations" },
    { label: "Gallery", icon: <Image size={16} />, target: "gallery" },
    { label: "Booking", icon: <Calendar size={16} />, target: "booking" },
    { label: "Footer", icon: <Home size={16} />, target: "footer" },
];

export default function GlobalNav() {
    const { isNight, setIsNight } = useNightMode();

    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Desktop: vertical left nav */}
            <div className="hidden md:flex fixed left-1 top-1/4 flex-col gap-4 z-50">
                {NAV_ITEMS.map((item) => (
                    <NavBubble
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        onClick={() => scrollTo(item.target)}
                    />
                ))}
                <NavBubble
                    label={isNight ? "Night" : "Day"}
                    icon={isNight ? <Moon size={16} /> : <Sun size={16} />}
                    onClick={() => setIsNight(!isNight)}
                />
            </div>

            {/* Mobile: horizontal bottom nav */}
            <nav className="flex md:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
                <div className="overflow-x-auto scrollbar-none bg-white/10 backdrop-blur rounded-full px-3 py-2 shadow-md border border-white/20">
                    <div className="inline-flex items-center gap-3">
                        {NAV_ITEMS.map((item) => (
                            <NavBubble
                                key={item.label}
                                label={item.label}
                                icon={item.icon}
                                onClick={() => scrollTo(item.target)}
                                alwaysShowLabel
                            />
                        ))}

                        {/* Mobile-only Day/Night toggle */}
                        <NavBubble
                            label={isNight ? "Night" : "Day"}
                            icon={isNight ? <span>🌙</span> : <span>☀️</span>}
                            onClick={() => setIsNight(!isNight)}
                            alwaysShowLabel
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}
