---
description: Ejecuta un panel de 4 sub-agentes para auditar y corregir el código.
model: claude-sonnet-5
effort: max
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Máximo (Pensamiento analítico riguroso)
- **Roles:** Code Auditor, UX/UI Expert, SEO Specialist, QA Engineer

# Instrucciones para /audit-landing
Aplica un análisis profundo sobre el repositorio actuando como 4 agentes independientes:

1. **Agente de Código:** Revisa tipado, imports, rendimiento y limpieza.
2. **Agente UX/UI:** Evalúa contraste, jerarquía, responsive design y estados interactivos.
3. **Agente SEO:** Verifica OpenGraph, etiquetas semánticas HTML5 y `<h1>` único.
4. **Agente de Performance:** Audita assets, tamaños de bundles y librerías externas.

Si encuentras calificaciones menores a 8/10 en cualquier área, aplica los cambios y correcciones directamente en el código de forma autónoma antes de generar `AUDIT_REPORT.md`.
