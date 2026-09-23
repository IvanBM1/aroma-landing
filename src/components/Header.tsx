import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useCart } from "../hooks/useCart"

const navLinks = [
  { href: "#menu", label: "Menú", id: "menu" },
  { href: "#reservas", label: "Reservas", id: "reservas" },
  { href: "#ubicacion", label: "Ubicación", id: "ubicacion" },
]

export default function Header() {
  const { count, toggleCart } = useCart()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-4 border-double border-accent-gold bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a
          href="#top"
          onClick={() => setActiveSection(null)}
          className="font-display text-xl font-black uppercase tracking-[0.15em] text-primary transition-transform duration-150 active:scale-95 sm:text-2xl"
        >
          Aroma
        </a>
        <nav aria-label="Navegación principal" className="hidden sm:block">
          <ul className="flex items-center gap-8 font-body text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative inline-block pb-1 transition-colors duration-200 hover:text-primary ${
                    activeSection === link.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
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
            className="whitespace-nowrap rounded-sm border-2 border-primary px-3 py-2 font-body text-base font-bold uppercase tracking-wide text-primary transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-primary hover:text-surface"
          >
            Carrito (
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={count}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                {count}
              </motion.span>
            </AnimatePresence>
            )
          </button>
          <a
            href="#reservas"
            onClick={() => setActiveSection("reservas")}
            className="hidden rounded-sm border border-accent-gold bg-primary px-4 py-2 font-body text-base font-bold uppercase tracking-wide text-surface transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-secondary sm:block"
          >
            Reservá tu mesa
          </a>
        </div>
      </div>
    </header>
  )
}
