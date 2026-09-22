export type MenuCategory = "Café" | "Pastelería" | "Para llevar"

export interface MenuItem {
  id: string
  name: string
  category: MenuCategory
  price: string
  note: string
}

export const menuCategories: MenuCategory[] = ["Café", "Pastelería", "Para llevar"]

export const menuItems: MenuItem[] = [
  { id: "espresso", name: "Espresso", category: "Café", price: "$2.500", note: "Origen Etiopía. Cuerpo intenso, notas a chocolate." },
  { id: "pour-over", name: "Pour Over", category: "Café", price: "$3.200", note: "Origen Colombia. Taza limpia, notas cítricas." },
  { id: "flat-white", name: "Flat White", category: "Café", price: "$3.000", note: "Espresso doble, leche texturizada." },
  { id: "cold-brew", name: "Cold Brew", category: "Café", price: "$3.400", note: "12 hs de reposo en frío. Dulzor natural." },
  { id: "medialuna", name: "Medialuna de manteca", category: "Pastelería", price: "$1.200", note: "Recién horneada, cada mañana." },
  { id: "cheesecake", name: "Cheesecake de estación", category: "Pastelería", price: "$2.800", note: "Receta de la casa, fruta de temporada." },
  { id: "budin", name: "Budín de banana y nuez", category: "Pastelería", price: "$2.200", note: "Casero, sin conservantes." },
  { id: "combo", name: "Café + medialuna", category: "Para llevar", price: "$3.200", note: "El clásico de la mañana, para llevar." },
  { id: "grano", name: "Bolsa de grano 250g", category: "Para llevar", price: "$6.500", note: "Tu tueste favorito, para tu casa." },
]
