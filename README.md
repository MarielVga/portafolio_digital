#  Mariela Vega - Portafolio Digital

¡Hola! Soy **Mariela Vega**, una desarrolladora Full Stack / Talento Junior Tech enfocada en el desarrollo frontend. Este repositorio contiene el código fuente de mi portafolio digital, creado para mostrar mis proyectos, habilidades y mi enfoque técnico.

## 🎯 Sobre este proyecto

Este portafolio es un sitio web estático desarrollado como proyecto final (Módulo 9) para prepararme para mi inserción en el mercado laboral IT. Su objetivo es demostrar mis capacidades técnicas, mi identidad profesional y mi comprensión de las buenas prácticas de la industria.

### ✨ Características Principales

*   **Diseño Moderno y Responsivo:** Construido con HTML5 semántico y Tailwind CSS para una visualización óptima en cualquier dispositivo.
*   **Modo Oscuro Integrado:** Lógica JavaScript modularizada (ES6+) para alternar entre temas claro y oscuro, con persistencia en `localStorage`.
*   **SEO Técnico Implementado:** 
    *   Etiquetas Open Graph para vistas previas en redes sociales.
    *   Archivos `robots.txt` y `sitemap.xml` configurados.
    *   Datos Estructurados (JSON-LD) para mejorar la visibilidad en motores de búsqueda.
*   **Accesibilidad (A11y):** Incluye un `skip-link` para la navegación por teclado y etiquetas `aria` en elementos interactivos.
*   **Página de Error Personalizada:** Incluye un archivo `404.html` para manejar enlaces rotos sin perder la coherencia visual.
*   **Opción de Impresión:** Estilos optimizados (`@media print`) para exportar el portafolio como un CV en PDF directamente desde el navegador.

## 🛠️ Tecnologías Utilizadas

*   **Estructura:** HTML5
*   **Estilos:** CSS3, Tailwind CSS (vía CDN)
*   **Comportamiento:** JavaScript (ES6+ Modules)
*   **Íconos:** FontAwesome

## 📂 Estructura del Proyecto

El código está organizado siguiendo buenas prácticas de separación de responsabilidades:

```text
portafolio-mariela/
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globales, variables y utilidades
│   └── js/
│       ├── utils/
│       │   └── themeConfig.js # Lógica modular del modo oscuro
│       └── app.js          # Archivo JS principal (Entry point)
├── docs/                   # (Opcional) Carpeta para el CV en PDF
├── index.html              # Página principal del portafolio
├── 404.html                # Página de error personalizada
├── robots.txt              # Reglas para crawlers
├── sitemap.xml             # Mapa del sitio para SEO
└── README.md               # Este archivo
```



## 💻 Cómo ver el proyecto localmente
Este proyecto no requiere la instalación de dependencias, frameworks ni un entorno de servidor backend.

Clonar el repositorio:
```Bash
git clone [https://github.com/MarielVga/portafolio-mariela.git](https://github.com/MarielVga/portafolio-mariela.git)
```

Abrir la carpeta:
```Bash
cd portafolio-mariela
```

Visualizar: Puedes abrir el archivo index.html directamente en tu navegador. Alternativamente, para una mejor experiencia de desarrollo, puedes usar una extensión como Live Server en VS Code o ejecutar:
```Bash
npx live-server
```

## 🌐 Publicación y Hosting
El portafolio está configurado para ser desplegado fácilmente utilizando GitHub Pages, que actúa como el servicio de hosting para publicar el portafolio en línea. El dominio público resultante será `https://marielvga.github.io/portafolio-mariela/`.

## 📬 Contacto
Si quieres conversar sobre oportunidades, proyectos o código, puedes encontrarme en:

**LinkedIn**: https://www.linkedin.com/in/mariela-vega-b4b2313a/

**GitHub**: https://github.com/MarielVga

Desarrollado con dedicación y enfoque ágil.