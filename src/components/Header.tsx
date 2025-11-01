import { HeartPulse, CalendarCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <HeartPulse className="w-6 h-6 text-green-600" aria-hidden />
          <span className="text-slate-900 font-semibold text-lg">
            Lilithatá
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#home" className="hover:text-green-700 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-700 transition">
            Sobre
          </a>
          <a href="#services" className="hover:text-green-700 transition">
            Serviços
          </a>
          <a href="#team" className="hover:text-green-700 transition">
            Equipe
          </a>

          <a href="#contact" className="hover:text-green-700 transition">
            Contato
          </a>
          <a href="#jobs" className="hover:text-green-700 transition">
            Vagas
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-xl bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition"
        >
          <CalendarCheck className="w-4 h-4" aria-hidden />
          Agendar
        </a>
        <button
          className="md:hidden inline-flex items-center rounded-lg p-2 border border-slate-300"
          onClick={() => {
            const m = document.getElementById("mobile-nav");
            if (m) m.classList.toggle("hidden");
          }}
          aria-label="Abrir menu"
        >
          <span className="i">☰</span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-nav"
        className="md:hidden hidden border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 text-slate-700">
          <a href="#home" className="hover:text-green-700">
            Home
          </a>
          <a href="#about" className="hover:text-green-700">
            Sobre
          </a>
          <a href="#services" className="hover:text-green-700">
            Serviços
          </a>
          <a href="#team" className="hover:text-green-700">
            Equipe
          </a>

          <a href="#contact" className="hover:text-green-700">
            Contato
          </a>
          <a href="#jobs" className="hover:text-green-700">
            Vagas
          </a>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition w-max"
          >
            <CalendarCheck className="w-4 h-4" aria-hidden />
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
