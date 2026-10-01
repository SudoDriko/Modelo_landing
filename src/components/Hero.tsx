import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/8134173/pexels-photo-8134173.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

const trustBadges = [
  { icon: Clock, text: 'Orçamento em até 24h' },
  { icon: CheckCircle2, text: 'Atendimento imediato' },
];

export default function Hero() {
  return (
    <section id="inicio" className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Content — asymmetric */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Vagas para 2 projetos em outubro
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-ink leading-[1.08] tracking-tight">
            Sites que vendem.
            <br />
            Entregues no prazo,
            <br />
            <span className="text-emerald-700">sem burocracia.</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            Somos um estúdio de design e desenvolvimento web. Trabalhamos com
            poucos clientes por mês para garantir atenção e qualidade em cada
            projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 text-ink font-semibold hover:bg-gray-50 transition-colors"
            >
              Ver serviços
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4">
            {trustBadges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.text}
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium"
                >
                  <Icon className="w-4 h-4 text-emerald-700" />
                  {b.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Image — asymmetric support card */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200">
            <img
              src={heroImage}
              alt="Equipe do estúdio em reunião de projeto"
              className="w-full h-[340px] sm:h-[440px] lg:h-[520px] object-cover"
              loading="eager"
            />
          </div>

          {/* Floating card — not glassmorphism, just a solid card */}
          <div className="absolute -bottom-5 left-4 sm:left-8 right-4 sm:right-auto sm:w-64 rounded-xl bg-white border border-gray-200 px-5 py-4 shadow-sm">
            <p className="text-2xl font-extrabold text-ink">+47</p>
            <p className="text-sm text-gray-500 mt-0.5">
              projetos entregues em 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
