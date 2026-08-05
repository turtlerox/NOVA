"use client";

import Link from "next/link";

interface CareerCardProps {
  icon: string;
  iconBgClass?: string;
  title: string;
  description: string;
  matchPercent: string;
  profileKey: string;
  onExplore: (profileKey: string) => void;
}

export default function CareerCard({
  icon,
  iconBgClass = "bg-primary/10 text-primary",
  title,
  description,
  matchPercent,
  profileKey,
  onExplore,
}: CareerCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 blue-soft-shadow border border-outline-variant/20 hover:translate-y-[-6px] transition-all duration-300 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-6">
        <div
          className={`p-3.5 ${iconBgClass} rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300`}
        >
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label text-xs font-bold">
          {matchPercent} Compatibilidad
        </span>
      </div>

      <h3 className="font-display text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{description}</p>

      <button
        onClick={() => onExplore(profileKey)}
        className="w-full py-3 rounded-full font-label text-xs font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-white"
      >
        Explorar carrera{" "}
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          north_east
        </span>
      </button>
    </div>
  );
}
