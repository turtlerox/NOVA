"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTest } from "@/context/TestContext";
import { resultsData, careerDetails, type ProfileKey } from "@/lib/test-data";
import { getSecondaryMatchPercent } from "@/lib/scoring";
import TraitBar from "@/components/ui/TraitBar";
import CareerModal from "@/components/modals/CareerModal";

export default function ResultadosPage() {
  const router = useRouter();
  const { results, resetTest } = useTest();

  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<ProfileKey | null>(null);

  useEffect(() => {
    if (!results) {
      router.replace("/test");
    }
  }, [results, router]);

  // Render nothing while redirecting or if no results
  if (!results) {
    return null;
  }

  const topResult = resultsData[results.topProfile];
  const topDetail = careerDetails[results.topProfile];

  function handleExploreCareer(profileKey: string) {
    setSelectedCareer(profileKey as ProfileKey);
    setCareerModalOpen(true);
  }

  function handleResetTest() {
    resetTest();
    router.push("/test");
  }

  return (
    <div className="page-enter max-w-[1200px] mx-auto px-[16px] md:px-[40px] py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-5xl text-primary font-extrabold mb-3">
          ¡Tu perfil NOVA está listo!
        </h2>
        <p className="text-on-surface-variant text-lg font-body">
          Aquí están tus carreras de mayor compatibilidad, respaldadas por datos reales.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* ── Left: Top Match Card ────────────── */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/30 blue-soft-shadow relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-2 teal-gradient" />

          <div>
            {/* Tags */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <div className="flex gap-2">
                <span className="px-3 py-1.5 rounded-md bg-primary/5 text-primary font-label text-xs font-bold uppercase tracking-wider">
                  {topResult.category}
                </span>
                <span className="px-3 py-1.5 rounded-md bg-secondary/10 text-secondary font-label text-xs font-bold uppercase tracking-wider">
                  TECNOLOGÍA
                </span>
              </div>
              <div className="text-right">
                <span className="font-label text-2xl font-black text-secondary leading-none">
                  {results.matchPercentage}
                </span>
                <span className="text-[10px] font-label text-on-surface-variant uppercase font-bold block">
                  COMPATIBILIDAD
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-4">
              {topResult.title}
            </h3>
            <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
              {topResult.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-surface-container-low rounded-2xl mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase font-bold mb-1">
                  Duración
                </span>
                <span className="font-display text-lg font-bold text-primary">
                  {topResult.duration}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase font-bold mb-1">
                  Empleabilidad
                </span>
                <span className="font-display text-lg font-bold text-primary">
                  {topResult.employability}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase font-bold mb-1">
                  Salario Inicial
                </span>
                <span className="font-display text-lg font-bold text-primary">
                  {topResult.salary}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase font-bold mb-1">
                  Universidades
                </span>
                <span className="font-display text-lg font-bold text-primary">
                  {topResult.offers}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-outline-variant/20 pt-6">
            <Link
              href="/universidades"
              className="px-6 py-3.5 rounded-full font-label text-sm font-bold btn-dark flex items-center justify-center gap-2 flex-1 shadow-md"
            >
              Ver universidades relacionadas{" "}
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </Link>
          </div>
        </div>

        {/* ── Right: Psychometric Traits ──────── */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/30 blue-soft-shadow flex flex-col justify-between">
          <div>
            <span className="text-secondary font-label text-xs tracking-widest uppercase font-bold block mb-1">
              MAPA PSICOMÉTRICO NOVA
            </span>
            <h3 className="font-display text-xl font-bold text-primary mb-6">
              Tus rasgos vocacionales
            </h3>

            <div className="flex flex-col gap-6">
              <TraitBar icon="psychology" label="Lógica analítica" value={results.traits.logica} />
              <TraitBar icon="palette" label="Creatividad" value={results.traits.creatividad} />
              <TraitBar icon="groups" label="Empatía social" value={results.traits.empatia} />
              <TraitBar icon="leaderboard" label="Liderazgo" value={results.traits.liderazgo} />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/20">
            <button
              onClick={handleResetTest}
              className="w-full py-3 rounded-full font-label text-sm font-bold border-2 border-dashed border-outline text-on-surface-variant hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">replay</span> Volver a
              hacer el Test NOVA
            </button>
          </div>
        </div>
      </div>

      {/* ── Secondary Careers ─────────────────── */}
      <div>
        <h4 className="font-display text-lg font-bold text-primary mb-4">
          Otras carreras donde NOVA ve tu potencial
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.secondaryProfiles.map((prof) => {
            const details = careerDetails[prof];
            const matchPercent = getSecondaryMatchPercent(results.counts, prof);

            return (
              <div
                key={prof}
                className="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col justify-between hover:border-secondary transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-wider">
                      {details.category}
                    </span>
                    <span className="font-label text-sm font-bold text-secondary">
                      {matchPercent}% Compatibilidad
                    </span>
                  </div>
                  <h5 className="font-display text-base font-bold text-primary mb-1">
                    {details.title}
                  </h5>
                  <p className="text-on-surface-variant text-xs font-body leading-relaxed mb-4">
                    {details.desc.substring(0, 110)}...
                  </p>
                </div>
                <button
                  onClick={() => handleExploreCareer(prof)}
                  className="text-xs font-label font-bold text-secondary hover:underline cursor-pointer flex items-center gap-1"
                >
                  Ver detalle académico{" "}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Detail Modal */}
      <CareerModal
        isOpen={careerModalOpen}
        profileKey={selectedCareer}
        onClose={() => setCareerModalOpen(false)}
      />
    </div>
  );
}
