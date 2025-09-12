import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "ok" | "err";
    msg: string;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const form = formRef.current;
    if (!form) return;

    // Validações básicas (HTML5 também ajuda)
    const name = (
      form.elements.namedItem("from_name") as HTMLInputElement
    )?.value?.trim();
    const email = (
      form.elements.namedItem("reply_to") as HTMLInputElement
    )?.value?.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    )?.value?.trim();
    if (!name || !email || !message) {
      setStatus({ type: "err", msg: "Preencha nome, e-mail e mensagem." });
      return;
    }

    // Honeypot (anti-spam simples)
    const honey = (form.elements.namedItem("website") as HTMLInputElement)
      ?.value;
    if (honey) {
      // Campo oculto preenchido => provável bot
      setStatus({ type: "ok", msg: "Mensagem enviada! (anti-spam acionado)" });
      form.reset();
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus({
        type: "ok",
        msg: "Mensagem enviada com sucesso! Em breve entraremos em contato.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "err",
        msg: "Não foi possível enviar agora. Tente novamente em instantes ou use WhatsApp/e-mail.",
      });
    } finally {
      setLoading(false);
    }
  };

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

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 gap-4"
            noValidate
          >
            {/* Honeypot (não remova name="website") */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Nome
              </label>
              <input
                type="text"
                name="from_name"
                required
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
                  name="reply_to"
                  required
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
                  name="phone"
                  pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
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
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700 transition disabled:opacity-70"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status && (
              <p
                className={`text-sm mt-1 ${
                  status.type === "ok" ? "text-green-700" : "text-red-600"
                }`}
              >
                {status.msg}
              </p>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-700">
              <div className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> (21)22211966
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
                <Mail className="w-4 h-4" /> contato@Lilithatá.com
              </div>

              <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rua Maria Silva Ferreira, 181 - Nova Aliança - Rio das Ostras</span>
              </div>
            </div>
          </form>
        </div>

        {/* Mapa */}
        <div>
  <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
    <iframe
      title="Mapa da clínica"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.000000000000!2d-41.9400000!3d-22.5200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Maria%20Silva%20Ferreira%20181%2C%20Nova%20Alian%C3%A7a%2C%20Rio%20das%20Ostras!5e0!3m2!1spt-BR!2sbr!4v1699450000000"
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
