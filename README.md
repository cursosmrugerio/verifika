# Verifika Consultores - Sitio Web

Clon exacto del sitio web de Verifika Consultores (verifika.mx) desarrollado con HTML, CSS y JavaScript puro.

## 📋 Descripción

Este proyecto es una réplica completa del sitio corporativo de Verifika Consultores, una empresa especializada en Administración Integral de Riesgos y Prevención de Lavado de Dinero (PLD/FT).

## 🚀 Características

- **HTML5 Semántico**: Estructura clara y accesible
- **CSS3 Moderno**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript Vanilla**: Sin dependencias, código limpio y eficiente
- **Responsive Design**: Adaptable a móvil, tablet y desktop
- **Optimizado para SEO**: Meta tags, estructura semántica
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Navegación Fluida**: Scroll suave entre secciones
- **Carousel Automático**: Carrusel de clientes con autoplay
- **Accordion Interactivo**: Sección de servicios expandible
- **Formulario de Contacto**: Validación y manejo de datos

## 📁 Estructura del Proyecto

```
sitioWeb/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos completos
├── js/
│   └── main.js            # Funcionalidades JavaScript
├── images/                # Imágenes generales
├── assets/
│   ├── logos/            # Logos de Verifika
│   ├── clientes/         # Imágenes de clientes
│   └── documentos/       # PDFs de noticias/documentos
└── README.md             # Este archivo
```

## 🎨 Secciones del Sitio

1. **Header**: Navegación fija con menú responsive
2. **Hero**: Video de presentación de YouTube
3. **Nosotros**: Información corporativa, misión, visión y valores
4. **Servicios**: Accordion con sistema PLD/FT, auditorías y manuales
5. **Clientes**: Carrusel automático de logos
6. **Noticias**: Documentos y evaluaciones en PDF
7. **Contacto**: Formulario y mapa de Google Maps
8. **Footer**: Información de contacto y copyright

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - Variables CSS (Custom Properties)
  - CSS Grid
  - Flexbox
  - Media Queries
  - Animaciones y Transiciones
- **JavaScript ES6+**:
  - Classes
  - Template Literals
  - Arrow Functions
  - Intersection Observer API
  - Event Delegation

## 📦 Instalación

1. Clona o descarga el proyecto
2. Descarga las imágenes del sitio original y colócalas en las carpetas correspondientes
3. Abre `index.html` en tu navegador

No se requiere instalación de dependencias ni build tools.

## 🖼️ Recursos Necesarios

### Imágenes a descargar del sitio original:

**Logos:**
- `assets/logos/logo-verifika.png` (logo color)
- `assets/logos/logo-verifika-white.png` (logo blanco para footer)

**Sección Nosotros:**
- `assets/nosotros.jpg`

**Clientes (12 imágenes):**
- `assets/clientes/proagro.jpg`
- `assets/clientes/seguros-argos.jpg`
- `assets/clientes/sisnova.jpg`
- `assets/clientes/xxi-banorte.jpg`
- `assets/clientes/afore-coppel.jpg`
- `assets/clientes/aig-seguros.jpg`
- `assets/clientes/finanzas-atlas.jpg`
- `assets/clientes/hdi-seguros.jpg`
- `assets/clientes/hir-seguros.jpg`
- `assets/clientes/ivercap.jpg`
- `assets/clientes/pensionisste.jpg`
- `assets/clientes/principal.jpg`

**Documentos PDF:**
- `assets/documentos/tipologias.pdf`
- `assets/documentos/evaluacion-nacional.pdf`
- `assets/documentos/informe-evaluacion-mutua.pdf`

## 🎯 Funcionalidades JavaScript

### 1. Navegación Móvil
- Menú hamburguesa responsive
- Cierre automático al hacer clic en links
- Cierre al hacer clic fuera del menú

### 2. Navegación Activa
- Resalta la sección actual en el menú
- Actualización dinámica al hacer scroll

### 3. Scroll Suave
- Navegación fluida entre secciones
- Compensación por header fijo

### 4. Accordion de Servicios
- Expandir/colapsar secciones
- Transiciones suaves

### 5. Carousel de Clientes
- Autoplay cada 4 segundos
- Responsive (1, 2, 3 o 4 items por vista)
- Dots de navegación
- Pause on hover (opcional)

### 6. Formulario de Contacto
- Validación HTML5
- Prevención de envío sin checkbox
- Reset después de enviar
- Preparado para integración con backend

### 7. Animaciones en Scroll
- Fade-in y slide-up en elementos
- Intersection Observer API
- Optimizado para performance

## 🎨 Paleta de Colores

```css
--color-primary: #00AB4F       /* Verde principal */
--color-primary-dark: #003644  /* Azul oscuro */
--color-secondary: #CC3366     /* Rosa/Magenta */
--color-text: #333333          /* Texto principal */
--color-text-light: #666666    /* Texto secundario */
--color-bg-light: #F6F6F6      /* Fondo claro */
--color-bg-dark: #1D2129       /* Fondo oscuro */
--color-success: #5CB85C       /* Verde éxito */
```

## 🔤 Tipografía

- **Fuente Principal**: Montserrat (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Iconos**: Font Awesome 6.4.0

## 📱 Responsive Breakpoints

```css
/* Desktop: > 992px (default) */
/* Tablet: ≤ 992px */
/* Mobile: ≤ 768px */
/* Small Mobile: ≤ 480px */
```

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --color-primary: #TU_COLOR;
}
```

### Modificar Secciones
Cada sección tiene su propio bloque en el HTML con clases descriptivas.

### Agregar Nuevos Clientes
Agrega items en el carousel:
```html
<div class="carousel-item">
    <img src="assets/clientes/nuevo-cliente.jpg" alt="Cliente">
</div>
```

## 🌐 Deploy

Este sitio puede ser desplegado en:
- GitHub Pages
- Netlify
- Vercel
- Cualquier servidor web (Apache, Nginx, etc.)

Simplemente sube todos los archivos al servidor.

## ✅ Checklist de Implementación

- [x] Estructura HTML completa
- [x] Estilos CSS responsive
- [x] JavaScript funcional
- [x] Navegación móvil
- [x] Accordion de servicios
- [x] Carousel de clientes
- [x] Formulario de contacto
- [x] Animaciones en scroll
- [ ] Descargar imágenes del sitio original
- [ ] Agregar PDFs de documentos
- [ ] Testing en múltiples navegadores
- [ ] Optimización de imágenes
- [ ] Testing de rendimiento

## 📝 Notas de Desarrollo

### Decisiones Técnicas

1. **HTML Puro**: No se usa ningún framework para máxima velocidad
2. **CSS Variables**: Facilita la personalización de temas
3. **JavaScript Moderno**: ES6+ para código limpio
4. **No jQuery**: Vanilla JS para mejor rendimiento
5. **Mobile First**: Diseño responsive desde el inicio
6. **Intersection Observer**: Para animaciones eficientes
7. **Debounce**: Para optimizar eventos de scroll

### Compatibilidad

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Solución de Problemas

### El menú móvil no funciona
Verifica que `js/main.js` esté correctamente enlazado.

### Las imágenes no cargan
Verifica las rutas de las imágenes y que existan en las carpetas correctas.

### El carousel no se mueve
Revisa la consola del navegador para errores de JavaScript.

### Formulario no envía
El formulario está preparado para integración backend. Necesitas configurar el endpoint.

## 📄 Licencia

Este es un proyecto de práctica/ejemplo. Los derechos del diseño original pertenecen a Verifika Consultores.

## 👨‍💻 Autor

Desarrollado como clon exacto del sitio verifika.mx

## 📞 Contacto Original

- **Sitio**: https://verifika.mx
- **Teléfono**: 55 1850 8784
- **Email**: contacto@verifika.mx
- **Dirección**: Miguel Angel 50 P-3, Santa María Nonoalco, CDMX 03700, México

---

**Última actualización**: Octubre 2025
