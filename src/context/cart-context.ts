import { createContext } from "react"
import type { MenuItem } from "../data/menu"

export interface CartLine {
  item: MenuItem
  qty: number
}

export interface CartContextValue {
  lines: CartLine[]
  addItem: (item: MenuItem) => void
  updateQty: (id: string, qty: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  subtotal: number
  count: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
