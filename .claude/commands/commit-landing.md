---
description: Analiza los cambios en Git y realiza un commit semántico profesional siguiendo la especificación Conventional Commits.
model: claude-3-5-haiku
effort: low
---

# Parámetros de Ejecución
- **Modelo:** Claude Haiku 4.5
- **Nivel de Esfuerzo:** Bajo (Análisis rápido de sintaxis y diffs)
- **Rol:** Git & Release Standards Engineer

# Instrucciones para /commit-landing

1. **Inspección de Cambios:**
   - Si se utilzo el comando `/feature-landing` analiza el archivo para generar una descripción mas precisa en el commit.
   - Ejecuta `git status` para detectar los archivos modificados, creados o eliminados.
   - Ejecuta `git diff --staged` (o `git diff` si no hay cambios agregados al staging) para analizar el contenido de las modificaciones.
   - Pregunta al usuario si requiere que realice el merge a la rama master o main, o si solo se queda el cambio en la rama actual.

2. **Formateo del Mensaje según Conventional Commits:**
   - Determina la naturaleza del cambio y asigna el **tipo (type)** correspondiente:
     - `feat:` Nuevas características o componentes agregados a la landing.
     - `fix:` Correcciones de errores o bugs en el código o estilos.
     - `docs:` Cambios en la documentación (`README.md`, `CLAUDE.md`, planes de trabajo).
     - `style:` Ajustes visuales de Tailwind CSS, fuentes, paletas de colores o formato sin afectar lógica.
     - `refactor:` Reestructuración de componentes o código sin cambiar su comportamiento.
     - `perf:` Mejoras de rendimiento (optimización de imágenes, fuentes, assets).
     - `test:` Adición o corrección de pruebas unitarias/E2E.
     - `chore:` Tareas de mantenimiento, actualización de dependencias (`package.json`) o ajustes de configuración.

3. **Estructura del Commit:**
   - **Título (Subject):** Debe ser conciso (máximo 50-72 caracteres), en imperativo y en minúsculas (ej: `feat(hero): add call to action button with neon glow effect`).
   - **Cuerpo (Body - Opcional):** Si el cambio es amplio o incluye auditorías/correcciones, añade una breve descripción explicativa de qué y por qué se realizó el cambio.

4. **Ejecución y Confirmación:**
   - Agrega todos los cambios relevantes al área de preparación:
     ```bash
     git add .
     ```
   - Realiza el commit ejecutando:
     ```bash
     git commit -m "<tipo>(<alcance-opcional>): <descripción-breve>"
     ```
   - Muestra al usuario el mensaje de commit generado y el hash corto asignado (`git log -1 --stat`).
