import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="contato" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-ink px-6 py-14 lg:px-16 lg:py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Tem um projeto em mente?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Conte o que você precisa. Respondemos em até 24 horas com um
            orçamento detalhado — sem compromisso.
          </p>

          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-ink font-bold hover:bg-gray-100 transition-colors"
          >
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-gray-500 text-sm mt-6">
            Segunda a sexta, 8h às 18h · atendimento@estudionove.com.br
          </p>
        </div>
      </div>
    </section>
  );
}
