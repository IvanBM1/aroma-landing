export default function Hero() {
  return (
    <section id="top" className="border-b border-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-12 sm:py-28">
        <div className="sm:col-span-8">
          <span className="inline-block bg-primary px-2 py-1 font-body text-sm font-bold uppercase tracking-widest text-foreground">
            Café de especialidad
          </span>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            Café de origen.
            <br />
            Tueste propio.
            <br />
            Tu lugar.
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-foreground/80">
            Grano seleccionado, tostado acá. Sin vueltas, sin relleno — solo café bien hecho.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#reservas"
              className="rounded-sm bg-primary px-6 py-3 font-body text-lg font-bold text-foreground hover:bg-foreground hover:text-background"
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
        <div className="flex items-end sm:col-span-4" aria-hidden="true">
          <div className="aspect-[3/4] w-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
