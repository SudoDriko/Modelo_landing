const aboutImage =
  'https://images.pexels.com/photos/1034650/pexels-photo-1034650.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000';

const principles = [
  'Poucos clientes por mês. Cada projeto tem dedicação real.',
  'Você fala direto com quem faz o trabalho. Sem intermediários.',
  'Reuniões objetivas, entregas documentadas e prazos cumpridos.',
  'Código e arquivos finais são seus. Sem amarras ou dependências.',
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <img
              src={aboutImage}
              alt="Mesa de trabalho do estúdio"
              className="w-full h-[380px] lg:h-[460px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-4 -right-3 sm:right-6 rounded-xl bg-emerald-700 px-5 py-4">
            <p className="text-white text-xl font-extrabold">8 anos</p>
            <p className="text-emerald-100 text-xs">de estúdio ativo</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 order-1 lg:order-2">
          <span className="text-sm font-semibold text-emerald-700 block">
            Sobre o estúdio
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink tracking-tight leading-tight">
            Um estúdio pequeno, com padrão de agência grande.
          </h2>
          <p className="text-gray-500 leading-relaxed">
            A Estúdio Nove nasceu em 2017, em Curitiba. Somos quatro pessoas
            que cuidam de cada projeto como se fosse o único. Não vendemos
            pacotes genéricos — entendemos o seu negócio e desenhamos a solução
            mais direta para o seu problema.
          </p>

          <ul className="space-y-3 pt-2">
            {principles.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
