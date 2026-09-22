const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicación" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-muted bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl font-black tracking-tight text-foreground">
          Aroma
        </a>
        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-8 font-body text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-foreground hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#reservas"
          className="hidden rounded-sm bg-foreground px-4 py-2 font-body text-sm font-bold text-background hover:bg-primary hover:text-foreground sm:block"
        >
          Reservá tu mesa
        </a>
      </div>
    </header>
  )
}
