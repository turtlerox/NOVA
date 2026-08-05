"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { careerDetails, type ProfileKey } from "@/lib/test-data";

interface CareerModalProps {
  profileKey: ProfileKey | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CareerModal({ profileKey, isOpen, onClose }: CareerModalProps) {
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      // Trigger enter animation
      requestAnimationFrame(() => {
        contentRef.current?.classList.remove("scale-95", "opacity-0");
        contentRef.current?.classList.add("scale-100", "opacity-100");
      });
    }
  }, [isOpen]);

  if (!isOpen || !profileKey || !mounted) return null;

  const data = careerDetails[profileKey];
  if (!data) return null;

  function handleClose() {
    if (contentRef.current) {
      contentRef.current.classList.remove("scale-100", "opacity-100");
      contentRef.current.classList.add("scale-95", "opacity-0");
    }
    setTimeout(onClose, 200);
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full border border-outline-variant/30 blue-soft-shadow relative overflow-y-auto max-h-[90vh] transition-all transform scale-95 opacity-0 duration-300"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-secondary"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
            <span className="material-symbols-outlined text-[32px]">{data.icon}</span>
          </div>
          <div>
            <span className="text-[10px] font-label text-secondary font-bold uppercase tracking-wider block">
              {data.category}
            </span>
            <h4 className="font-display text-2xl font-extrabold text-primary leading-tight">
              {data.title}
            </h4>
          </div>
        </div>

        <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
          {data.desc}
        </p>

        <h5 className="font-display text-xs font-bold text-primary mb-3 uppercase tracking-wider">
          Información Académica Clave
        </h5>

        <ul className="flex flex-col gap-2 mb-6">
          {data.details.map((item, i) => (
            <li
              key={i}
              className="text-sm text-on-surface-variant leading-relaxed py-1 font-body border-b border-outline-variant/10"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>

        <div className="flex gap-3 mt-8">
          <button
            onClick={handleClose}
            className="px-6 py-2.5 rounded-full font-label text-xs font-bold btn-dark flex-1"
          >
            Volver
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
