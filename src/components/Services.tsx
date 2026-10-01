import { Code2, PenTool, Search, LayoutDashboard } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Sites institucionais',
    description:
      'Páginas rápidas e responsivas. Código limpo, SEO básico incluído e hospedagem configurada.',
  },
  {
    icon: PenTool,
    title: 'Design de marca',
    description:
      'Identidade visual completa: logo, paleta de cores, tipografia e manual de aplicação.',
  },
  {
    icon: Search,
    title: 'SEO e performance',
    description:
      'Otimização para Google e Core Web Vitals. Seu site carrega rápido e aparece nas buscas.',
  },
  {
    icon: LayoutDashboard,
    title: 'Landing pages',
    description:
      'Páginas de conversão para campanhas. Foco em clareza, velocidade e geração de leads.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="text-sm font-semibold text-emerald-700 mb-3 block">
            Serviços
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            O que fazemos, sem rodeios.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-xl p-7 bg-white border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 mb-5">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-ink font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
