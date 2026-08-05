"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "@/context/TestContext";

const statuses = [
  "Analizando tus patrones de pensamiento...",
  "Aplicando el Modelo Holland a tu perfil...",
  "Cruzando aptitudes con programas académicos...",
  "Generando tu hoja de ruta vocacional...",
  "¡Tu perfil NOVA está listo!",
];

export default function CargandoPage() {
  const router = useRouter();
  const { results } = useTest();
  const [progress, setProgress] = useState(10);
  const [statusText, setStatusText] = useState(statuses[0]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Forzar scroll arriba al entrar a la vista de carga
    window.scrollTo({ top: 0, behavior: "instant" });

    // If no results, redirect back to test
    if (!results) {
      router.replace("/test");
      return;
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 18, 100);

        // Update status text
        const statusIdx = Math.min(Math.floor(next / 25), statuses.length - 1);
        setStatusText(statuses[statusIdx]);

        if (next >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setTimeout(() => {
            router.push("/resultados");
          }, 600);
        }

        return next;
      });
    }, 350);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [results, router]);

  return (
    <div className="page-enter flex-grow flex items-center justify-center w-full px-4 py-12">
      <div className="bg-white rounded-3xl p-10 border border-outline-variant/30 blue-soft-shadow flex flex-col items-center w-full max-w-md">
        {/* Compass Spinner */}
        <div className="spinner-compass mb-8">
          <div className="spinner-compass-outer" />
          <div className="spinner-compass-inner">
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '50px' }}>
              explore
            </span>
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold text-primary mb-3">
          NOVA está procesando tu perfil
        </h3>
        <p className="text-on-surface-variant text-sm font-body mb-6 max-w-xs leading-relaxed">
          Nuestro algoritmo psicoprofesional está evaluando tus patrones de pensamiento,
          personalidad y aptitudes para encontrar tu match académico perfecto.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mb-3">
          <div
            className="h-full teal-gradient rounded-full loading-pulse transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-label text-xs font-bold text-secondary">{statusText}</span>
      </div>
    </div>
  );
}
