import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useCart } from "../hooks/useCart"
import { menuCategories, menuItems, type MenuCategory } from "../data/menu"
import { fadeUp, viewportOnce } from "../lib/motion"

type Filter = "Todo" | MenuCategory

export default function Menu() {
  const [filter, setFilter] = useState<Filter>("Todo")
  const { addItem } = useCart()

  const filters: Filter[] = ["Todo", ...menuCategories]
  const visibleItems = filter === "Todo" ? menuItems : menuItems.filter((item) => item.category === filter)

  return (
    <section id="menu" className="scroll-mt-24 border-b-4 border-double border-accent-gold bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <h2 className="font-display text-4xl font-black text-primary sm:text-5xl">Menú</h2>
          <div className="ornament-divider mt-4 max-w-xs font-display text-lg" aria-hidden="true">
            ❦
          </div>

          <div role="group" aria-label="Filtrar menú por categoría" className="mt-8 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-sm px-4 py-2 font-body text-base font-bold uppercase tracking-wide transition-colors duration-200 ${
                  filter === f
                    ? "bg-primary text-surface"
                    : "border border-muted text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col justify-between border-4 border-double border-muted bg-surface p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                    <span className="whitespace-nowrap font-body text-base font-bold text-accent-gold">{item.price}</span>
                  </div>
                  <p className="mt-2 font-body text-base text-foreground/70">{item.note}</p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="inline-block w-fit border border-accent-gold px-2 py-1 font-body text-xs font-semibold uppercase tracking-wide text-secondary">
                    {item.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => addItem(item)}
                    className="rounded-sm border border-accent-gold bg-primary px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wide text-surface transition-transform duration-200 hover:scale-105 hover:bg-secondary"
                  >
                    Agregar
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  )
}
