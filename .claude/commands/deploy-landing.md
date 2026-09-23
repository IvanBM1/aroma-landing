---
description: Publica la landing page en producción usando Vercel o Render a través de MCP.
model: claude-haiku-4-5-20251001
effort: low
---

# Parámetros de Ejecución
- **Modelo:** Claude Haiku 4.5
- **Nivel de Esfuerzo:** Bajo (Ejecución procedimental de herramientas)
- **Rol:** Release & DevOps Engineer

# Instrucciones para /deploy-landing

1. **Verificación de Pre-requisitos:**
   - Comprueba que el archivo `AUDIT_REPORT.md` exista y no contenga bloqueadores ni calificaciones inferiores a 8/10. Si falta o tiene fallos, detén el proceso y sugiere ejecutar primero `/audit-landing`.

2. **Verificación de Control de Versiones (bloqueante):**
   - Comprueba que `/git-landing` se haya ejecutado: debe existir un repositorio Git local con al menos un commit y un *remote origin* apuntando a GitHub (`git remote -v`).
   - Si no hay remoto configurado, **detén el proceso** y sugiere ejecutar primero `/git-landing`. No continúes al paso 3 bajo ninguna circunstancia sin este chequeo aprobado.

3. **Selección del Proveedor:**
   - Analiza el argumento del usuario (ej: `/deploy-landing vercel` o `/deploy-landing render`).
   - Si no se especifica ningún proveedor, utiliza **Vercel** de manera predeterminada para proyectos de frontend estático o Next.js, o **Render** si el proyecto detecta un servidor backend Node.js actulizado.

4. **Ejecución del Despliegue (siempre vinculado al repositorio):**
   - **Si el proveedor es Vercel:**
     - Verifica primero si ya existe un proyecto de Vercel vinculado al repositorio (`get_git_deployment_context` / `list_projects`).
     - Si no existe, créalo vinculado al repo de GitHub con `create_git_project` (nunca con `create_deployment` subiendo archivos sueltos — eso deja el proyecto sin vincular a Git, que es justo lo que este comando debe evitar).
     - Si `create_git_project` falla por permisos (error 403 / falta de alcance del token), **detén el proceso** y pide al usuario que vincule el repositorio manualmente desde el dashboard de Vercel (Add New → Project → Import Git Repository). No caigas silenciosamente a un deploy por archivos sueltos como alternativa.
     - Con el proyecto ya vinculado, dispara o confirma el deployment de producción y verifica su estado hasta `READY`.
   - **Si el proveedor es Render:**
     - Utiliza la herramienta MCP de Render o ejecuta los comandos CLI de Render (`render deploy`) para gatillar el Build & Deploy del Static Site / Web Service, vinculado también al repositorio de GitHub (no por upload manual).

5. **Entregable Final:**
   - Devuelve un informe estructurado al usuario con:
     - **URL del Repositorio:** Link al repositorio de GitHub vinculado (creado por `/git-landing`).
     - **URL de Producción:** Link directo a la landing desplegada.
     - **Proveedor:** Vercel o Render.
     - **Status:** Estado del despliegue (Success / Failed).
     - **Resumen Final:** Un listado breve confirmando que se cumplió el plan inicial de `LANDING_PLAN.md`.
