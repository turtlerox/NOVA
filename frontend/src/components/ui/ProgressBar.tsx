"use client";

interface ProgressBarProps {
  percent: number;
  className?: string;
  heightClass?: string;
}

export default function ProgressBar({
  percent,
  className = "",
  heightClass = "h-2",
}: ProgressBarProps) {
  return (
    <div
      className={`w-full bg-surface-container-high rounded-full overflow-hidden ${heightClass} ${className}`}
    >
      <div
        className={`${heightClass} teal-gradient rounded-full transition-all duration-500`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
