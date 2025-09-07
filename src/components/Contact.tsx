import { Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Fale conosco
          </h2>
          <p className="mt-2 text-slate-600">
            Tire dúvidas, agende uma avaliação ou solicite informações.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Nome
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Seu nome"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="(00) 90000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700 transition"
            >
              Enviar mensagem
            </button>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-700">
              <div className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> (21) 3333-0000
              </div>

              <a
                href="https://wa.me/5521999990000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-700 hover:underline"
              >
                <Phone className="w-4 h-4" /> WhatsApp
              </a>

              <div className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> contato@vivafisio.com
              </div>

              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Rua Exemplo, 123 — Centro, RJ
              </div>
            </div>
          </form>
        </div>

        {/* Mapa */}
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Mapa da clínica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.185230260869!2d-43.179!3d-22.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzE4LjAiUyA0M8KwMTAnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1689450000000"
              width="100%"
              height="100%"
              loading="lazy"
              className="h-full w-full"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" /> Seg–Sex • 8h às 19h
            </div>
            <div className="inline-flex items-center gap-2">
              <CalendarCheck className="w-4 h-4" /> Sáb • 8h às 12h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
