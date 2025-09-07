import { TEAM } from "../data/team";

export default function Team() {
  return (
    <section id="team" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Nossa equipe
          </h2>
          <p className="mt-2 text-slate-600">
            Profissionais comprometidos com sua recuperação e bem‑estar.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {m.name}
                </h3>
                <p className="text-sm text-green-700 mt-1">{m.role}</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
