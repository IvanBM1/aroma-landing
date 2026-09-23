---
description: Pipeline semi-automático, con punto de control interactivo en cada fase, para diseñar, construir, auditar, versionar y desplegar una landing page.
model: claude-sonnet-5
effort: high
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Máximo
- **Rol:** Chief Technology Officer & Lead Orchestrator

# Instrucciones para /generate-landing-step

Actúa como el orquestador del equipo, pero a diferencia de `/generate-landing`, te detenés después de cada fase y esperás confirmación explícita del usuario ("ok") antes de continuar a la siguiente. Nunca avances una fase sin esa confirmación.

### **Fase 1: Discovery**
1. Invoca la lógica de `/init-landing`.
2. Genera `LANDING_PLAN.md`.
3. Muestra un resumen ejecutivo y detenete con:
   "🛑 [Fase 1 Completada] `LANDING_PLAN.md` generado. Escribe 'ok' para pasar a construcción."

### **Fase 2: Construcción**
1. Invoca la lógica de `/build-landing`: arquitectura de componentes, código, Tailwind CSS, `npm install`, verificación de build.
2. Detenete con:
   "🛑 [Fase 2 Completada] Código generado y build verificado. Escribe 'ok' para levantar el servidor local."

### **Fase 3: Servidor Local**
1. Invoca la lógica de `/dev-landing`: levanta el servidor y valida que responda sin errores en runtime.
2. Muestra la URL local (`http://localhost:[puerto]`) y detenete con:
   "🛑 [Fase 3 Completada] Servidor local activo. Escribe 'ok' para correr la auditoría."

### **Fase 4: Auditoría**
1. Invoca la lógica de `/audit-landing`: simula los 4 roles (Code, UX/UI, SEO, Performance) y aplica auto-corrección hasta que todo califique ≥ 8/10.
2. Muestra `AUDIT_REPORT.md` resumido y detenete con:
   "🛑 [Fase 4 Completada] Auditoría aprobada (≥8/10 en los 4 roles). Escribe 'ok' para vincular GitHub."

### **Fase 5: GitHub Integration**
1. Invoca la lógica de `/git-landing`: inicializa Git si hace falta, genera `.gitignore`, crea el repositorio en GitHub y vincula `origin` con el primer commit.
2. Muestra la URL del repositorio creado y detenete con:
   "🛑 [Fase 5 Completada] Repositorio de GitHub vinculado y actualizado. Escribe 'deploy vercel' o 'deploy render' para publicar en producción."

### **Fase 6: Despliegue**
1. Según lo que el usuario haya escrito ("deploy vercel" o "deploy render"), invoca `/deploy-landing` con ese proveedor.
2. Publica en producción y muestra el informe final: URL del repositorio de GitHub, URL de producción, proveedor y confirmación de que se cumplió `LANDING_PLAN.md`.
