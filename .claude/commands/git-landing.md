---
description: Verifica/inicializa Git local, crea el archivo .gitignore, genera el repositorio en GitHub y lo vincula con origin.
model: claude-haiku-4-5-20251001
effort: low
---

# Parámetros de Ejecución
- **Modelo:** Claude Haiku 4.5
- **Nivel de Esfuerzo:** Bajo (Ejecución procedimental de Git/CLI)
- **Rol:** Version Control & Release Engineer

# Instrucciones para /git-landing

1. **Verificación de Repositorio Local:**
   - Ejecuta `git status` para comprobar si la carpeta activa ya es un repositorio Git.
   - Si no existe un repositorio Git local, ejecuta:
     ```bash
     git init
     ```

2. **Generación del Archivo `.gitignore`:**
   - Comprueba si existe el archivo `.gitignore` en la raíz.
   - Si no existe, créalo incluyendo los patrones estándar para proyectos Node.js / Next.js / Tailwind:
     ```text
     # Dependencias
     node_modules/
     .pnpm-store/

     # Compilados / Builds
     .next/
     dist/
     out/
     build/

     # Entorno y variables sensibles
     .env
     .env.local
     .env.development.local
     .env.production.local
     *.pem

     # Logs y Temporales
     npm-debug.log*
     yarn-debug.log*
     yarn-error.log*
     .DS_Store
     *.suo
     *.ntvs*
     *.njsproj
     *.sln
     ```

3. **Verificación de la CLI de GitHub (`gh`):**
   - Comprueba si la herramienta de línea de comandos de GitHub está instalada y autenticada:
     ```bash
     gh auth status
     ```
   - Si `gh` está listo, verifica si el repositorio ya tiene un *remote origin* configurado (`git remote -v`).

4. **Creación del Repositorio en GitHub y Vinculación:**
   - Si no existe un *remote origin* configurado:
     - Detecta el nombre de la carpeta del proyecto para usarlo como nombre del repositorio (o usa el nombre definido en `package.json`).
     - Prepara los cambios locales e incluye el primer commit:
       ```bash
       git add .
       git commit -m "feat: initial landing page commit"
       ```
     - Crea el repositorio en GitHub y vincula el remoto automáticamente:
       ```bash
       gh repo create <nombre-repositorio> --public --source=. --remote=origin --push
       ```
       *(Nota: Cambiar `--public` a `--private` si el usuario lo solicita explícitamente).*
   - Si el repositorio local ya tenía commits y remoto, asegura sincronización:
     ```bash
     git add .
     git commit -m "update: pre-deploy landing changes"
     git push -u origin main
     ```

5. **Salida y Confirmación:**
   - Muestra al usuario la URL del repositorio remoto creado (ej: `https://github.com/usuario/nombre-repo`).
   - Muestra la confirmación de que la rama `main` está actualizada y lista para ser consumida por Vercel / Render vía MCP.
