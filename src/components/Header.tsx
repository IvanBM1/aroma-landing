import { useCart } from "../hooks/useCart"

const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#reservas", label: "Reservas" },
  { href: "#ubicacion", label: "Ubicación" },
]

export default function Header() {
  const { count, toggleCart } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b-4 border-double border-accent-gold bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#top" className="font-display text-xl font-black uppercase tracking-[0.15em] text-primary sm:text-2xl">
          Aroma
        </a>
        <nav aria-label="Navegación principal" className="hidden sm:block">
          <ul className="flex items-center gap-8 font-body text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-foreground hover:text-primary hover:underline">
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
            className="whitespace-nowrap rounded-sm border-2 border-primary px-3 py-2 font-body text-base font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-surface"
          >
            Carrito ({count})
          </button>
          <a
            href="#reservas"
            className="hidden rounded-sm border border-accent-gold bg-primary px-4 py-2 font-body text-base font-bold uppercase tracking-wide text-surface hover:bg-secondary sm:block"
          >
            Reservá tu mesa
          </a>
        </div>
      </div>
    </header>
  )
}
