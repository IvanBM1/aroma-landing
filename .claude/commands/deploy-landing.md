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

2. **Verificación de Control de Versiones:**
   - Comprueba que `/git-landing` se haya ejecutado: debe existir un repositorio Git local con al menos un commit y un *remote origin* apuntando a GitHub (`git remote -v`).
   - Si no hay remoto configurado, detén el proceso y sugiere ejecutar primero `/git-landing`.

3. **Selección del Proveedor:**
   - Analiza el argumento del usuario (ej: `/deploy-landing vercel` o `/deploy-landing render`).
   - Si no se especifica ningún proveedor, utiliza **Vercel** de manera predeterminada para proyectos de frontend estático o Next.js, o **Render** si el proyecto detecta un servidor backend Node.js actulizado.

4. **Ejecución del Despliegue:**
   - **Si el proveedor es Vercel:**
     - Utiliza la herramienta MCP de Vercel (`vercel_create_deployment` o equivalente) vinculando la carpeta raíz del proyecto.
   - **Si el proveedor es Render:**
     - Utiliza la herramienta MCP de Render o ejecuta los comandos CLI de Render (`render deploy`) para gatillar el Build & Deploy del Static Site / Web Service.

5. **Entregable Final:**
   - Devuelve un informe estructurado al usuario con:
     - **URL del Repositorio:** Link al repositorio de GitHub vinculado (creado por `/git-landing`).
     - **URL de Producción:** Link directo a la landing desplegada.
     - **Proveedor:** Vercel o Render.
     - **Status:** Estado del despliegue (Success / Failed).
     - **Resumen Final:** Un listado breve confirmando que se cumplió el plan inicial de `LANDING_PLAN.md`.
