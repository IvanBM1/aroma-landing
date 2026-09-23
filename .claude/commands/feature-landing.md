---
description: Analiza una nueva solicitud de cambio, realiza preguntas aclaratorias si es necesario y genera un plan de trabajo detallado para su aprobación antes de escribir código.
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
   - Examina los archivos del proyecto existente (`LANDING_PLAN.md`, `CLAUDE.md`, componentes de UI activos) para entender el impacto de la nueva característica.

2. **Detección de Ambigüedades y Preguntas Aclaratorias:**
   - Si la solicitud es vaga, faltan detalles de diseño visual, lógica de negocio o comportamiento responsive, **realiza de 2 a 4 preguntas concretas** al usuario antes de generar el plan.
   - Si la solicitud es 100% clara, procede directamente al paso 3.

3. **Generación del Plan de Trabajo (`FEATURE_PLAN.md`):**
   - Crea o actualiza un archivo `FEATURE_PLAN.md` que detalle:
     - **Objetivo del Cambio:** Qué se va a agregar o modificar.
     - **Componentes / Archivos Impactados:** Lista exacta de archivos a crear, modificar o eliminar.
     - **Estrategia de UI/UX:** Cómo se integrará visualmente con el estilo actual definido en `LANDING_PLAN.md`.
     - **Pasos de Implementación:** Checklist secuencial de tareas de código.
     - **Pruebas de Verificación:** Qué se debe probar en `http://localhost:3000` para validar que la característica funciona.

4. **Solicitud de Aprobación (Punto de Control):**
   - Muestra un resumen ejecutivo de `FEATURE_PLAN.md` en la terminal y detén la ejecución con el siguiente mensaje:
     > 🛑 **[Plan de Cambio Generado]** *Por favor revisa `FEATURE_PLAN.md`. Escribe "**aprobar**" para ejecutar los cambios automáticamente, o indica los ajustes que deseas realizar al plan.*

5. **Ejecución y Cierre:**
   - Una vez recibida la aprobación explícita:
     - Ejecuta las modificaciones de código requeridas.
     - Invoca `/dev-landing` para verificar que el servidor local compile sin errores.
     - Invoca `/commit-landing` para registrar un commit semántico profesional (ej: `feat(secction): add new pricing calculator`).
