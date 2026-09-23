---
description: Publica la landing page en producción usando Vercel a través de MCP o la CLI de Vercel.
model: claude-3-5-haiku
effort: low
---

# Parámetros de Ejecución
- **Modelo:** Claude 3.5 Haiku
- **Nivel de Esfuerzo:** Bajo (Ejecución procedimental de herramientas)
- **Rol:** Release & DevOps Engineer

# Instrucciones para /deploy-landing

1. **Verificación de Pre-requisitos:**
   - Comprueba que el archivo `docs/audit_report.md` exista y no contenga bloqueadores ni calificaciones inferiores a 8/10. Si falta o tiene fallos, detén el proceso y sugiere ejecutar primero `/audit-landing`.

2. **Verificación de Control de Versiones (bloqueante):**
   - Comprueba que `/git-landing` se haya ejecutado: debe existir un repositorio Git local con al menos un commit y un *remote origin* apuntando a GitHub (`git remote -v`).
   - Si no hay remoto configurado, **detén el proceso** y sugiere ejecutar primero `/git-landing`. No continúes al paso 3 sin este chequeo aprobado.

3. **Ejecución del Despliegue en Vercel (Vinculado a GitHub):**
   - Verifica primero si el proyecto ya está vinculado a Vercel mediante el servidor MCP de Vercel o comprobando el contexto del repositorio con `get_git_deployment_context` / `list_projects`.
   - **Caso A (Proyecto Nuevo):** Si no existe un proyecto vinculado, créalo en Vercel apuntando directamente al repositorio de GitHub mediante `create_git_project`. *(Nunca uses `create_deployment` subiendo archivos sueltos para evitar proyectos huérfanos sin integración Git)*.
   - **Manejo de Errores / Permisos MCP:** Si `create_git_project` falla debido a limitaciones de permisos en el token, utiliza la CLI de Vercel en terminal (`npx vercel --prod`) o solicita al usuario vincular el repo directamente desde el Dashboard de Vercel (*Add New → Project → Import Git Repository*).
   - Confirmada la vinculación, dispara o verifica el estado del despliegue en producción hasta que alcance el estado `READY`.

4. **Entregable Final:**
   - Presenta un informe estructurado con:
     - **URL del Repositorio:** Enlace al repositorio de GitHub creado por `/git-landing`.
     - **URL de Producción:** Enlace público generado por Vercel (ej: `https://tu-landing.vercel.app`).
     - **Proveedor:** Vercel.
     - **Status:** Estado final del despliegue (`Success` / `READY`).