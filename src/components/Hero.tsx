import { CalendarCheck } from "lucide-react";
import atendimentoImagem from "../assets/images/atendimento-humanizado-fisioterapia.jpg"; // ✅ default import

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={atendimentoImagem}
          alt="Fisioterapeuta atendendo paciente"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Cuidado que devolve{" "}
            <span className="text-green-400">movimento</span>
          </h1>
          <p className="mt-4 text-slate-100/90 md:text-lg">
            Avaliação detalhada, planos personalizados e acompanhamento próximo
            em cada etapa da sua reabilitação.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700 transition"
            >
              <CalendarCheck className="w-5 h-5 mr-2" aria-hidden />
              Agendar avaliação
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-inset ring-white/30 hover:bg-white/20 transition"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
