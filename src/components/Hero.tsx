export default function Hero() {
  return (
    <section id="top" className="border-b border-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 sm:grid-cols-12 sm:gap-8 sm:py-32">
        <div className="sm:col-span-7">
          <span className="inline-block border border-foreground px-2 py-1 font-body text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            Café de especialidad
          </span>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            Café de origen.
            <br />
            Tueste propio.
            <br />
            Tu lugar.
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-foreground/70">
            Grano seleccionado, tostado acá. Sin vueltas, sin relleno — solo café bien hecho.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#reservas"
              className="rounded-sm bg-foreground px-6 py-3 font-body text-lg font-bold text-background transition-opacity hover:opacity-80"
            >
              Reservá tu mesa
            </a>
            <a
              href="#menu"
              className="rounded-sm border-2 border-foreground px-6 py-3 font-body text-lg font-bold text-foreground hover:bg-foreground hover:text-background"
            >
              Mirá el menú
            </a>
          </div>
        </div>
        <div className="sm:col-span-5" aria-hidden="true">
          <div className="aspect-[4/5] w-full border border-muted bg-muted/40" />
        </div>
      </div>
    </section>
  )
}
