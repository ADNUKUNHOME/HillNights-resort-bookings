"use client";

import React from "react";
import { MotionButton, MotionDiv } from "@/components/lib/motion";

type VoidFn = () => void;

const BORDER_COLORS = [
    "rgba(255,0,255,0.8)",
    "rgba(0,255,255,0.8)",
    "rgba(255,255,0,0.8)",
    "rgba(255,0,255,0.8)",
];

export default function NavBubble({
    label,
    icon,
    iconColor = "#fff",
    onClick,
    alwaysShowLabel = false,
}: {
    label: string;
    icon: React.ReactNode;
    iconColor?: string;
    onClick: VoidFn;
    alwaysShowLabel?: boolean;
}) {
    const buttonVariants = alwaysShowLabel
        ? { initial: { width: "11rem" }, hover: { width: "11rem" } }
        : { initial: { width: "3.5rem" }, hover: { width: "11rem" } };

    const labelVariants = alwaysShowLabel
        ? { initial: { opacity: 1, x: 0 }, hover: { opacity: 1, x: 0 } }
        : { initial: { opacity: 0, x: -10 }, hover: { opacity: 1, x: 0 } };

    return (
        <MotionButton
            whileHover="hover"
            initial="initial"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={onClick}
            className="relative flex items-center rounded-full overflow-hidden py-2 pr-4 pl-2 text-sm text-white shadow group cursor-pointer"
            style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)" }}
        >
            {/* Animated Gradient Border */}
            <MotionDiv
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                    borderImageSource: [
                        `linear-gradient(45deg, ${BORDER_COLORS.join(", ")})`,
                        `linear-gradient(135deg, ${BORDER_COLORS.reverse().join(", ")})`,
                        `linear-gradient(225deg, ${BORDER_COLORS.join(", ")})`,
                    ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                    border: "2px solid",
                    borderRadius: "9999px",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) padding-box",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            {/* Icon with fixed color */}
            <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center">
                <MotionDiv style={{ color: iconColor }}>{icon}</MotionDiv>
            </div>

            {/* Label */}
            <MotionDiv
                variants={labelVariants}
                transition={{ duration: 0.25 }}
                className="ml-3 flex flex-col text-left whitespace-nowrap relative z-10"
                aria-hidden={false}
            >
                <span className="text-xs font-medium">{label}</span>
                <span className="text-[10px] text-white/70">Explore</span>
            </MotionDiv>
        </MotionButton>
    );
}
