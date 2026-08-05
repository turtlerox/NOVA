/**
 * NOVA — Test Data
 * Datos de preguntas, carreras y resultados del test vocacional.
 * Basado en el Modelo Holland y lógica psicométrica.
 */

// ── Tipos ─────────────────────────────────────
export type ProfileKey = "software" | "design" | "data" | "management";

export interface TestOption {
  key: string;
  text: string;
  profile: ProfileKey;
}

export interface TestQuestion {
  id: number;
  question: string;
  category: string;
  options: TestOption[];
  svgId: string; // referencia a la ilustración SVG
}

export interface CareerDetail {
  title: string;
  icon: string;
  category: string;
  desc: string;
  details: string[];
}

export interface ResultData {
  title: string;
  category: string;
  description: string;
  duration: string;
  employability: string;
  salary: string;
  offers: string;
}

// ── Preguntas del Test ────────────────────────
export const questionsData: TestQuestion[] = [
  {
    id: 1,
    question: "Cuando resuelves un problema complejo, ¿qué disfrutas más del proceso?",
    category: "logic_patterns",
    svgId: "compass",
    options: [
      { key: "A", text: "Desglosarlo en pasos lógicos y encontrar el patrón oculto.", profile: "software" },
      { key: "B", text: "Imaginar soluciones creativas visuales o de interacción que nadie haya pensado.", profile: "design" },
      { key: "C", text: "Conversar y colaborar con otros para encontrar un camino consensuado.", profile: "management" },
      { key: "D", text: "Probar diferentes combinaciones de datos para evaluar de manera práctica el impacto.", profile: "data" },
    ],
  },
  {
    id: 2,
    question: "En un proyecto de equipo, ¿cuál suele ser tu rol preferido?",
    category: "team_roles",
    svgId: "team",
    options: [
      { key: "A", text: "Diseñar la estructura técnica y programar el motor principal de la solución.", profile: "software" },
      { key: "B", text: "Crear la identidad visual, colores y la experiencia del usuario.", profile: "design" },
      { key: "C", text: "Facilitar la comunicación, coordinar tareas y motivar al equipo.", profile: "management" },
      { key: "D", text: "Recopilar datos, medir resultados y asegurar la calidad de entrega.", profile: "data" },
    ],
  },
  {
    id: 3,
    question: "¿Qué tipo de herramientas o proyectos despiertan más tu curiosidad?",
    category: "tools",
    svgId: "code",
    options: [
      { key: "A", text: "Lenguajes de programación, servidores y scripts de automatización.", profile: "software" },
      { key: "B", text: "Editores de diseño, tabletas gráficas o maquetación CSS interactiva.", profile: "design" },
      { key: "C", text: "Técnicas de dinámicas grupales, coaching y resolución de conflictos.", profile: "management" },
      { key: "D", text: "Hojas de cálculo complejas, bases de datos SQL o paneles de analítica.", profile: "data" },
    ],
  },
  {
    id: 4,
    question: "Si tuvieras un fin de semana libre para aprender algo nuevo, elegirías:",
    category: "learning",
    svgId: "book",
    options: [
      { key: "A", text: "Cómo implementar una inteligencia artificial o algoritmo de búsqueda.", profile: "software" },
      { key: "B", text: "Cómo crear ilustraciones vectoriales o un prototipo de interfaz interactivo.", profile: "design" },
      { key: "C", text: "Cómo dar una presentación de alto impacto y conectar emocionalmente con tu público.", profile: "management" },
      { key: "D", text: "Cómo analizar tendencias de mercado o interpretar bases de datos complejas.", profile: "data" },
    ],
  },
  {
    id: 5,
    question: "Cuando una aplicación que usas habitualmente se actualiza, lo primero en lo que te fijas es:",
    category: "updates",
    svgId: "phone",
    options: [
      { key: "A", text: "Si corrigieron los errores técnicos y mejoraron la velocidad de respuesta.", profile: "software" },
      { key: "B", text: "Si la nueva interfaz gráfica se ve moderna y si tiene animaciones atractivas.", profile: "design" },
      { key: "C", text: "Cómo responde la comunidad y si mejora la interacción entre los usuarios.", profile: "management" },
      { key: "D", text: "Qué estadísticas, métricas y datos aporta el panel del usuario.", profile: "data" },
    ],
  },
];

// ── Detalles Académicos por Carrera ───────────
export const careerDetails: Record<ProfileKey, CareerDetail> = {
  software: {
    title: "Ingeniería en Software",
    icon: "terminal",
    category: "CIENCIAS DE LA COMPUTACIÓN • STEM",
    desc: "Dominas la lógica y la estructuración de procesos complejos. El desarrollo de sistemas eficientes, metodologías ágiles de codificación y arquitecturas en la nube serán tu espacio de desarrollo profesional diario.",
    details: [
      "<strong>Habilidades Clave:</strong> Estructuración de datos, lógica algorítmica, administración de servidores y desarrollo full-stack.",
      "<strong>Campo Laboral:</strong> Arquitecto de Software, Desarrollador de Aplicaciones, Consultor de DevOps, Ingeniero de Inteligencia Artificial.",
      "<strong>Salario Promedio:</strong> Alto crecimiento con ofertas internacionales remotas.",
      "<strong>Ruta de Aprendizaje:</strong> Algoritmos avanzados, Bases de datos no relacionales, Ciberseguridad aplicada.",
    ],
  },
  design: {
    title: "Diseño Digital",
    icon: "palette",
    category: "TECNOLOGÍA Y ARTE CREATIVO • UX/UI",
    desc: "Tu alta capacidad de abstracción visual y empatía inherente con el usuario final te hacen el perfil idóneo para diseñar productos digitales hermosos, interactivos y sumamente intuitivos.",
    details: [
      "<strong>Habilidades Clave:</strong> Composición visual, prototipado de alta fidelidad, teoría del color y metodologías de investigación de usuarios.",
      "<strong>Campo Laboral:</strong> Diseñador UX/UI, Diseñador de Producto, Director de Arte Digital, Diseñador de Interacción de Videojuegos.",
      "<strong>Salario Promedio:</strong> Alta demanda en consultoras tecnológicas y agencias digitales.",
      "<strong>Ruta de Aprendizaje:</strong> Principios de diseño inclusivo, Figma avanzado, Animaciones front-end interactivas.",
    ],
  },
  data: {
    title: "Análisis de Datos",
    icon: "query_stats",
    category: "MATEMÁTICAS APLICADAS • DATA SCIENCE",
    desc: "Tu curiosidad intrínseca por encontrar patrones estructurados dentro de grandes volúmenes de caos de información te convierte en el socio perfecto para la toma de decisiones empresariales basadas en métricas claras.",
    details: [
      "<strong>Habilidades Clave:</strong> Pensamiento matemático, estadística descriptiva, consultas SQL e interpretación de gráficos complejos.",
      "<strong>Campo Laboral:</strong> Analista de Inteligencia de Negocios (BI), Científico de Datos Junior, Consultor de Big Data.",
      "<strong>Salario Promedio:</strong> Una de las profesiones de mayor demanda salarial global.",
      "<strong>Ruta de Aprendizaje:</strong> Programación en Python/R, Herramientas de visualización (PowerBI, Tableau), Machine Learning.",
    ],
  },
  management: {
    title: "Psicología Organizacional",
    icon: "groups",
    category: "CIENCIAS SOCIALES • RECURSOS HUMANOS",
    desc: "Tu facilidad de empatía social y tu visión estratégica de liderazgo te preparan para optimizar la cultura laboral y potenciar el rendimiento del capital humano dentro de empresas modernas y tecnológicas.",
    details: [
      "<strong>Habilidades Clave:</strong> Gestión de talento humano, resolución de conflictos, psicología del comportamiento y liderazgo de equipos de alto rendimiento.",
      "<strong>Campo Laboral:</strong> Director de Cultura Organizacional, Consultor de Recursos Humanos, Coordinador de Talent Acquisition, Diseñador de Beneficios.",
      "<strong>Salario Promedio:</strong> Estabilidad con amplias opciones de crecimiento a niveles directivos.",
      "<strong>Ruta de Aprendizaje:</strong> Comunicación persuasiva, Métricas de retención de talento, Psicología de la motivación.",
    ],
  },
};

// ── Datos de Resultados por Perfil ────────────
export const resultsData: Record<ProfileKey, ResultData> = {
  software: {
    title: "Ingeniería en Software",
    category: "TOP MATCH • STEM",
    description:
      "Tu perfil analítico sobresaliente combinado con tu agilidad técnica indica que prosperarás creando soluciones lógicas, codificación robusta y arquitectura de sistemas complejos.",
    duration: "5 años",
    employability: "98%",
    salary: "$2,900 / mes",
    offers: "32 ofertas",
  },
  design: {
    title: "Diseño Digital",
    category: "TOP MATCH • CREATIVIDAD & UX",
    description:
      "La empatía con el usuario y tu gusto por resolver problemas de forma visual indican un camino increíble en diseño de interacción, comunicación visual e interfaces digitales avanzadas.",
    duration: "4 años",
    employability: "93%",
    salary: "$2,200 / mes",
    offers: "18 ofertas",
  },
  data: {
    title: "Análisis de Datos",
    category: "TOP MATCH • STEM & MATEMÁTICA",
    description:
      "Encuentras patrones donde otros ven caos. Tu fuerte pensamiento analítico te hace el candidato perfecto para optimizar modelos de negocio basándote en la ciencia de datos y visualización.",
    duration: "4.5 años",
    employability: "95%",
    salary: "$2,600 / mes",
    offers: "26 ofertas",
  },
  management: {
    title: "Psicología Organizacional",
    category: "TOP MATCH • CIENCIAS SOCIALES",
    description:
      "Tu capacidad para entender dinámicas de grupo, motivaciones internas y liderar de forma empática te encamina a ser un líder excepcional gestionando recursos humanos y cultura de innovación.",
    duration: "5 años",
    employability: "91%",
    salary: "$1,900 / mes",
    offers: "15 ofertas",
  },
};

// ── Mapa de Afinidad ─────────────────────────
export const affinityMap: Record<number, string> = {
  5: "98%",
  4: "94%",
  3: "88%",
  2: "82%",
  1: "76%",
  0: "70%",
};
