const metrics = [
  { value: '2017', label: 'Ano de fundação' },
  { value: '+120', label: 'Clientes no portfólio' },
  { value: '97%', label: 'Clientes que renovam' },
  { value: '14 dias', label: 'Prazo médio de entrega' },
];

export default function Metrics() {
  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white px-6 py-7 text-center"
            >
              <p className="text-2xl lg:text-3xl font-extrabold text-ink">
                {m.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
