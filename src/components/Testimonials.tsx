import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina Castro',
    role: 'Sócia, Castro & Lima Advocacia',
    city: 'Curitiba, PR',
    photo:
      'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=160&w=160',
    text: 'Reformularam nosso site em duas semanas. As consultas online triplicaram no mês seguinte. Sempre que precisamos de ajustes, a resposta vem no mesmo dia.',
  },
  {
    name: 'Rafael Nunes',
    role: 'Proprietário, Padaria Nunes',
    city: 'São Paulo, SP',
    photo:
      'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=160&w=160',
    text: 'Pedi um site simples para mostrar os produtos e receber encomendas. Recebi exatamente isso, funcionando, sem cobranças escondidas ou mensalidades forçadas.',
  },
  {
    name: 'Patrícia Gomes',
    role: 'Diretora, Escola Horizonte',
    city: 'Belo Horizonte, MG',
    photo:
      'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=160&w=160',
    text: 'Trabalhamos com outra agência antes e era sempre problema. Com a Nove, a comunicação é clara desde o primeiro briefing. Entregaram no prazo combinado.',
  },
];

export default function Testimonials() {
  return (
    <section id="casos" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-sm font-semibold text-emerald-700 mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            O que os clientes dizem.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 bg-white border border-gray-200"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-emerald-700 text-emerald-700"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-ink font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
