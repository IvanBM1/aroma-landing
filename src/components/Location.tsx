const horario = [
  { dia: "Lunes a viernes", horas: "8:00 – 20:00" },
  { dia: "Sábados", horas: "9:00 – 21:00" },
  { dia: "Domingos", horas: "9:00 – 18:00" },
]

export default function Location() {
  return (
    <section id="ubicacion" className="border-b border-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-black text-foreground sm:text-5xl">Ubicación y horario</h2>
          <p className="mt-4 font-body text-foreground/70">
            Dirección de ejemplo — reemplazar por la dirección real de Aroma.
          </p>
          <table className="mt-6 w-full max-w-sm border-collapse font-body text-sm">
            <tbody>
              {horario.map((row) => (
                <tr key={row.dia} className="border-b border-muted">
                  <th scope="row" className="py-2 pr-4 text-left font-semibold text-foreground">
                    {row.dia}
                  </th>
                  <td className="py-2 text-foreground/80">{row.horas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="flex min-h-64 items-center justify-center border border-muted bg-muted/30 font-body text-sm text-foreground/80"
          role="img"
          aria-label="Mapa de ejemplo — reemplazar por la ubicación real de Aroma"
        >
          Mapa de ejemplo — reemplazar por embed real (Google Maps / OpenStreetMap)
        </div>
      </div>
    </section>
  )
}
