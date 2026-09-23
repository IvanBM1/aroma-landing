---
description: Analiza una nueva solicitud de cambio, realiza preguntas aclaratorias si es necesario y genera un plan secuencial/descriptivo en docs/
model: claude-sonnet-5
effort: medium
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Medio
- **Rol:** Principal Systems Architect & Feature Lead

# Instrucciones para /feature-landing

1. **Análisis del Requerimiento:**
   - Lee el prompt o la solicitud del usuario.
   - Examina los archivos del proyecto existente (`docs/landing_plan.md`, `CLAUDE.md`, componentes de UI activos) para entender el impacto de la nueva característica.

2. **Detección de Ambigüedades y Preguntas Aclaratorias:**
   - Si la solicitud es vaga, faltan detalles de diseño visual, lógica de negocio o comportamiento responsive, **realiza de 2 a 4 preguntas concretas** al usuario antes de generar el plan.
   - Si la solicitud es 100% clara, procede directamente al paso 3.

3. **Generación del Plan de Trabajo (`docs/feature_plan_[I]_[nombre_descriptivo].md`):**
   - Crea o actualiza un archivo `docs/feature_plan_[I]_[nombre_descriptivo].md` que detalle:
     - **Objetivo del Cambio:** Qué se va a agregar o modificar.
     - **Componentes / Archivos Impactados:** Lista exacta de archivos a crear, modificar o eliminar.
     - **Estrategia de UI/UX:** Cómo se integrará visualmente con el estilo actual definido en `docs/landing_plan.md`.
     - **Pasos de Implementación:** Checklist secuencial de tareas de código.
     - **Pruebas de Verificación:** Qué se debe probar en `localhost` para validar que la característica funciona.

4. **Solicitud de Aprobación (Punto de Control):**
   - Muestra un resumen ejecutivo de `docs/feature_plan_[I]_[nombre_descriptivo].md` en la terminal.

5. **Ejecución y Cierre:**
   - Una vez recibida la aprobación explícita:
     - Ejecuta las modificaciones de código requeridas usando `/build-landing docs/feature_plan_[I]_[nombre_descriptivo].md`.
     - Invoca `/server-landing` para verificar que el servidor local compile sin errores.
     - Invoca `/build-landing docs/feature_plan_[I]_[nombre_descriptivo].md` para realizar los cambios.
