import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-8 px-[16px] md:px-[40px] border-t border-outline-variant/10">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo y Copyright */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-16 w-16 shrink-0">
            <Image
              src="/logo_NOVA-nuevo.png"
              alt="Logo Footer"
              width={112}
              height={112}
              className="logo-glow h-28 w-28 max-w-none opacity-90 object-contain hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display font-bold text-primary leading-none">NOVA</span>
            <span className="text-[10px] font-label text-on-surface-variant mt-1.5 leading-none">
              © 2026 NOVA · Navegador de Orientación Vocacional Académica
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6 font-label text-xs font-bold text-on-surface-variant">
          <Link className="hover:text-secondary underline transition-all" href="#">
            Privacidad
          </Link>
          <Link className="hover:text-secondary underline transition-all" href="#">
            Términos
          </Link>
          <Link className="hover:text-secondary underline transition-all" href="#">
            Contacto
          </Link>
          <Link className="hover:text-secondary underline transition-all" href="#">
            Ayuda
          </Link>
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer">
            language
          </span>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer">
            share
          </span>
        </div>
      </div>
    </footer>
  );
}
