export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Sobre a clínica
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Na <span className="font-semibold text-slate-900">Lilithatá</span>,
            unimos ciência, empatia e prática clínica para oferecer um cuidado
            completo ao paciente. Nossa equipe realiza uma avaliação minuciosa,
            define objetivos claros e acompanha de perto cada progresso,
            ajustando o plano conforme sua evolução.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-600" />
              Profissionais experientes
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-600" />
              Protocolos atualizados
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-600" />
              Atendimento acolhedor
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-600" />
              Estrutura moderna
            </li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/B2xJXF38MG4?si=XSbX2CXlEXiX2zYx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
