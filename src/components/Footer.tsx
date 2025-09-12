import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Lilithatá — Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="#" className="hover:text-green-700" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-green-700" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-green-700" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@leonidiaborges9807" className="hover:text-green-700" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}
