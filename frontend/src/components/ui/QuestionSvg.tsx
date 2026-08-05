/**
 * NOVA — Question SVG Illustrations
 * SVG illustrations for each test question, extracted from the original HTML.
 */

interface QuestionSvgProps {
  svgId: string;
  className?: string;
}

export default function QuestionSvg({ svgId, className = "" }: QuestionSvgProps) {
  const svgs: Record<string, React.ReactNode> = {
    compass: (
      <svg viewBox="0 0 120 120" className={`w-32 h-32 text-secondary fill-none stroke-current stroke-[2] ${className}`} xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="45" strokeDasharray="4 4" />
        <polygon points="60,20 72,48 100,48 78,66 86,94 60,76 34,94 42,66 20,48 48,48" stroke="#003461" />
        <line x1="60" y1="20" x2="60" y2="76" stroke="#006b57" strokeWidth="3" />
        <polygon points="60,76 56,66 64,66" fill="#006b57" />
      </svg>
    ),
    team: (
      <svg viewBox="0 0 120 120" className={`w-32 h-32 fill-none stroke-[2] ${className}`} xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="40" r="12" stroke="#003461" />
        <circle cx="35" cy="75" r="10" stroke="#006b57" />
        <circle cx="85" cy="75" r="10" stroke="#006b57" />
        <line x1="60" y1="52" x2="43" y2="67" stroke="#727781" strokeDasharray="2 2" />
        <line x1="60" y1="52" x2="77" y2="67" stroke="#727781" strokeDasharray="2 2" />
        <line x1="45" y1="75" x2="75" y2="75" stroke="#006b57" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 120 120" className={`w-32 h-32 fill-none stroke-[2] ${className}`} xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="70" height="50" rx="6" stroke="#003461" />
        <polyline points="40,45 33,50 40,55" stroke="#006b57" />
        <polyline points="50,55 43,50 50,45" stroke="#006b57" transform="translate(30,0) scale(-1,1) translate(-93,0)" />
        <line x1="57" y1="42" x2="63" y2="58" stroke="#006b57" />
        <path d="M 40,75 L 45,95 L 75,95 L 80,75" stroke="#727781" />
      </svg>
    ),
    book: (
      <svg viewBox="0 0 120 120" className={`w-32 h-32 fill-none stroke-[2] ${className}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M25,35 Q60,20 60,95 Q60,20 95,35" stroke="#003461" />
        <path d="M25,45 Q60,30 60,95 Q60,30 95,45" stroke="#727781" />
        <path d="M25,55 Q60,40 60,95 Q60,40 95,55" stroke="#006b57" strokeDasharray="2 2" />
        <circle cx="60" cy="20" r="4" fill="#006b57" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 120 120" className={`w-32 h-32 fill-none stroke-[2] ${className}`} xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="20" width="40" height="80" rx="6" stroke="#003461" />
        <circle cx="60" cy="90" r="4" fill="#727781" />
        <circle cx="60" cy="45" r="10" stroke="#006b57" />
        <path d="M 52,50 L 68,50 M 60,42 L 60,58" stroke="#006b57" strokeWidth="2" />
      </svg>
    ),
  };

  return svgs[svgId] || null;
}
