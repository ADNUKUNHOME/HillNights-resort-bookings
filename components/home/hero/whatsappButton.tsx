
"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBooking({ isNight = true }: { isNight?: boolean }) {
    const handleClick = () => {
        const text = "Thanks for visiting my web. It's a demo. will be added real data later ☺";
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <div className="flex items-center gap-4">
            {/* WhatsApp Button with Icon */}
            <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg hover:scale-105 transition-transform duration-200"
                onClick={handleClick}
                type="button"
                aria-label="Book via WhatsApp"
            >
                <FaWhatsapp className="text-white text-lg" />
            </button>

            {/* Text outside the button - color adapts to night/day */}
            <span className={`${isNight ? "text-white" : "text-black"} font-bold text-md`} >
                Book via WhatsApp
            </span>
        </div >
    );
}