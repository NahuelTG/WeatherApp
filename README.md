# Proyecto React + TypeScript con Vite y SWC

Este proyecto está construido utilizando Vite como herramienta de desarrollo, React con TypeScript (React.tsx) como librería principal y SWC como compilador, con el objetivo de lograr una experiencia de desarrollo rápida, moderna y alineada con una implementación lo más "pura" posible de React.

## Tecnologías principales

-  **Vite** – Bundler y servidor de desarrollo
-  **React** – Librería de interfaz de usuario
-  **TypeScript** – Tipado estático
-  **SWC** – Compilador escrito en Rust, enfocado en alto rendimiento
-  **pnpm** – Gestor de dependencias
-  **CSS Modules** – Estilos encapsulados por componente
-  **SVGR** – Importación de SVGs como componentes React

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

-  **Node.js** (versión recomendada: LTS)
-  **pnpm**

```bash
npm install -g pnpm
```

## Instalación y ejecución del proyecto

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalación de dependencias

Se recomienda utilizar pnpm para mantener coherencia con el entorno del proyecto:

```bash
pnpm install
```

### 3. Ejecución en entorno de desarrollo

```bash
pnpm run dev
```

El proyecto estará disponible por defecto en:

```
http://localhost:5173
```

## Scripts disponibles

-  `pnpm run dev` – Inicia el servidor de desarrollo
-  `pnpm run build` – Genera la versión de producción
-  `pnpm run preview` – Previsualiza el build de producción

## Decisiones técnicas

### Elección del entorno de desarrollo

Se evaluaron las siguientes alternativas:

-  Vite
-  Astro
-  Next.js

La decisión final fue **Vite**, por las siguientes razones:

-  Permite trabajar con React de forma directa y sin abstracciones adicionales.
-  Ofrece un entorno de desarrollo rápido y ligero.
-  Facilita una experiencia más cercana a la implementación "pura" de React, que es relevante para el objetivo de este proyecto.

**Astro**, aunque muy eficiente y veloz, introduce una forma distinta de integrar React mediante archivos y patrones que no se alinean completamente con el propósito de la prueba.

**Next.js**, por su parte, es un framework más robusto que incorpora características (routing avanzado, SSR, SSG, etc.) que no son necesarias para este caso y que modificarían significativamente la forma de implementación.

### Uso de SWC

Se utiliza **SWC** como compilador en lugar de Babel debido a que:

-  Está escrito en Rust, lo que mejora notablemente los tiempos de compilación.
-  Reduce el tiempo de ejecución en desarrollo y build.
-  Está perfectamente integrado con Vite y React.

### Estructura del proyecto

La estructura del proyecto se basa en experiencia previa y buenas prácticas, priorizando:

-  Claridad en la organización de carpetas
-  Separación de responsabilidades
-  Escalabilidad

Se optó por una estructura simple y funcional, evitando sobreingeniería.

### Arquitectura de estado y lógica

Se implementa un único hook principal que es useWeather, encargado de:

-  Centralizar la lógica de interacción
-  Construir la capa de acceso a la API (servicios)
-  Controlar el flujo de datos hacia la vista

Este enfoque permite mantener componentes más limpios y una lógica reutilizable.

### Estilos: CSS Modules

Se decidió utilizar **CSS Modules** debido a que:

-  Evitan colisiones de nombres de clases
-  Facilitan el mantenimiento de estilos por componente
-  No requieren una metodología adicional (como BEM), simplificando el desarrollo

### Desarrollo de la interfaz

La interfaz fue diseñada utilizando **Gemini**, apoyándose en la integración con canvas para:

-  Prototipar visualmente la UI
-  Acelerar el diseño de componentes
-  Mantener coherencia visual durante la implementación

### Manejo de SVGs

Se utiliza **SVGR** para Vite, lo que permite:

-  Importar SVGs directamente como componentes React
-  Reducir código innecesario
-  Mejorar la legibilidad y reutilización de íconos

**Ejemplo:**

```tsx
import IconExample from "@/assets/icon.svg?react";
```
