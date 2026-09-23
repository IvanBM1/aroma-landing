---
description: Desarrolla el código completo siguiendo un plan de trabajo especificado e inicia la vista previa local.
model: claude-sonnet-5
effort: high
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Alto
- **Rol:** Lead Front-End Engineer
- **Parámetro de Entrada ($1):** $1

# Instrucciones para /build-landing

1. Lee detenidamente **`$1`** o `docs/landing_plan.md` en caso de no tener un parametro y `CLAUDE.md`.
2. Dedica un razonamiento profundo a planificar la arquitectura de componentes antes de escribir código.
3. Antes de realizar cambios en el código, verifica la rama actual (`git branch --show-current`). Si estás en `main`, crea y cambia a una rama nueva con el nombre del plan.
4. Estructura e implementa la aplicación (archivos HTML, componentes React/Next.js, Tailwind CSS, fuentes e imágenes), escribiendo componentes modulares, responsivos y accesibles (WCAG AA).
5. Aplica las variables de colores e identidad visual en Tailwind CSS.
6. Asegúrate de instalar todas las dependencias necesarias con `npm install`.
7. Ejecuta `npm run build` o el verificador de sintaxis para confirmar que el código compila a la perfección.
8. Una vez generado y verificado el código base:
   - Invoca automáticamente el comando `/server-landing` para iniciar el servidor local.
   - Presenta la URL `http://localhost:[puerto]` al usuario para que pueda revisar el resultado en su navegador.