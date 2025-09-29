export default function FeatureChip({ label, desc, isNight }: { label: string; desc: string; isNight: boolean }) {
    return (
        <div
            className={`rounded-xl px-3 py-2 text-sm border ${isNight
                ? "bg-white/5 border-white/40 text-white/70"
                : "bg-black/5 border-black/20 text-black/70"
                }`}
        >
            <div className="font-semibold">{label}</div>
            <div className="text-xs">{desc}</div>
        </div>
    );
}