import { MotionDiv } from "@/components/lib/motion";

export default function Star({ x = 0, y = 0, delay = 0 }: { x?: number; y?: number; delay?: number }) {
    return (
        <MotionDiv
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{
                opacity: [0.6, 1, 0.4, 1],
                scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
                delay,
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                position: "absolute",
                left: `${x}vw`, // use % of viewport width
                top: `${y}vh`,  // use % of viewport height
            }}
            className="w-[2px] h-[2px] rounded-full bg-white"
        />
    );
}

