/**
 * NOVA — Scoring Engine
 * Lógica de cálculo de resultados del test vocacional.
 */

import { type ProfileKey, affinityMap } from "./test-data";

export interface ProfileCounts {
  software: number;
  design: number;
  data: number;
  management: number;
}

export interface TraitScores {
  logica: number;
  creatividad: number;
  empatia: number;
  liderazgo: number;
}

export interface TestResults {
  topProfile: ProfileKey;
  counts: ProfileCounts;
  traits: TraitScores;
  matchPercentage: string;
  secondaryProfiles: ProfileKey[];
}

/**
 * Calcula los resultados del test a partir de las respuestas seleccionadas.
 */
export function calculateTestResults(
  selectedAnswers: Record<number, ProfileKey>
): TestResults {
  // Contar frecuencias de cada perfil
  const counts: ProfileCounts = { software: 0, design: 0, data: 0, management: 0 };

  Object.values(selectedAnswers).forEach((profile) => {
    counts[profile] = (counts[profile] || 0) + 1;
  });

  // Encontrar el perfil ganador (Top Match)
  let topProfile: ProfileKey = "software";
  let maxCount = -1;

  for (const [profile, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      topProfile = profile as ProfileKey;
    }
  }

  // Calcular rasgos basados en respuestas
  let logica = 50 + counts.software * 10 + counts.data * 8 - counts.management * 4;
  let creatividad = 45 + counts.design * 12 + counts.software * 5 - counts.data * 5;
  let empatia = 40 + counts.management * 14 + counts.design * 6 - counts.software * 6;
  let liderazgo = 48 + counts.management * 10 + counts.data * 6 + counts.software * 4;

  // Normalizar entre 60 y 98%
  logica = Math.max(60, Math.min(98, logica));
  creatividad = Math.max(60, Math.min(98, creatividad));
  empatia = Math.max(60, Math.min(98, empatia));
  liderazgo = Math.max(60, Math.min(98, liderazgo));

  // Porcentaje de afinidad
  const matchPercentage = affinityMap[counts[topProfile]] || "85%";

  // Perfiles secundarios (todos menos el top)
  const allProfiles: ProfileKey[] = ["software", "design", "data", "management"];
  const secondaryProfiles = allProfiles.filter((p) => p !== topProfile);

  return {
    topProfile,
    counts,
    traits: { logica, creatividad, empatia, liderazgo },
    matchPercentage,
    secondaryProfiles,
  };
}

/**
 * Calcula el porcentaje de compatibilidad para un perfil secundario.
 */
export function getSecondaryMatchPercent(counts: ProfileCounts, profile: ProfileKey): number {
  return Math.max(68, Math.round(70 + (counts[profile] || 0) * 8));
}
