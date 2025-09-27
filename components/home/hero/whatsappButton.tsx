"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBooking() {
    const handleClick = () => {
        const text = "Hi, I'm interested in booking a weekend stay.";
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <div className="flex items-center gap-4">
            {/* WhatsApp Button with Icon */}
            <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg hover:scale-105 transition-transform duration-200"
                onClick={handleClick}
                type="button"
            >
                <FaWhatsapp className="text-white text-lg" />
            </button>

            {/* Text outside the button */}
            <span className="text-black font-semibold text-md">
                Book via WhatsApp
            </span>
        </div>
    );
}
