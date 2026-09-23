---
description: Levanta el servidor de desarrollo local para previsualizar e iterar la landing en tiempo real.
model: claude-3-5-haiku
effort: low
---

# Parámetros de Ejecución
- **Modelo:** Claude Haiku 4.5
- **Nivel de Esfuerzo:** Bajo (Gestión de procesos locales)
- **Rol:** Local Environment & Live Preview Manager

# Instrucciones para /server-landing

1. **Detección de Entorno:**
   - Examina `package.json` para identificar el script de desarrollo (ej: `npm run dev`, `npx vite`, `next dev`).

2. **Ejecución del Servidor Local:**
   - Inicia el proceso en segundo plano (o en una sesión terminal gestionada) para no bloquear la interacción con Claude Code.
   - Identifica el puerto y la URL local donde se está sirviendo la aplicación (ej: `http://localhost:3000` o `http://localhost:5173`).

3. **Confirmación y Live Reload:**
   - Muestra al usuario un mensaje claro con la URL local activa para que pueda abrirla en su navegador.
   - Queda a la espera de instrucciones de modificación en tiempo real. Cada cambio guardado por Claude actualizará la vista automáticamente vía Hot Module Replacement (HMR).

4. **Comando de Detención:**
   - Si el usuario indica `/server-landing stop` o confirma que el diseño local está listo, finaliza el proceso del servidor local para liberar el puerto.