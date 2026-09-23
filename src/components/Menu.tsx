import { useState } from "react"
import { useCart } from "../hooks/useCart"
import { menuCategories, menuItems, type MenuCategory } from "../data/menu"

type Filter = "Todo" | MenuCategory

export default function Menu() {
  const [filter, setFilter] = useState<Filter>("Todo")
  const { addItem } = useCart()

  const filters: Filter[] = ["Todo", ...menuCategories]
  const visibleItems = filter === "Todo" ? menuItems : menuItems.filter((item) => item.category === filter)

  return (
    <section id="menu" className="border-b border-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-black text-foreground sm:text-5xl">Menú</h2>

        <div role="group" aria-label="Filtrar menú por categoría" className="mt-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-sm px-4 py-2 font-body text-sm font-bold ${
                filter === f
                  ? "bg-foreground text-background"
                  : "border border-muted text-foreground hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <li key={item.id} className="flex flex-col justify-between border border-muted p-6">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                  <span className="whitespace-nowrap font-body text-sm font-bold text-foreground">{item.price}</span>
                </div>
                <p className="mt-2 font-body text-sm text-foreground/70">{item.note}</p>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="inline-block w-fit border border-muted px-2 py-1 font-body text-xs font-semibold uppercase tracking-wide text-foreground/60">
                  {item.category}
                </span>
                <button
                  type="button"
                  onClick={() => addItem(item)}
                  className="rounded-sm bg-foreground px-3 py-1.5 font-body text-xs font-bold text-background transition-opacity hover:opacity-80"
                >
                  Agregar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
