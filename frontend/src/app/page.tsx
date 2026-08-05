"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CareerCard from "@/components/ui/CareerCard";
import QuizPreview from "@/components/ui/QuizPreview";
import CareerModal from "@/components/modals/CareerModal";
import { type ProfileKey } from "@/lib/test-data";

const landingCareers = [
  {
    icon: "terminal",
    iconBgClass: "bg-primary/10 text-primary",
    title: "Ingeniería en Software",
    description:
      "Si disfrutas resolver problemas con lógica, crear sistemas y construir el mundo digital, esta carrera fue diseñada para tu mente.",
    matchPercent: "98%",
    profileKey: "software",
  },
  {
    icon: "palette",
    iconBgClass: "bg-tertiary-container/30 text-on-tertiary-container",
    title: "Diseño Digital & UX",
    description:
      "Para quienes piensan visualmente y quieren que sus ideas cobren vida en pantallas que millones de personas usen cada día.",
    matchPercent: "92%",
    profileKey: "design",
  },
  {
    icon: "query_stats",
    iconBgClass: "bg-secondary/10 text-secondary",
    title: "Ciencia de Datos",
    description:
      "Si las cifras te hablan y los gráficos te cuentan historias, NOVA podría apuntarte hacia el campo profesional más demandado del siglo.",
    matchPercent: "85%",
    profileKey: "data",
  },
];

export default function HomePage() {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<ProfileKey | null>(null);

  function handleExploreCareer(profileKey: string) {
    setSelectedCareer(profileKey as ProfileKey);
    setCareerModalOpen(true);
  }

  return (
    <div className="page-enter">
      {/* ── Hero Section ───────────────────────── */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-12 md:pb-16 px-4 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label text-xs font-semibold mb-4">
              <span className="material-symbols-outlined text-[16px]">explore</span> Tu Brújula
              Vocacional
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4 leading-tight font-extrabold tracking-tight">
              ¿Sin idea de qué estudiar?{" "}
              <br />
              <span className="text-secondary bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                NOVA tiene tu respuesta.
              </span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant mb-6 max-w-md leading-relaxed">
              No adivines tu futuro. Con NOVA descubres en minutos la carrera que realmente encaja
              contigo, usando ciencia psicométrica y algoritmos inteligentes diseñados para
              orientarte de verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/test"
                className="px-8 py-4 rounded-full font-display font-bold text-white teal-gradient flex items-center justify-center gap-3 hover:scale-[1.03] transition-all shadow-lg active:scale-95 group"
              >
                Iniciar mi Test Vocacional Gratis
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Hero Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden blue-soft-shadow border-4 border-white">
              <Image
                alt="Student focused on vocational choice"
                className="w-full h-[300px] md:h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwua8mYJxF5JQF10KAXxpxPVWb0KS3sCwlyO_K_Ypp_Pscj9QcQy0Aeh_7EkbiwxGnCzQfBsK5HTvJh6Qbn8rrSs9kDP3ZdKkRzSw3R0Thyx_mdAJBurVzlt9ATH7sYNRIUZxdRQ2iroPfy5RpPNTiMMfubaxEP_uYixAXcB7MmES1dnRhltoyHgoajV6v7i1Rr8quqxp607lqABdcyc9qye5FhYsGOKgUw71f3e4odw3OFMEu_E6oPh7uyaSq-x_unRpYFbJY_aI"
                width={600}
                height={480}
                priority
              />
            </div>
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-secondary-container/40 rounded-full blur-3xl -z-10 floating-blob" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-primary-container/20 rounded-full blur-3xl -z-10 floating-blob-delayed" />
          </div>
        </div>
      </section>

      {/* ── Interactive Quiz Preview ──────────── */}
      <section className="bg-surface-container-low py-16 px-[16px] md:px-[40px] border-y border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-secondary font-label text-xs tracking-widest uppercase font-bold block mb-2">
                Vista Previa del Motor NOVA
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
                Así funciona NOVA por dentro
              </h2>
              <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                Nuestro motor psicoprofesional analiza cada respuesta con lógica difusa y el
                Modelo Holland para construir tu perfil de aptitudes real. No medimos gustos
                pasajeros, identificamos tu verdadero potencial. Prueba el simulador y
                compruébalo.
              </p>
              <div className="flex items-center gap-4 text-primary font-semibold text-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs border border-white">
                    IA
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs border border-white">
                    99%
                  </div>
                </div>
                <span>Miles de bachilleres ya tienen su perfil vocacional con NOVA.</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuizPreview />
            </div>
          </div>
        </div>
      </section>

      {/* ── Suggested Careers ─────────────────── */}
      <section className="py-20 px-[16px] md:px-[40px] max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-label text-xs tracking-widest uppercase font-bold block mb-2">
            Áreas que NOVA Identifica para Ti
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Ejemplos de Carreras que Podrías Encontrar
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-base">
            NOVA mapea tu personalidad y aptitudes con cientos de programas académicos. Aquí van
            tres perfiles que el sistema recomienda con mayor frecuencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landingCareers.map((career) => (
            <CareerCard
              key={career.profileKey}
              {...career}
              onExplore={handleExploreCareer}
            />
          ))}
        </div>
      </section>

      {/* Career Detail Modal */}
      <CareerModal
        isOpen={careerModalOpen}
        profileKey={selectedCareer}
        onClose={() => setCareerModalOpen(false)}
      />
    </div>
  );
}
