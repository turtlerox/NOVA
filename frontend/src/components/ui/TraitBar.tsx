"use client";

interface TraitBarProps {
  icon: string;
  label: string;
  value: number;
}

export default function TraitBar({ icon, label, value }: TraitBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-label text-sm font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-lg">{icon}</span>
          {label}
        </span>
        <span className="font-label text-sm font-black text-secondary">{value}%</span>
      </div>
      <div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="h-full teal-gradient rounded-full transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
