import { ShieldCheck, Stethoscope, Dumbbell } from "lucide-react";

export type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const SERVICES: ServiceItem[] = [
  {
    icon: <ShieldCheck className="w-6 h-6" aria-hidden />,
    title: "Fisioterapia Ortopédica",
    desc: "Avaliação precisa e protocolos baseados em evidência para dores musculoesqueléticas, lesões esportivas e reabilitação funcional.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" aria-hidden />,
    title: "Reabilitação Pós-Cirúrgica",
    desc: "Planos personalizados para recuperação segura e progressiva após procedimentos cirúrgicos, com foco em mobilidade e força.",
  },
  {
    icon: <Dumbbell className="w-6 h-6" aria-hidden />,
    title: "Pilates Clínico",
    desc: "Método com supervisão profissional para melhora de postura, estabilidade do core e prevenção de recidivas de dor.",
  },
];
