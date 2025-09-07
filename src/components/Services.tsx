import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Serviços
          </h2>
          <p className="mt-2 text-slate-600">
            Tratamentos conduzidos por profissionais experientes, com protocolos
            atualizados e atenção individualizada.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700`}
              >
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
