"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MotionDiv, MotionButton } from "@/components/lib/motion";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface FooterProps {
    isNight: boolean;
}

const notificationSound = typeof Audio !== "undefined"
    ? new Audio("/notificationEffect.wav")
    : null;

export default function ResortFooter({ isNight }: FooterProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (!notificationSound) return;
        notificationSound.volume = 0;
        notificationSound.play().catch(() => { });
        notificationSound.pause();
        notificationSound.currentTime = 0;
    }, []);

    const playNotificationSound = () => {
        if (!notificationSound) return;
        notificationSound.currentTime = 0;
        notificationSound.volume = 0.5;
        notificationSound.play().catch(() => { });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        playNotificationSound();
        toast("📩 Messaging flow coming soon!");
    };

    return (
        <footer
            id="contact"
            className={`relative w-full pt-20 pb-20 md:pb-10 ${isNight ? "text-white" : "text-gray-900"
                }`}
        >
            {/* Background */}
            <div
                className={`absolute inset-0 ${isNight
                    ? "bg-gradient-to-br from-gray-900 via-purple-950 to-gray-800"
                    : "bg-gradient-to-br from-blue-50 via-pink-100 to-white"
                    }`}
            />
            <div className="absolute inset-0 bg-grid-slate-100/10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Top Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">HillNights Resort</h3>
                        <p className={isNight ? "text-white/70" : "text-gray-600"}>
                            Escape to luxury in the heart of nature. Experience comfort,
                            adventure, and serenity at HillNights.
                        </p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} />
                                Hilltop Road, Valley View, Kerala
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} />
                                +91 7902917304
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} />
                                adnukunhome7@gmail.com
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="p-3 rounded-full border backdrop-blur-md hover:scale-110 transition"
                            >
                                <Instagram />
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-full border backdrop-blur-md hover:scale-110 transition"
                            >
                                <Facebook />
                            </a>
                        </div>
                    </MotionDiv>

                    {/* Quick Booking CTA */}
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`rounded-3xl p-8 shadow-xl backdrop-blur-lg border ${isNight
                            ? "bg-gradient-to-br from-purple-800/40 to-pink-600/30 border-white/10"
                            : "bg-gradient-to-br from-pink-50 to-purple-100 border-black/10"
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-3">Book Your Stay Today</h3>
                        <p
                            className={`text-sm mb-6 ${isNight ? "text-white/70" : "text-gray-600"
                                }`}
                        >
                            Unlock exclusive offers and premium benefits by booking directly
                            with us.
                        </p>
                        <MotionButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 rounded-2xl font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        >
                            Reserve Now
                        </MotionButton>
                    </MotionDiv>

                    {/* Enquiry Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className={`rounded-3xl p-8 shadow-xl border backdrop-blur-lg ${isNight
                            ? "bg-gray-900/80 border-white/10"
                            : "bg-white/80 border-black/10"
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-6">Quick Enquiry</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                            />
                        </div>
                        <MotionButton
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 w-full py-3 rounded-2xl font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                        >
                            Send Enquiry
                        </MotionButton>
                    </motion.form>
                </div>

                {/* Bottom Bar */}
                <div
                    className={`mt-16 pt-6 border-t text-sm flex flex-col sm:flex-row justify-between items-center gap-4 ${isNight ? "border-white/20 text-white/50" : "border-black/20 text-gray-500"
                        }`}
                >
                    <p>© {new Date().getFullYear()} HillNights Resort. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </footer>
    );
}
