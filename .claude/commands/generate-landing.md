---
description: Pipeline autónomo de principio a fin para diseñar, construir, auditar y desplegar una landing page.
model: claude-sonnet-5
effort: max
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Máximo
- **Rol:** Chief Technology Officer & Lead Orchestrator

# Instrucciones para /generate-landing

Actúa como el orquestador principal del equipo autónomo. Sigue esta secuencia estricta:

### **Paso 1: Onboarding e Ideación**
1. Invoca internamente la lógica de `/init-landing`.
2. Genera `LANDING_PLAN.md` con la estrategia, estructura y la paleta de colores basada en el estilo de diseño elegido.
3. Muestra un resumen ejecutivo al usuario y solicita una confirmación rápida (Punto de control 1).

### **Paso 2: Construcción y Servidor Local**
1. Una vez aprobado el plan, ejecuta automáticamente la lógica de `/build-landing`.
2. Escribe todos los archivos, componentes de UI y estilos Tailwind CSS.
3. Levanta el servidor local invocando `/dev-landing` para validar que no existan errores en runtime y que el servidor responda en `http://localhost:[puerto]`.

### **Paso 3: Auditoría y Auto-Corrección Multi-Agente**
1. Sin pausar, ejecuta la suite de auditoría `/audit-landing`.
2. Simula los 4 roles (Code, UX/UI, SEO, Performance).
3. **Loop Autónomo de Corrección:** Si el reporte `AUDIT_REPORT.md` detecta cualquier nota inferior a 8/10, aplica los parches y paros de código inmediatamente de forma autónoma hasta cumplir con la calidad requerida.

### **Paso 4: Control de Versiones (GitHub)**
1. Cuando la auditoría apruebe el proyecto, detén el servidor local.
2. Invoca `/git-landing` para inicializar Git (si hace falta), generar `.gitignore`, crear el repositorio en GitHub y vincular `origin` con el primer commit.
3. Confirma que la rama `main` esté pusheada y lista antes de continuar.

### **Paso 5: Despliegue en Producción via MCP**
1. Invoca `/deploy-landing` (usando Vercel o Render según la arquitectura del proyecto).
2. Muestra la URL del repositorio de GitHub y la URL de producción final al usuario con el informe completo.
