---
description: Inicia el onboarding, pregunta por el estilo visual deseado y genera docs/landing_plan.md.
model: claude-sonnet-5
effort: medium
---

# Parámetros de Ejecución
- **Modelo:** Claude Sonnet 5
- **Nivel de Esfuerzo:** Medio
- **Rol:** Lead UX/UI Designer & Product Strategist

# Instrucciones para /init-landing

1. **Evaluación e Interacción Inicial:**
   Analiza el prompt inicial del usuario. Si faltan datos clave para el proyecto, realiza de 3 a 5 preguntas enfocadas en:
   
   - **Nombre de marca / proyecto y propuesta de valor única.**
   - **Público objetivo y tono de comunicación.**
   - **Secciones clave requeridas** (Hero, Testimonios, Pricing, Formulario, FAQ, etc.).
   - **Estilo de Diseño Visual / Referencia de Arte:** 
     Pregunta explícitamente cuál de los siguientes estilos se adapta mejor al proyecto o si prefiere una combinación:
     - *Minimalismo* (Líneas limpias, espacio negativo, tipografía prominente)
     - *Maximalismo* (Colores saturados, capas complejas, dinamismo visual)
     - *Cyberpunk* (Luces neón, paleta oscura, estética high-tech / low-life)
     - *Vector Art* (Ilustraciones planas o 2D, bordes definidos, vectores limpios)
     - *Glassmorphism* (Efectos de vidrio esmerilado, blur traslúcido, sombras suaves)
     - *Hand Written / Sketches* (Elementos dibujados a mano, tipografía cursiva u orgánica)
     - *Aurora Design* (Degradados suaves y brillantes estilo aurora boreal, mallas de color)
     - *Swiss Design (International Typographic Style)* (Grid estricto, sans-serif audaz, asimetría balanceada)
     - *Y2K Design* (Estética de los 2000s, metálicos, burbujas, tonos rosa/plateado, vibraciones retro-tech)
     - *Pixel Art* (Gráficos nostálgicos de 8/16-bits, bordes dentados)
     - *Clay Style (Claymorphism)* (Efectos 3D blandos, bordes muy redondeados, sombras infladas)
     - *Pop Art* (Colores primarios fuertes, tramas de puntos Lichtenstein, contraste alto)
     - *Retro* (Tonos sepia, estética 70s/80s, textura de papel, grano vintage)
     - *Collage Art* (Recortes de periódicos, fotografías superpuestas, arte ecléctico)
     - *Surreal Art* (Composiciones oníricas, proporciones ilógicas, arte abstracto)
     - *Futuristic* (Líneas depuradas, interfaces holográficas, tonos fríos y metálicos)
     - *Bohemian (Boho)* (Tonos tierra, textura orgánica, patrones botánicos o tribales)
     - *Graffiti / Street Art* (Trazo urbano, tipografía marcadora, salpicaduras)
     - *Editorial* (Diseño estilo revista de alta costura, serifas elegantes, bloques de texto amplios)
     - *Victorian Style* (Ornamentos detallados, bordes intrincados, tipografía clásica victoriana)

2. **Generación de `docs/landing_plan.md`:**
   Una vez recibidas las respuestas (o si el usuario ya las proporcionó):
   - Traduce el **Estilo de Diseño seleccionado** a reglas concretas de UI/UX:
     - Definición de paleta de colores (Primary, Secondary, Accent, Background) en código HEX.
     - Selección de fuentes de Google Fonts (Ej: tipografía display para encabezados y sans-serif/serif para cuerpo acorde al estilo).
     - Configuración de tokens y clases clave de **Tailwind CSS** (ej. sombras, bordes, efectos de glass, gradientes o bordes de pixel).
   - Define la arquitectura de información (sección por sección) con el copy de conversión.
   - Solicita la aprobación del usuario para proceder a la construcción con `/build-landing`.