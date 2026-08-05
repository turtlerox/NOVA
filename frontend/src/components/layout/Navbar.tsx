"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenAuth: (mode: "login" | "signup") => void;
}

const navLinks = [
  { href: "/", label: "Inicio", id: "home" },
  { href: "/test", label: "Test Vocacional", id: "test" },
  { href: "/universidades", label: "Universidades", id: "universities" },
];

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function handleMobileNav(href: string) {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm h-16 md:h-20 w-full">
      <div className="flex justify-between items-center px-4 md:px-10 w-full max-w-[1200px] mx-auto h-full">
        {/* Logo NOVA */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group z-50">
          <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 shrink-0">
            <Image
              src="/logo_NOVA-nuevo.png"
              alt="NOVA Logo"
              width={144}
              height={144}
              className="logo-glow h-24 w-24 md:h-36 md:w-36 max-w-none object-contain translate-y-[1px]"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display text-xl md:text-2xl font-extrabold text-primary tracking-tight leading-none">
              NOVA
            </span>
            <span className="text-[8px] md:text-[9px] font-label text-secondary tracking-wider mt-1 hidden sm:inline-block leading-none">
              ORIENTACIÓN VOCACIONAL
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 font-label text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`pb-1 transition-all ${
                isActive(link.href)
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => onOpenAuth("login")}
            className="px-5 py-2 rounded-full font-label text-sm font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all"
          >
            Acceder
          </button>
          <button
            onClick={() => onOpenAuth("signup")}
            className="px-5 py-2 rounded-full font-label text-sm font-semibold teal-gradient text-white hover:opacity-95 transition-all shadow-md active:scale-95"
          >
            Registro
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6 pb-6`}
      >
        <div className="flex flex-col gap-6 font-label text-lg font-bold mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => handleMobileNav(link.href)}
              className={`pb-2 border-b transition-all ${
                isActive(link.href)
                  ? "text-secondary border-secondary"
                  : "text-on-surface-variant border-outline-variant/20"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col gap-4 mt-auto">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAuth("login");
            }}
            className="w-full py-3 rounded-full font-label text-sm font-semibold border-2 border-primary text-primary active:bg-primary/10 transition-all text-center"
          >
            Acceder
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAuth("signup");
            }}
            className="w-full py-3 rounded-full font-label text-sm font-semibold teal-gradient text-white shadow-md active:scale-95 transition-all text-center"
          >
            Crear Cuenta Gratis
          </button>
        </div>
      </div>
    </nav>
  );
}
