---
description: Desarrolla el código completo siguiendo LANDING_PLAN.md e inicia la vista previa local.
model: claude-sonnet-5
effort: high
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Alto
- **Rol:** Lead Front-End Engineer

# Instrucciones para /build-landing

1. Lee detenidamente `LANDING_PLAN.md` y `CLAUDE.md`.
2. Dedica un razonamiento profundo a planificar la arquitectura de componentes antes de escribir código.
3. Estructura e implementa la aplicación (archivos HTML, componentes React/Next.js, Tailwind CSS, fuentes e imágenes), escribiendo componentes modulares, responsivos y accesibles (WCAG AA).
4. Aplica las variables de colores e identidad visual en Tailwind CSS.
5. Asegúrate de instalar todas las dependencias necesarias con `npm install`.
6. Ejecuta `npm run build` o el verificador de sintaxis para confirmar que el código compila a la perfección.
7. Una vez generado y verificado el código base:
   - Invoca automáticamente el comando `/dev-landing` para iniciar el servidor local.
   - Presenta la URL `http://localhost:[puerto]` al usuario para que pueda revisar el resultado en su navegador.
8. Pregunta al usuario si desea realizar ajustes estéticos/de contenido locales antes de pasar a la auditoría (`/audit-landing`).
