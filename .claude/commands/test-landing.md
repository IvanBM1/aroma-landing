---
description: Levanta el servidor local y utiliza el MCP de Playwright para realizar pruebas funcionales interactuando con el navegador en tiempo real.
model: claude-sonnet-5
effort: high
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Alto (Análisis visual, simulación de interacción de usuario y aserciones)
- **Rol:** Principal QA Automation & E2E Testing Engineer

# Instrucciones para /test-landing

1. **Verificación del Entorno Local:**
   - Asegura que el servidor local de desarrollo esté corriendo (o invoca internamente `/server-landing`).
   - Confirma la URL activa en localhost.

2. **Ejecución de Pruebas Autónomas de Navegador (vía MCP Playwright):**
   Usa las herramientas del MCP de Playwright para simular a un usuario real siguiendo este protocolo de pruebas:

   - **Prueba 1: Carga Básica y Renderizado**
     - Navega a `http://localhost:PUERTO`.
     - Verifica que no existan errores fatales en la consola del navegador.
     - Toma una captura de pantalla completa de la página (`screenshots/screenshot-web.png`).

   - **Prueba 2: Funcionalidad de Formularios y CTA**
     - Localiza todos los botones principales de llamada a la acción (CTA) y formularios de contacto/registro.
     - Simula la escritura de datos de prueba en los campos de texto (`playwright_fill`).
     - Realiza clic en el botón de envío y verifica si se muestran mensajes de éxito, validaciones o modals correspondientes.

   - **Prueba 3: Navegación e Interactividad**
     - Prueba enlaces internos, menús desplegables, acordeones de FAQ o modales.
     - Evalúa la navegación por scroll hacia las distintas secciones de la landing.

   - **Prueba 4: Responsividad (Mobile / Desktop)**
     - Redimensiona el viewport del navegador a resolución móvil (390x844 px).
     - Verifica que el menú hamburguesa o navegación móvil funcione correctamente.
     - Toma una captura de pantalla móvil (`screenshots/screenshot-mobile.png`).

3. **Generación de Reporte (`docs/test_report.md`):**
   - Crea un reporte detallado en `docs/test_report.md` estructurado en:
     - **Resumen:** Total de pruebas ejecutadas, aprobadas y fallidas.
     - **Hallazgos y Evidencias:** Capturas de pantalla guardadas y descripción de errores visuales o funcionales detectados.
     - **Acciones Correctivas Requeridas:** Código o componentes específicos que necesitan parches.

4. **Auto-Corrección o Notificación:**
   - Si se detectan fallos funcionales (ej. botones incompletos, enlaces rotos, formularios que no responden), aplica las correcciones necesarias en los archivos de código de forma autónoma.
   - Vuelve a ejecutar la prueba del área corregida para confirmar el pase a verde.
