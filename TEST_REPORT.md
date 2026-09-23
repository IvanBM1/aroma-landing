# TEST_REPORT.md — Aroma

Pruebas E2E ejecutadas con navegador real controlado vía MCP Playwright, contra `http://localhost:5173`. Un fallo funcional detectado (regresión de mobile) fue corregido y re-testeado en verde antes de este reporte.

## Resumen

| Prueba | Resultado |
|---|---|
| 1. Carga básica y renderizado | ✅ Pasa (con salvedad documentada) |
| 2. Formularios y CTA (Reservas + Carrito/Checkout) | ✅ Pasa |
| 3. Navegación e interactividad | ✅ Pasa |
| 4. Responsividad mobile | ⚠️ Falló → 🔧 Corregido → ✅ Pasa |

**Total: 4 pruebas, 4 aprobadas (1 con corrección aplicada durante la sesión).**

## Hallazgos y Evidencias

### Prueba 1 — Carga básica
- Consola del navegador: **0 errores, 0 warnings** (`screenshot.png`).
- Todo el contenido renderiza correcto (Hero, Menú, Reservas, Ubicación, Footer).
- **Salvedad:** el iframe de Google Maps aparece visualmente en blanco en la captura de pantalla del navegador automatizado. Se investigó a fondo antes de asumir un bug:
  - Todas las requests de red del embed devuelven `200` (incluida la imagen del tile del mapa).
  - `0` errores de consola.
  - El snapshot de accesibilidad confirma contenido real y funcional dentro del iframe: región "Mapa", botón de vista satelital, logo de Google, link "Abrir en Maps" con coordenadas correctas de Puebla (`19.045301,-98.200478`), y link "Notificar un problema de Maps".
  - Conclusión: el mapa **funciona correctamente**; el canvas/WebGL simplemente no pinta en la captura de este navegador automatizado (limitación conocida de entornos headless/sandboxed, no del código). No se requiere corrección.

### Prueba 2 — Formularios y CTA
- **Reservas:** completado con datos de prueba → "¡Reserva confirmada!" muestra nombre, fecha, hora y personas correctos.
- **Carrito:** "Agregar" en Espresso abre el panel automáticamente, subtotal correcto ($2.500).
- **Checkout:** radio "Entrega a domicilio" muestra campo de dirección; al confirmar vacío, la validación nativa bloquea el envío y devuelve el foco al campo (correcto). Con dirección completa, confirma y genera código de seguimiento (`ARM-2PKX`), con disclaimer de simulación visible.
- **Reset:** "Hacer otro pedido" limpia el carrito (`Carrito (0)`) y cierra el panel.

### Prueba 3 — Navegación e interactividad
- Filtro de categoría "Café" en el Menú: muestra únicamente los 4 ítems de café, oculta el resto — correcto.
- Link de navegación "Ubicación" actualiza la URL a `#ubicacion` y hace scroll nativo a la sección — correcto.
- No hay acordeones de FAQ ni modales en esta landing — **N/A**.

### Prueba 4 — Responsividad mobile (390×844)
- **🔴 Fallo encontrado:** el header se rompía en mobile — el logo, los links de navegación y el nuevo botón "Carrito (N)" se solapaban/desbordaban el viewport, el botón de carrito se cortaba en dos líneas. Regresión introducida junto con la feature del carrito (`screenshot-mobile.png`, antes del fix).
- **🔧 Acción correctiva aplicada:** en `src/components/Header.tsx` — los links de navegación de texto ahora se ocultan en mobile (`hidden sm:block`, mismo patrón ya usado para el CTA de escritorio), el logo reduce tamaño en mobile, y el botón de carrito usa `whitespace-nowrap` para no cortarse.
- **✅ Re-test:** header limpio en 390px, sin solapamientos (`screenshot-mobile-fixed.png`). Carrito probado también en mobile — panel usable, controles claros (`screenshot-mobile-cart.png`).

## Acciones Correctivas Requeridas

- [x] `src/components/Header.tsx` — corregido (nav oculta en mobile, logo responsivo, botón carrito sin wrap). Ya aplicado y verificado en esta sesión.
- [ ] *(No bloqueante)* El panel del carrito con 1 solo ítem deja un espacio vacío grande entre la lista y el subtotal (por el `flex-1` en la lista) — es una cuestión de pulido visual, no un bug funcional. Queda para un futuro `/feature-landing` si se quiere ajustar.
- [ ] *(No bloqueante)* Sin menú hamburguesa: en mobile ya no hay forma de navegar a Menú/Reservas/Ubicación desde el header (antes tampoco existía este patrón, ahora es más notorio porque se ocultaron los links). Considerar agregar un menú mobile en una iteración futura si se prioriza la navegación rápida en mobile.
