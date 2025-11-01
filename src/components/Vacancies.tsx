"use client";

import { Briefcase, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import cadeirasImg from "../assets/images/cadeiras.jpeg";
import camona from "../assets/images/camona.jpeg";
import espaco from "../assets/images/espaco.jpeg";
import esteira from "../assets/images/esteira.jpeg";
import salasPilates from "../assets/images/salas-pilates.jpeg";

export default function Vacancies() {
  const clinicImages = [
    { src: cadeirasImg, alt: "Recepção da clínica" },
    { src: camona, alt: "Sala de atendimento" },
    { src: espaco, alt: "Equipamentos e aparelhos" },
    { src: esteira, alt: "Área de Pilates" },
    { src: salasPilates, alt: "Sala de estética" },
  ];

  return (
    <section id="jobs" className="bg-white py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Ícone e título */}
        <div className="flex justify-center mb-4">
          <Briefcase className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
          Vagas Abertas
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Estamos em busca de profissionais dedicados e apaixonados pelo cuidado
          e bem-estar. Confira abaixo as oportunidades disponíveis e entre em
          contato para saber mais.
        </p>

        {/* Cards de vagas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Fisioterapeuta Geral
            </h3>
            <p className="text-slate-600 text-sm">
              Atendimento clínico e reabilitação física com foco no bem-estar
              dos pacientes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Fisioterapeuta Especialista em RPG e Pilates
            </h3>
            <p className="text-slate-600 text-sm">
              Atuação em Reeducação Postural Global e Pilates terapêutico, com
              foco em qualidade de vida.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Estética
            </h3>
            <p className="text-slate-600 text-sm">
              Vaga para profissional de estética facial e corporal, com foco em
              saúde e autoestima.
            </p>
          </div>
        </div>

        {/* Contato WhatsApp */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <p className="text-slate-700 font-medium">
            Interessados devem entrar em contato pelo WhatsApp:
          </p>
          <a
            href="https://wa.me/5521987774406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700 transition"
          >
            <Phone className="w-4 h-4" />
            (21) 98777-4406
          </a>
        </div>

        {/* Carrossel da clínica */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Conheça nossa clínica
          </h3>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {clinicImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
