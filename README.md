# Mercado Libre Arnold Frontend Challenge

Este proyecto es una prueba técnica que implementa una versión simplificada de la búsqueda de productos de Mercado Libre, utilizando React con Vite y el servicio de proxy server de Vite para el manejo de API.

https://github.com/user-attachments/assets/557971e6-bf76-4521-92df-4dc5918aaeed

## 🛠 Tecnologías Utilizadas

- React
- TypeScript
- SASS
- Node.js

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**
```bash
git clone https://github.com/arestrepodev/meli-shop.git
cd meli-shop
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo de Next.js
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter

## 🤔 Decisiones Técnicas

1. **Estados del Cliente**
   - Se implementaron estados para mejorar la experiencia de usuario:
     - Loading: Durante la carga de datos
     - Error: Para manejo de errores
     - Empty: Cuando no hay productos

2. **Modificación de la API**
  - Se configuró el proxy server de Vite para manejar las peticiones a la API, optimizando el flujo de desarrollo y evitando la necesidad de un servidor separado como Express, consumiendo y sanitizando el API desde el cliente.

4. **Estilos**
   - Uso de Sass Embedded para estilos más organizados y modulares en toda la aplicación, de acuerdo a los requerimientos tecnicos

5. **Author Signature**
   - Se implementó la firma del autor en el manejo de datos entre la API y el frontend según lo requerido
   - Se agregó nombre y apellido en el campo author en las respuestas JSON

## 💡 Mejoras Pendientes (Enhancements)
1. **Uso de Express y Testing**
   - No se uso express por motivos de tiempo al volver a hacer la prueba
   - Hacer Unit Testing en los componentes y e2e en el flujo de trabajo con react-testing-library, por motivos de tiempo no hice tests.

2. **Imágenes**
   - Se utilizaron las imágenes de 90x90 proporcionadas por la API
   - Como mejora se podría implementar la búsqueda de imágenes en tamaños más apropiados

## 🗂 Estructura del Proyecto

```
/
├── components/       # Componentes React reutilizables
├── pages/            # Páginas Home, Items, Item
├── api/              # Funciones para traer la data y normalizarla
├── models/           # TypeScript Models
├── public/           # Archivos estáticos
├── styles/           # SCSS Variables           
├── utils             # Funciones utilitarios
└── hooks/            # Custom hooks
```

## 🔍 Funcionalidades Principales

- Búsqueda de productos
- Visualización de resultados
- Detalle de producto
- Manejo de estados de carga y error
- API servidor para gestión de datos
- Firma de autor en respuestas JSON

## 📝 Notas Adicionales

- El proyecto sigue las mejores prácticas de React
- Se implementó TypeScript para mayor seguridad de tipos
- Se utilizó un enfoque modular para facilitar el mantenimiento
- Los tests cubren los componentes críticos de la aplicación
- El breadcrumb se arma a partir de los root paths del API y el ID del item

> [!IMPORTANT]
> 📱 Redes Sociales

- [LinkedIn](https://www.linkedin.com/in/arestrepodev/)
- [GitHub](https://github.com/arestrepodev)
- [Portfolio](https://arnoldrestrepo.dev)
