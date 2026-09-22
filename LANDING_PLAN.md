# LANDING_PLAN.md — Aroma

## 1. Resumen ejecutivo

**Aroma** es una cafetería de especialidad. Landing page de una sola página, estilo **Swiss Design (International Typographic Style)** reinterpretado en paleta cálida, dirigida a jóvenes y estudiantes, con tono fresco/casual/directo. Objetivo de conversión: reservas de mesa + exploración del menú.

- **Propuesta de valor única:** café de especialidad — grano de origen único, tueste propio, métodos de preparación premium (pour-over, espresso).
- **Público objetivo:** jóvenes y estudiantes.
- **Tono de comunicación:** fresco, casual, directo. Frases cortas, verbos en imperativo, cero relleno corporativo.

## 2. Estilo visual — Swiss Design cálido

Principios del Swiss Design aplicados: grid estricto de 12 columnas, asimetría balanceada, tipografía grotesca en negrita como protagonista, mucho espacio en blanco, bordes rectos (sin `border-radius` salvo excepción puntual), jerarquía por tamaño/peso tipográfico en vez de decoración.

Diferencia clave vs. Swiss clásico: el rojo/negro/blanco tradicional se reemplaza por una paleta cálida de cafetería, manteniendo el mismo rigor de grid y contraste alto.

### Paleta de colores (HEX)

| Token | HEX | Uso |
|---|---|---|
| `background` | `#F7F1E8` | Fondo general, tipo papel crema |
| `foreground` (secondary) | `#2B1B12` | Texto, headers, footer — marrón espresso casi negro |
| `primary` (accent) | `#D9622B` | CTA, botones, acentos — terracota/naranja quemado (reemplaza el rojo Swiss) |
| `accent-warm` | `#E8A33D` | Tags de menú, hovers, detalles — mostaza cálido |
| `surface` | `#FFFFFF` | Cards, formulario, fondo de bloques elevados |
| `muted` | `#D8CBB8` | Bordes, separadores, estados disabled |

### Tipografía (Google Fonts)

- **Display / headings:** `Archivo` (peso 700–900) — grotesca, ancha, con presencia tipográfica fuerte, ideal para titulares Swiss.
- **Body / UI:** `Inter` (peso 400–600) — grotesca neutra, alta legibilidad en párrafos, menú y formulario.

### Tokens clave de Tailwind CSS

```
colors: {
  background: '#F7F1E8',
  foreground: '#2B1B12',
  primary: '#D9622B',
  'accent-warm': '#E8A33D',
  surface: '#FFFFFF',
  muted: '#D8CBB8',
}
fontFamily: {
  display: ['Archivo', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
borderRadius: {
  DEFAULT: '0px',   // Swiss: rectas por defecto
  sm: '2px',        // única excepción puntual (inputs, chips)
}
boxShadow: {
  DEFAULT: 'none',           // Swiss: plano, sin sombra pesada
  card: '0 1px 0 0 #2B1B12', // línea dura tipo "underline", no drop-shadow
}
```

## 3. Arquitectura de la información (secciones)

1. **Hero**
   - Titular grande (Archivo, 900), grid asimétrico con bloque de color `primary` como acento geométrico.
   - Copy: "Café de origen. Tueste propio. Tu lugar." + CTA directo a Reservas.
2. **Menú interactivo**
   - Grid de categorías (Café / Pastelería / Para llevar), filtrable.
   - Cards `surface` con `card` shadow, tags de precio/origen en `accent-warm`.
   - Copy corto por ítem, sin descripciones largas — directo al público joven.
3. **Formulario de reservas**
   - Campos: nombre, fecha, hora, N° de personas, comentario opcional.
   - Botón `primary`, confirmación inline clara.
   - Copy: "Guardá tu mesa. Sin vueltas."
4. **Ubicación y horario**
   - Dirección, mapa embebido, horario de atención en tabla simple tipo grid Swiss.
5. **Footer**
   - Contacto, redes sociales, copyright. Fondo `foreground`, texto `background` (inversión de contraste).

## 4. Estrategia de copywriting (conversión)

- Frases cortas, ritmo directo, sin adjetivos vacíos.
- CTA siempre en imperativo: "Reservá tu mesa", "Mirá el menú", "Vení a probarlo".
- Tono cómplice con el público joven/estudiante: cercano, sin formalidad excesiva, sin emojis (coherente con rigor tipográfico Swiss).
- Jerarquía visual hace el trabajo pesado — el copy no necesita "vender" con exceso de texto, la tipografía grande ya genera impacto.

## 5. Próximo paso

Aprobar este plan para continuar con `/build-landing` (construcción del código + preview local).
