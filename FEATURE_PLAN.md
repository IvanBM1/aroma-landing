# FEATURE_PLAN.md — Carrito de compra + pedido (recoger / entrega, pago en efectivo)

## Objetivo del Cambio

Agregar un carrito de compra a la landing de Aroma. El usuario agrega productos del Menú, elige **Recoger en local** o **Entrega a domicilio** (con dirección), confirma el pedido (pago siempre en efectivo, sin selector) y ve una pantalla de confirmación simulada con un código de seguimiento genérico. Sin backend real, sin persistencia entre recargas, sin costo de envío ni pedido mínimo.

## Componentes / Archivos Impactados

- **`src/data/menu.ts`** (modificar) — agregar `priceValue: number` a cada ítem (además del `price` string ya existente) para poder calcular subtotales.
- **`src/context/CartContext.tsx`** (nuevo) — estado del carrito vía React Context: `items`, `addItem`, `updateQty`, `removeItem`, `subtotal`, `clearCart`. Compartido entre Header, Menú y Carrito sin prop drilling.
- **`src/components/Header.tsx`** (modificar) — botón "Carrito (N)" con contador, abre el panel.
- **`src/components/Menu.tsx`** (modificar) — botón "Agregar" por card, usa el contexto.
- **`src/components/Cart.tsx`** (nuevo) — panel lateral (drawer): lista de ítems con cantidad +/-, subtotal, y flujo de checkout embebido:
  - Paso A (carrito): ítems + subtotal + botón "Continuar".
  - Paso B (checkout): radio **Recoger** / **Entrega** → si Entrega, campo dirección obligatorio; texto fijo "Pago: Efectivo" (sin selector); botón "Confirmar pedido".
  - Paso C (confirmación): código de seguimiento genérico (ej. `ARM-7F3K`, generado en el cliente, sin backend), botón "Hacer otro pedido" que limpia el carrito y cierra el panel.
- **`src/App.tsx`** (modificar) — envuelve la app en `CartProvider` y monta `<Cart />`.

## Estrategia de UI/UX

Mismo lenguaje visual ya validado en `LANDING_PLAN.md` — nada nuevo que auditar de cero:
- Botón "Agregar": `bg-primary text-foreground`, bold, `rounded-sm` (mismo patrón que botones existentes, contraste ya verificado).
- Contador de carrito en Header: mismo estilo que el CTA "Reservá tu mesa" (`bg-foreground text-background`).
- Panel lateral: `bg-surface`, borde recto, `shadow-card` — sin librería de íconos nueva (coherente con la auditoría de Performance previa), todo con texto/emoji mínimo.
- Radio Recoger/Entrega y campo dirección: mismos estilos de input que el formulario de Reservas (`border-muted`, `focus:border-primary`).
- Pantalla de confirmación: mismo patrón visual que la confirmación de Reservas (ya implementado y accesible).

## Pasos de Implementación

- [ ] Agregar `priceValue: number` a cada ítem en `src/data/menu.ts`.
- [ ] Crear `src/context/CartContext.tsx` (items, add/update/remove, subtotal derivado, clear).
- [ ] Envolver `App.tsx` en `CartProvider`, montar `<Cart />`.
- [ ] Modificar `Menu.tsx`: botón "Agregar" por card.
- [ ] Modificar `Header.tsx`: botón "Carrito (N)" que abre el panel.
- [ ] Crear `Cart.tsx` con los 3 pasos (carrito → checkout → confirmación).
- [ ] Checkout: radio Recoger/Entrega, dirección condicional y obligatoria solo si Entrega, texto fijo "Pago: Efectivo".
- [ ] Confirmación: generar código genérico client-side, mostrarlo, botón para resetear.
- [ ] Verificar accesibilidad básica: labels en inputs nuevos, `aria-label` en botón carrito, sin romper el único `<h1>` de la página.
- [ ] `npm run build` y `npm run lint` limpios.

## Pruebas de Verificación (`http://localhost:5173`)

1. Agregar 2-3 ítems distintos desde el Menú → el contador del Header sube correctamente.
2. Abrir el carrito, cambiar cantidades con +/- → el subtotal recalcula bien.
3. Elegir **Recoger** → sin campo dirección → confirmar → aparece código de seguimiento.
4. Elegir **Entrega** → campo dirección aparece y es obligatorio → intentar confirmar vacío debe bloquear → completar dirección → confirmar → código.
5. Recargar la página → carrito vuelve a estar vacío (comportamiento esperado, sin persistencia).
6. Probar en ancho mobile que el panel no rompa el layout ni tape contenido.
