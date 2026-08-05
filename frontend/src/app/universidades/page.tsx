"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const universities = [
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    alt: "Campus Universitario",
    badge: "Privada Acreditada",
    name: "Instituto Tecnológico de Innovación",
    description:
      "Referente en carreras STEM con laboratorios de última generación. Sus programas de Ingeniería de Software y Ciencia de Datos incluyen pasantías en empresas tecnológicas líderes.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    alt: "Estudiantes en el campus",
    badge: "Pública Nacional",
    name: "Universidad Nacional de Artes y Diseño",
    description:
      "Reconocida por su facultad internacional y estudios creativos de vanguardia. La opción perfecta para futuros diseñadores UX/UI, artistas digitales y comunicadores visuales.",
  },
  {
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
    alt: "Biblioteca",
    badge: "Internacional",
    name: "Escuela de Negocios y Ciencias Humanas",
    description:
      "Ofrece dobles titulaciones con alianzas en Europa y Latinoamérica. Especialmente fuerte en Psicología Organizacional, Administración y Gestión del Talento Humano.",
  },
];

export default function UniversidadesPage() {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768 && contentRef.current) {
      setTimeout(() => {
        const yOffset = -60; // offset for sticky navbar
        const element = contentRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="page-enter max-w-[1200px] mx-auto px-[16px] md:px-[40px] py-12">
      {/* Header with Back Button */}
      <div ref={contentRef} className="relative mb-12 flex flex-col items-center text-center">
        <button
          onClick={() => router.back()}
          className="md:absolute left-0 top-2 self-start mb-6 md:mb-0 flex items-center gap-1.5 text-on-surface-variant font-label text-sm font-bold hover:text-secondary transition-colors bg-surface-container-lowest px-4 py-2 rounded-full border border-outline-variant/30 blue-soft-shadow"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Volver
        </button>

        <span className="text-secondary font-label text-xs tracking-widest uppercase font-bold block mb-2 mt-2 md:mt-0">
          Directorio Académico de NOVA
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-primary font-extrabold mb-4">
          Encuentra Tu Universidad Ideal
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-base">
          NOVA centraliza la información de las instituciones más relevantes para que compares
          programas, costos y oportunidades de beca directamente desde aquí.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl border border-outline-variant/20 shadow-sm mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Busca por universidad, carrera o área..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant/60 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-label"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-xl">
            search
          </span>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <select className="w-full md:w-auto px-4 py-2.5 rounded-lg border border-outline-variant/60 focus:outline-none focus:border-secondary text-sm font-label bg-white">
            <option>Todas las Áreas</option>
            <option>STEM / Ingeniería</option>
            <option>Arte / Diseño</option>
            <option>Ciencias de la Salud</option>
            <option>Administración / Negocios</option>
          </select>
          <select className="w-full md:w-auto px-4 py-2.5 rounded-lg border border-outline-variant/60 focus:outline-none focus:border-secondary text-sm font-label bg-white">
            <option>Cualquier Ubicación</option>
            <option>Nacionales (En Línea / Presenciales)</option>
            <option>Internacionales</option>
          </select>
        </div>
      </div>

      {/* University Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {universities.map((uni) => (
          <div
            key={uni.name}
            className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <Image
              src={uni.image}
              alt={uni.alt}
              className="h-44 w-full object-cover"
              width={600}
              height={176}
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-secondary/10 text-secondary font-label text-[10px] font-bold uppercase tracking-wider block w-fit mb-3">
                  {uni.badge}
                </span>
                <h4 className="font-display text-lg font-bold text-primary mb-2">{uni.name}</h4>
                <p className="text-on-surface-variant text-xs mb-4 leading-relaxed font-body">
                  {uni.description}
                </p>
              </div>

              <div className="border-t border-outline-variant/10 pt-4 mt-2 flex justify-between items-center">
                <span className="text-xs font-label text-secondary font-bold flex items-center gap-1" />
                <button
                  onClick={() =>
                    alert("Próximamente: enlace directo a admisiones en NOVA...")
                  }
                  className="px-4 py-2 rounded-full font-label text-xs font-bold btn-secondary"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
