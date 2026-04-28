# Jairo977.github.io - Portafolio Profesional

Portafolio personal de **Jairo Ruiz**, desarrollado como sitio estático y publicado en GitHub Pages.

## Vista general

- Sitio bilingüe (ES/EN)
- Modo claro/oscuro con persistencia
- Posicionamiento profesional integral: Full-Stack + Datos + BI + Automatización
- Sección de servicios profesionales y casos de éxito (problema → solución → impacto)
- Habilidades mostradas por evidencia de entregables (sin porcentajes inflados)
- Secciones: Sobre mí, experiencia, proyectos, habilidades, certificaciones y contacto
- Formulario de contacto con EmailJS + acción directa por WhatsApp
- Previsualización de proyectos en modal
- Navbar móvil de iconos fijo en la parte inferior (mejor UX en teléfonos)
- CV ATS en español e inglés: `cv/cv-ats-jairo-ruiz-es.md` y `cv/cv-ats-jairo-ruiz-en.md`

## Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5
- Lucide Icons

## Estructura

```text
.
├── index.html
├── css/
│   └── styles-pro.css
├── js/
│   └── main.js
└── images/
```

## Desarrollo local

Como es un sitio estático, puedes abrirlo directamente o levantar un servidor local:

```bash
# opción simple con Python
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Despliegue

Este repositorio está preparado para desplegarse en **GitHub Pages** desde la rama principal.

## Mejoras recientes

- Corrección de enlaces de proyectos hacia repositorios reales en GitHub.
- Corrección de enlace de microservicios (`Publicaiones`) para evitar 404.
- Protección en enlaces externos con `rel="noopener noreferrer"`.
- Modal de proyectos con contenido real por proyecto (ya no placeholder).
- Implementación de barra de navegación móvil por iconos con estado activo por sección.
