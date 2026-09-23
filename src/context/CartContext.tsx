import { useMemo, useState, type ReactNode } from "react"
import { CartContext, type CartLine } from "./cart-context"
import type { MenuItem } from "../data/menu"

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function addItem(item: MenuItem) {
    setLines((prev) => {
      const existing = prev.find((line) => line.item.id === item.id)
      if (existing) {
        return prev.map((line) => (line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line))
      }
      return [...prev, { item, qty: 1 }]
    })
    setIsOpen(true)
  }

  function updateQty(id: string, qty: number) {
    setLines((prev) =>
      qty <= 0 ? prev.filter((line) => line.item.id !== id) : prev.map((line) => (line.item.id === id ? { ...line, qty } : line)),
    )
  }

  function removeItem(id: string) {
    setLines((prev) => prev.filter((line) => line.item.id !== id))
  }

  function clearCart() {
    setLines([])
  }

  const subtotal = useMemo(() => lines.reduce((sum, line) => sum + line.item.priceValue * line.qty, 0), [lines])
  const count = useMemo(() => lines.reduce((sum, line) => sum + line.qty, 0), [lines])

  return (
    <CartContext.Provider
      value={{
        lines,
        addItem,
        updateQty,
        removeItem,
        clearCart,
        subtotal,
        count,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        toggleCart: () => setIsOpen((prev) => !prev),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
