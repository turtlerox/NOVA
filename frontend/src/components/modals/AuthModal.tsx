"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface AuthModalProps {
  isOpen: boolean;
  initialMode: "login" | "signup";
  onClose: () => void;
}

export default function AuthModal({ isOpen, initialMode, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      requestAnimationFrame(() => {
        contentRef.current?.classList.remove("scale-95", "opacity-0");
        contentRef.current?.classList.add("scale-100", "opacity-100");
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function handleClose() {
    if (contentRef.current) {
      contentRef.current.classList.remove("scale-100", "opacity-100");
      contentRef.current.classList.add("scale-95", "opacity-0");
    }
    setTimeout(onClose, 200);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      mode === "login"
        ? "¡Bienvenido de vuelta a NOVA!"
        : "¡Tu cuenta NOVA ha sido creada exitosamente!"
    );
    handleClose();
  }

  const isLogin = mode === "login";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-8 max-w-md w-full border border-outline-variant/30 blue-soft-shadow relative overflow-hidden transition-all transform scale-95 opacity-0 duration-300"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-secondary"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Logo */}
        <div className="flex justify-center items-center h-24 w-full mb-6">
          <Image
            src="/logo_NOVA-nuevo.png"
            alt="NOVA Logo"
            width={176}
            height={176}
            className="h-44 w-44 max-w-none object-contain transition-transform hover:scale-105 duration-500 ease-out"
          />
        </div>

        <h3 className="font-display text-2xl font-bold text-primary text-center mb-2">
          {isLogin ? "Bienvenido a NOVA" : "Comienza con NOVA"}
        </h3>
        <p className="text-on-surface-variant text-sm font-body text-center mb-6">
          {isLogin
            ? "Inicia sesión para guardar tu perfil vocacional y acceder a tus resultados en cualquier momento."
            : "Regístrate y descubre en minutos la carrera que fue hecha para ti."}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-label text-xs font-bold text-primary mb-1.5 uppercase">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-label bg-white"
            />
          </div>
          <div>
            <label className="block font-label text-xs font-bold text-primary mb-1.5 uppercase">
              Contraseña
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-label bg-white"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-label text-on-surface-variant mt-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-outline-variant text-secondary focus:ring-secondary"
              />
              Recordarme
            </label>
            <a href="#" className="hover:text-secondary underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-label text-sm font-bold btn-primary mt-4 active:scale-95"
          >
            Continuar
          </button>
        </form>

        <div className="text-center font-label text-xs text-on-surface-variant mt-6">
          <span>{isLogin ? "¿Aún no tienes una cuenta?" : "¿Ya tienes una cuenta?"}</span>
          <button
            onClick={() => setMode(isLogin ? "signup" : "login")}
            className="text-secondary font-bold underline hover:text-tertiary ml-1"
          >
            {isLogin ? "Crear cuenta gratis" : "Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}
