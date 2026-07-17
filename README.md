<div align="center">

# MIMO Real Estate

### Plantilla de Sitio Web para Inmobiliarias de Lujo

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss)

---

Una plantilla moderna y elegante diseñada para inmobiliarias de lujo. Diseño responsive con animaciones sutiles, efectos glassmorphism y estética minimalista.

</div>

---

## Características

- Diseño responsive mobile-first
- Efectos glassmorphism y animaciones sutiles
- Sección hero con imagen de fondo
- Galería de propiedades exclusivas
- Formulario de contacto con WhatsApp
- Sección "Sobre Nosotros" con estadísticas
- Testimonios de clientes
- Servicios ofrecidos
- Footer con información de contacto

## Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.2.10 | Framework React |
| React | 19.2.4 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Utility-first CSS |

---

## Requisitos Previos

- Node.js 18.17 o superior
- npm, yarn o pnpm

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mimo-real-state.git

# Navegar al directorio
cd mimo-real-state

# Instalar dependencias
npm install
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con tu número de WhatsApp:

```bash
NEXT_PUBLIC_PHONE=593XXXXXXXXX
```

Este número se usa en los enlaces de WhatsApp de todo el sitio.

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Producción

```bash
# Construir el proyecto
npm run build

# Iniciar en producción
npm start
```

---

## Estructura del Proyecto

```
mimo-real-state/
├── public/
│   └── images/          # Imágenes del sitio
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Página principal
│   │   └── globals.css  # Estilos globales
│   └── components/
│       ├── Header.tsx   # Navegación
│       ├── Hero.tsx     # Sección principal
│       ├── Properties.tsx # Propiedades
│       ├── About.tsx    # Sobre nosotros
│       ├── Services.tsx # Servicios
│       ├── Testimonials.tsx # Testimonios
│       ├── Contact.tsx  # Contacto
│       └── Footer.tsx   # Pie de página
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Configuración de Imágenes

Coloca tus imágenes en `public/images/`:

| Archivo | Descripción |
|---------|-------------|
| `hero-bg.jpg` | Fondo del hero section |
| `about-bg.jpg` | Imagen de la sección "Sobre Nosotros" |
| `property-*.jpg` | Imágenes de propiedades (opcional) |

---

## Licencia

Este proyecto está bajo la licencia **GNU General Public License v3.0**.

Ver el archivo [LICENSE](LICENSE) para más detalles.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
```

---

<div align="center">

**MIMO Real Estate** © 2026

</div>
