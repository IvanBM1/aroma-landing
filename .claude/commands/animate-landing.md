---
description: Diseña e implementa animaciones, microinteracciones y efectos de scroll para mejorar el UX de la landing page.
model: claude-3-5-sonnet
effort: high
---

# Parámetros de Ejecución
- **Modelo:** Claude 3.5 Sonnet
- **Nivel de Esfuerzo:** Alto (Diseño de interacción, física de animaciones y optimización de rendimiento)
- **Rol:** Principal Motion & Creative UX/UI Engineer
- **Componente o Sección ($1):** $1

# Instrucciones para /animate-landing

1. **Estrategia de Control de Ramas (Git):**
   - Verifica la rama activa (`git branch --show-current`).
   - Si estás en la rama `main`, crea y cambia automáticamente a una rama de trabajo secundaria dedicada:
     ```bash
     git checkout -b feat/ux-animations
     ```

2. **Análisis de Elementos Animables:**
   - Si el usuario especificó una sección o componente en `$1` (ej. `/animate-landing hero` o `/animate-landing cards`), enfócate prioritariamente en ese componente.
   - Si `$1` está vacío, analiza toda la landing page identificando oportunidades clave para mejorar el UX:
     - **Hero Section:** Efectos de entrada progresiva (staggering), revelado de texto y botones CTA con pulso/hover interactivo.
     - **Scroll Reveal:** Animaciones de entrada (fade-up, slide-in) a medida que el usuario navega por la página.
     - **Feedback Visual:** Hover states en tarjetas, sombras dinámicas y retroalimentación táctil en botones/formularios.
     - **Transiciones:** Suavizado de acordeones FAQ, menús desplegables y modales.

3. **Selección de Tecnología:**
   - **Framer Motion:** Utilízala para animaciones complejas de entrada, gestos, modales o layouts interactivos. Instalación previa si no existe: `npm install framer-motion`.
   - **Tailwind CSS Transitions:** Utiliza clases nativas (`transition-all duration-300 ease-in-out`, `hover:scale-105`) para microinteracciones simples de botones y enlaces para mantener el bundle ligero.

4. **Reglas Estrictas de UX & Performance (Cero Jittering):**
   - **Respetar `prefers-reduced-motion`:** Asegura que las animaciones se desactiven o simplifiquen para usuarios con sensibilidad al movimiento.
   - **Optimización de Rendimiento:** Anima únicamente propiedades aceleradas por GPU (`transform` y `opacity`). Evita animar `width`, `height`, `top` o `margin`.
   - **Sutileza Profesional:** Mantén las animaciones breves (200ms - 500ms max) para no ralentizar la navegación del usuario.

5. **Prueba y Verificación:**
   - Inicia el servidor local invocando `/dev-landing`.
   - Muestra un resumen de los componentes animados y sugiere realizar pruebas de interacción.
   - Invoca `/commit-landing` para registrar un commit semántico profesional (ej. `style(ux): add framer-motion scroll reveal to hero section`).