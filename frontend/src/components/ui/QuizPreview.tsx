"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuizPreview() {
  const [selectedIndex, setSelectedIndex] = useState(1); // "Diseñar interfaces visuales" selected by default
  const [progress, setProgress] = useState(40);

  const options = [
    { text: "Crear y programar sistemas", value: 100 },
    { text: "Diseñar interfaces visuales", value: 80 },
    { text: "Analizar datos y tendencias", value: 50 },
    { text: "Liderar equipos y personas", value: 20 },
  ];

  function handleSelect(index: number) {
    setSelectedIndex(index);
    setProgress(options[index].value);
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 blue-soft-shadow border border-outline-variant/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 teal-gradient" />

      <div className="flex justify-between items-center mb-6">
        <h3 className="font-display text-lg font-bold text-primary">Descúbrete en acción</h3>
        <div className="flex items-center gap-2">
          <span className="font-label text-xs text-secondary font-bold">
            Progreso {progress}%
          </span>
          <span className="material-symbols-outlined text-secondary text-lg">analytics</span>
        </div>
      </div>

      <div className="w-full h-2 bg-surface-container-high rounded-full mb-6 overflow-hidden">
        <div
          className="h-full teal-gradient rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="font-display text-lg font-bold text-on-surface mb-6">
        ¿Cuál de estas actividades te haría perder la noción del tiempo?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`p-4 rounded-xl border text-left transition-all font-label text-sm flex justify-between items-center ${
              selectedIndex === i
                ? "border-secondary bg-secondary/10 font-semibold"
                : "border-outline-variant hover:border-secondary hover:bg-secondary/5 group font-medium"
            }`}
          >
            {opt.text}
            <span
              className={`material-symbols-outlined text-secondary transition-all ${
                selectedIndex === i ? "" : "opacity-0 group-hover:opacity-100"
              }`}
              style={
                selectedIndex === i
                  ? { fontVariationSettings: "'FILL' 1" }
                  : {}
              }
            >
              check_circle
            </span>
          </button>
        ))}
      </div>

      {/* Notificación interactiva */}
      <div className="mt-6 p-4 rounded-xl bg-primary/5 text-primary text-xs font-semibold flex items-center justify-between border border-primary/10">
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-secondary animate-pulse">
            info
          </span>
          Esto es solo una muestra. El test completo de NOVA genera tu perfil personalizado.
        </span>
        <Link
          href="/test"
          className="underline hover:text-secondary cursor-pointer"
        >
          Hacer mi Test NOVA &rarr;
        </Link>
      </div>
    </div>
  );
}
