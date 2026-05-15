# 🚀 Portafolio Personal - Bryam Smith Pérez Hernández

> "Creando experiencias digitales fluidas, escribiendo código limpio con herramientas modernas."

Este repositorio contiene el código fuente de mi portafolio profesional interactivo, diseñado para presentar mi perfil como **Desarrollador Fullstack** y **Estudiante de Ingeniería de Sistemas**. El proyecto está enfocado en el alto rendimiento, la arquitectura escalable y un diseño UI/UX en modo oscuro altamente optimizado.

---

## 🛠️ Stack Tecnológico

El proyecto ha sido construido utilizando las mejores prácticas de la industria y un stack moderno:

*   **Core:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/) (para un desarrollo hiper-rápido y builds optimizadas).
*   **Estilizado:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo, utility-first y soporte nativo para Dark Mode).
*   **Iconografía:** [Lucide React](https://lucide.dev/) + Assets SVG personalizados.
*   **Arquitectura:** Diseño Modular, Principios DRY, Clean Code y Patrón Barrel para las exportaciones.

---

## 📂 Estructura del Proyecto

La arquitectura sigue el principio de Separación de Responsabilidades (SoC), garantizando escalabilidad:

```text
├── src/
│   ├── assets/       # Centralización de imágenes, SVGs y el objeto de exportación (Icons)
│   ├── Components/   # Componentes modulares y reutilizables (About, Experience, etc.)
│   │   ├── index.ts  # Implementación de Barrel Pattern para imports limpios
│   ├── App.tsx       # Componente raíz
│   ├── Portafolio.tsx# Orquestador principal de vistas
│   └── main.tsx      # Punto de entrada de React + Vite
├── public/           # Archivos estáticos (favicon, etc.)
├── tailwind.config.js# Configuración global de estilos
└── tsconfig.json     # Configuración estricta de TypeScript
