import { ShieldCheck, Stethoscope, Dumbbell, Sparkles } from "lucide-react";

export type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const SERVICES: ServiceItem[] = [
  {
    icon: <ShieldCheck className="w-6 h-6" aria-hidden />,
    title: "Fisioterapia Geral",
    desc: "Controle da dor, alongamento e reabilitação de movimentos para melhora funcional e qualidade de vida.",
  },

  {
    icon: <Sparkles className="w-6 h-6" aria-hidden />,
    title: "Estética",
    desc: "Tratamentos para celulite, gordura localizada e flacidez, aliados ao bem-estar e autoestima.",
  },
];
