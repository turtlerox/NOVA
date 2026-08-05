import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "NOVA - Navegador de Orientación Vocacional Académica",
  description:
    "Descubre en minutos la carrera que realmente encaja contigo. NOVA usa ciencia psicométrica y algoritmos inteligentes para orientarte vocacionalmente.",
  keywords: "orientación vocacional, test vocacional, NOVA, carreras, universidades, Holland",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="light antialiased">
      <head>
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col font-body">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
