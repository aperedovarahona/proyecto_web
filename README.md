# 📖 Documentación del Proyecto: Página Web Corporativa Estática

## 📌 Descripción General
El presente proyecto consiste en el desarrollo de una **página web estática** para la presentación de una empresa.  
Su finalidad es servir como una plataforma informativa que concentre datos relevantes sobre la organización, incluyendo sus servicios, proyectos y formas de contacto.

La implementación se realizó con **HTML, CSS y JavaScript**, priorizando un diseño responsivo, ligero y de fácil acceso desde diferentes dispositivos.

---

## 🎯 Objetivos del Proyecto

### Objetivo General
Diseñar y desarrollar una **página web estática corporativa** que permita visibilizar la identidad, servicios y proyectos de la empresa, con un diseño accesible y adaptable.

### Objetivos Específicos
- Implementar una estructura web clara y organizada que presente información relevante de la empresa.  
- Integrar secciones diferenciadas para **servicios, proyectos, información institucional y contacto**.  
- Garantizar un diseño **responsivo**, accesible desde dispositivos móviles y de escritorio.  
- Aplicar principios de diseño web moderno utilizando **HTML, CSS y JavaScript**.  
- Facilitar la comunicación con clientes mediante un apartado de **información de contacto** y, opcionalmente, un formulario.  

---

## 📌 Alcances del Proyecto
- El sitio web está limitado a ser **estático**, es decir, no cuenta con un backend ni con una base de datos.  
- Contempla las siguientes secciones principales:
  - **Inicio:** presentación general de la empresa.  
  - **Servicios:** descripción de las soluciones ofrecidas.  
  - **Proyectos:** portafolio visual de trabajos realizados.  
  - **Sobre Nosotros:** misión, visión y valores de la organización.  
  - **Contacto:** información de ubicación, correo electrónico y teléfono.  
- Incluye un **diseño responsivo** adaptable a dispositivos móviles, tablets y computadoras de escritorio.  
- Uso de recursos visuales como imágenes, iconos y tipografía coherente con la identidad corporativa.  
- No incluye panel de administración ni sistema de gestión de contenidos (CMS).  

---

## 🛠 Tecnologías Utilizadas
- **HTML5:** estructura semántica del contenido.  
- **CSS3:** estilos, maquetación y diseño responsivo.  
- **JavaScript:** interactividad básica en la interfaz.  
- **Recursos opcionales:**  
  - Bootstrap o Tailwind CSS (para mejorar el diseño responsivo).  
  - EmailJS (para habilitar el envío de formularios sin backend).  

---

## 📂 Estructura del Proyecto
```bash
│
├── index.html                  # Página principal
├── about.html                  # Sobre nosotros (misión, visión, valores, equipo)
├── projects.html               # Proyectos y resultados (proyectos + trabajos realizados)
├── contact.html                # Contáctanos (formulario + redes)
├── location.html               # Ubicación (Google Maps interactivo)
│
├── assets/                     # Archivos estáticos
│   ├── css/                    # Hojas de estilo
│   │   ├── main.css
│   │   ├── reset.css
│   │   └── responsive.css      # Opcional: estilos para móviles
│   │
│   ├── js/                     # Scripts de JavaScript
│   │   ├── main.js             # Animaciones, menús, scroll
│   │   └── form.js             # Validación del formulario de contacto
│   │
│   ├── img/                    # Imágenes del sitio
│   │   ├── logo.png
│   │   ├── banner/             # Imagen destacada para la portada
│   │   │   └── portada.jpg
│   │   ├── projects/           # Imágenes de proyectos
│   │   │   ├── proyecto1.jpg
│   │   │   ├── proyecto2.jpg
│   │   │   └── ...
│   │   ├── trabajos/           # Imágenes de trabajos realizados
│   │   │   ├── trabajo1.jpg
│   │   │   ├── trabajo2.jpg
│   │   │   └── ...
│   │   └── team/               # Fotos del equipo
│   │       ├── miembro1.jpg
│   │       ├── miembro2.jpg
│   │       └── ...
│   │
│   └── fonts/                  # Fuentes personalizadas (puede ser si)
│
├── docs/                       # Documentación o PDFs (quiza?)
│   └── guia.pdf                # Guía del sitio o manual para la fundación
│
└── README.md                   # Información básica del proyecto
