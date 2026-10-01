import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center shadow-md transition-colors group"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 hidden sm:block whitespace-nowrap rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm font-medium text-ink opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-600 opacity-30 animate-ping" />
    </a>
  );
}
