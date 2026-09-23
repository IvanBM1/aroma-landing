import { useCart } from "../hooks/useCart"

const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicación" },
]

export default function Header() {
  const { count, toggleCart } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-muted bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#top" className="font-display text-lg font-black uppercase tracking-[0.15em] text-foreground sm:text-xl">
          Aroma
        </a>
        <nav aria-label="Navegación principal" className="hidden sm:block">
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
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleCart}
            aria-label={`Abrir carrito, ${count} ${count === 1 ? "ítem" : "ítems"}`}
            className="whitespace-nowrap rounded-sm border-2 border-foreground px-3 py-2 font-body text-sm font-bold text-foreground hover:bg-foreground hover:text-background"
          >
            Carrito ({count})
          </button>
          <a
            href="#reservas"
            className="hidden rounded-sm bg-foreground px-4 py-2 font-body text-sm font-bold text-background transition-opacity hover:opacity-80 sm:block"
          >
            Reservá tu mesa
          </a>
        </div>
      </div>
    </header>
  )
}
