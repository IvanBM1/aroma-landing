# AUDIT_REPORT.md — Aroma

Auditoría de 4 roles sobre el código generado en `/build-landing`. Todo lo detectado por debajo de 8/10 fue corregido de forma autónoma antes de este reporte. Build verificado con `npm run build` (compila sin errores) y `npm run lint` (0 problemas) tras los parches.

## 1. Agente de Código — 9/10

- TypeScript estricto (`tsc -b`) sin errores.
- `oxlint` sin advertencias ni errores.
- Sin imports no usados, sin assets muertos (se eliminaron `App.css`, `hero.png`, `react.svg`, `vite.svg` del scaffold, no referenciados).
- Componentes modulares (`Header`, `Hero`, `Menu`, `Reservations`, `Location`, `Footer`), datos de menú separados en `src/data/menu.ts`.
- Bundle final liviano (ver Performance).

## 2. Agente UX/UI — 8.5/10 (post-corrección)

**Corregido en esta auditoría** — 4 casos de texto bajo el mínimo WCAG AA (4.5:1 en texto normal) detectados por cálculo de contraste real:

| Elemento | Antes | Contraste antes | Después | Contraste después |
|---|---|---|---|---|
| Hero, etiqueta "Café de especialidad" | `text-primary` sobre fondo crema | ~3.27:1 (falla) | Pastilla `bg-primary` + `text-foreground` | ~4.52:1 (pasa) |
| Header, hover de nav links | `hover:text-primary` | ~3.27:1 (falla) | `hover:underline` (no depende solo de color) | N/A — ya no cambia color |
| Menú, precio de ítem | `text-primary` sobre card blanca | ~3.66:1 (falla) | `text-foreground` | Alto contraste, pasa |
| Ubicación, texto del mapa placeholder | `text-foreground/60` sobre `bg-muted/30` | ~4.10:1 (falla) | `text-foreground/80` | ~8:1 (pasa) |

Resto de combinaciones de color revisadas (texto de párrafo, footer, botones CTA) pasan 4.5:1 o el umbral de texto grande 3:1 donde corresponde. El botón primario (`bg-primary` + `text-foreground`, bold) queda en ~4.52:1 — pasa, pero con margen ajustado; si en el futuro se ajusta el HEX de `primary`, revalidar contraste.

- Responsive: grid de 12 columnas en Hero, 1→2→3 columnas en Menú, 1→2 en Ubicación/Reservas, nav colapsa CTA en mobile (`hidden sm:block`).
- Estados interactivos: filtro de menú usa `aria-pressed`, inputs tienen `focus:border-primary`, formulario con estado de confirmación real (no solo alert).
- Pendiente de futuro (no bloqueante): reemplazar bloques de color plano por fotografía real del local/café.

## 3. Agente SEO — 8.5/10 (post-corrección)

**Corregido:** faltaban por completo las etiquetas OpenGraph y Twitter Card. Se agregaron `og:type`, `og:title`, `og:description`, `og:locale`, `twitter:card`, `twitter:title`, `twitter:description`.

- HTML5 semántico: `header`, `nav` (con `aria-label`), `main`, `section` con `id`, `footer`, `table` con `th scope="row"` para el horario.
- Un solo `<h1>` en toda la página (el titular del Hero); el resto de títulos de sección son `<h2>`.
- `lang="es"` correcto en `<html>`.
- Pendiente de futuro (no bloqueante): falta `og:image` — no se fabricó una imagen falsa; agregar una foto real del local cuando esté disponible.

## 4. Agente de Performance — 9/10

- Build de producción: **71.52 KB** JS gzip, **3.99 KB** CSS gzip — liviano para una SPA con formulario, filtro interactivo y 4 secciones.
- Sin librerías externas pesadas (sin router, sin librería de íconos, sin UI kit) — solo React + Tailwind v4.
- Fuentes de Google con `rel="preconnect"` ya incluido, 2 familias con pesos acotados (Archivo 700/800/900, Inter 400/500/600).
- Sin imágenes pesadas (Hero usa bloque de color plano en vez de foto — también ayuda performance, ver nota UX).

## Resultado

Los 4 roles califican ≥ 8/10. Proyecto listo para `/deploy-landing`.
