const horario = [
  { dia: "Lunes a viernes", horas: "8:00 – 20:00" },
  { dia: "Sábados", horas: "9:00 – 21:00" },
  { dia: "Domingos", horas: "9:00 – 18:00" },
]

export default function Location() {
  return (
    <section id="ubicacion" className="border-b-4 border-double border-accent-gold bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-black text-primary sm:text-5xl">Ubicación y horario</h2>
        <div className="ornament-divider mt-4 max-w-xs font-display text-lg" aria-hidden="true">
          ❦
        </div>

        <div className="mt-10 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div>
            <p className="font-body text-lg text-foreground/70">Centro Histórico de Puebla, México.</p>
            <table className="mt-6 w-full max-w-sm border-collapse font-body text-lg">
              <tbody>
                {horario.map((row) => (
                  <tr key={row.dia} className="border-b border-accent-gold/40">
                    <th scope="row" className="py-2 pr-4 text-left font-semibold text-secondary">
                      {row.dia}
                    </th>
                    <td className="py-2 text-foreground/80">{row.horas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <iframe
            title="Mapa — Centro Histórico de Puebla"
            src="https://www.google.com/maps?q=Centro+Hist%C3%B3rico+de+Puebla,+M%C3%A9xico&output=embed"
            className="min-h-64 w-full border-4 border-double border-accent-gold"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
