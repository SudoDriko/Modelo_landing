import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Casos', href: '#casos' },
  { label: 'Contato', href: '#contato' },
];

const legalLinks = [
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Termos de Uso', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-ink font-extrabold text-lg tracking-tight">
                Estúdio<span className="text-emerald-700">Nove</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Design e desenvolvimento web. Trabalhamos com poucos projetos
              por mês para garantir qualidade e prazo.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-ink font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-ink text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ink font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                atendimento@estudionove.com.br
              </li>
              <li className="flex items-center gap-2.5 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                (41) 99999-9999
              </li>
              <li className="flex items-center gap-2.5 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                Curitiba, PR
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Estúdio Nove. CNPJ: 12.345.678/0001-90
          </p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-ink text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
