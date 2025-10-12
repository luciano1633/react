# Videojuegos "Game On" 🕹️

Aplicación web de eCommerce para comprar videojuegos de PlayStation, desarrollada con React y Vite. Incluye navegación intuitiva, carrito de compras funcional, sección de noticias, filtro por categoría, formulario de contacto y mejoras visuales.

## 🌐 Enlace en Vivo

[Ver aplicación desplegada en GitHub Pages](https://luciano1633.github.io/react/)

## ✨ Funcionalidades Principales

### 🛒 **ECommerce Completo**
- **Listado Dinámico de Productos**: Juegos de PS con nombre, precios (normal y oferta), descripción, imágenes y categoría
- **Filtro por Categoría**: Filtra productos por género desde botones interactivos
- **Carrito de Compras Interactivo**: Agregar/eliminar productos con contador total y precio acumulado
- **Estados Visuales del Carrito**: Indicadores visuales (color verde + texto) cuando productos están agregados
- **Resumen del Carrito**: Muestra cantidad de productos y total en tiempo real

### 📰 **Sección de Noticias**
- **Artículos de PlayStation**: Contenido actualizado con imágenes y fechas (imágenes desde carpeta public)
- **Navegación Independiente**: Sección dedicada sin elementos del carrito
### 📬 **Formulario de Contacto**
- **Validación de Campos**: Nombre, correo y mensaje con feedback visual
- **Diseño Moderno**: Estilos personalizados y responsivos

### 🧭 **Navegación Inteligente**
- **Barra de Navegación**: Navegación fluida entre Productos y Noticias
- **Estados Activos**: Indicadores visuales de sección actual
- **Contenido Contextual**: Carrito solo visible en sección de productos

### 📱 **Interfaz Moderna**
- **Diseño Responsivo**: Adaptable a móviles, tablets y desktop
- **Tema Oscuro**: Colores personalizados con excelente contraste
- **Animaciones Suaves**: Transiciones y efectos hover
- **UX Optimizada**: Feedback visual inmediato en todas las interacciones

## 🛠️ Tecnologías y Conceptos de React

### **Tecnologías Utilizadas**
- **React 19**: Framework principal con hooks modernos
- **Vite**: Build tool rápido para desarrollo
- **JavaScript ES6+**: Funciones modernas y sintaxis actual
- **CSS3**: Estilos personalizados sin frameworks externos
- **GitHub Pages**: Despliegue automático

### **Hooks y Estados Implementados**
- **`useState`**: Gestión de estados para carrito, productos, noticias, filtro de categoría y navegación
- **`useEffect`**: Carga asíncrona de productos desde `public/products.json` usando fetch
- **Estados Compuestos**: Manejo de objetos complejos en el carrito

### **Patrones de React**
- **Renderizado Condicional**: Mensajes de carrito vacío, estados de botones
- **Props y State Lifting**: Comunicación entre componentes
- **Componentes Funcionales**: Arquitectura moderna con hooks
- **Estructura Modular**: Separación clara de responsabilidades

## 🚀 Instalación y Uso

### **Requisitos Previos**
- Node.js (versión 16 o superior)
- npm o yarn

### **Pasos de Instalación**
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/luciano1633/react.git
   cd react
   ```

2. **Instala dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Accede a la aplicación**:
   - Abre [http://localhost:5173](http://localhost:5173) en tu navegador
   - La aplicación se recarga automáticamente con cambios

## 📁 Estructura del Proyecto

```
src/
├── componentes/           # Componentes React organizados
│   ├── App.jsx           # Componente principal con navegación
│   ├── App.css           # Estilos principales
│   ├── Navbar.jsx        # Barra de navegación
│   ├── Navbar.css        # Estilos de navegación
│   ├── ProductList.jsx   # Listado de productos
│   ├── ProductList.css   # Estilos de productos
│   ├── Cart.jsx          # Carrito de compras
│   ├── Cart.css          # Estilos del carrito
│   ├── News.jsx          # Sección de noticias
│   ├── News.css          # Estilos de noticias
│   └── Footer.jsx        # Pie de página
├── assets/
│   └── images/
│       ├── games/        # Imágenes de videojuegos
│       └── news/         # Imágenes de artículos
├── products.js           # (Obsoleto) Datos de productos, ahora se usa products.json
├── newsData.js           # Datos de noticias (imágenes por ruta pública)
├── products.json         # Datos de productos (usado con fetch)
├── newsData.js           # Datos de noticias
├── index.css             # Estilos globales
└── main.jsx              # Punto de entrada
```

## 🎨 Características de Diseño y Buenas Prácticas
### **Criterios y Consideraciones del Profesor**
- Estructura modular y carpetas organizadas
- Uso correcto de HTML, CSS y Bootstrap 5
- Componentes Bootstrap integrados con React
- Renderizado condicional y dinámico
- Datos externos cargados con fetch y useEffect
- Imágenes servidas desde carpeta public
- No se versiona node_modules
- Rama gh-pages para despliegue
- Documentación clara en README.md

### **Paleta de Colores**
- **Fondo Principal**: `#242424` (gris oscuro)
- **Texto**: `rgba(255, 255, 255, 0.87)` (blanco con transparencia)
- **Botones Normales**: `#3498db` (azul)
- **Botones en Carrito**: `#27ae60` (verde)
- **Bordes**: `#3498db` (azul para consistencia)

### **Componentes Interactivos**
- **Botones de Navegación**: Estados activos con fondo azul
- **Botones de Producto**: Cambio visual al agregar al carrito
- **Efectos Hover**: Transiciones suaves en todos los elementos
- **Feedback Visual**: Confirmación inmediata de acciones

## 📸 Capturas de Pantalla

### **Sección de Productos**
- Lista de juegos con precios y ofertas
- Botones que cambian de azul a verde al agregar
- Carrito con resumen de productos

### **Sección de Noticias**
- Artículos de PlayStation con imágenes
- Navegación limpia sin elementos del carrito

### **Carrito de Compras**
- Lista de productos agregados
- Contadores de cantidad y precios
- Mensaje cuando está vacío

## 🚀 Despliegue en GitHub Pages

### **Configuración Automática**
1. **Construye el proyecto**:
   ```bash
   npm run build
   ```

2. **Despliega automáticamente**:
   ```bash
   npm run deploy
   ```

3. **Verifica el despliegue**:
   - Ve a tu repositorio en GitHub
   - Configura Pages con la rama `gh-pages`
   - Accede a `https://tu-usuario.github.io/react/`

### **Configuración Manual**
Si necesitas configurar manualmente, actualiza `vite.config.js`:
```javascript
export default defineConfig({
  base: '/react/',
  // ... resto de configuración
})
```

## 🔧 Desarrollo y Contribución

### **Comandos Disponibles**
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa del build
npm run deploy   # Desplegar a GitHub Pages
```

### **Flujo de Desarrollo**
1. **Fork** el proyecto
2. **Crea una rama** para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. **Realiza cambios** siguiendo las mejores prácticas
4. **Commit** descriptivo: `git commit -m 'Agrega nueva funcionalidad'`
5. **Push** a tu rama: `git push origin feature/nueva-funcionalidad`
6. **Abre un Pull Request**

### **Mejores Prácticas Implementadas**
- ✅ **Código Modular**: Componentes separados y reutilizables
- ✅ **Comentarios Descriptivos**: Explicación de funcionalidades complejas
- ✅ **Nombres Claros**: Variables y funciones autoexplicativas
- ✅ **Estructura Lógica**: Carpetas organizadas por funcionalidad
- ✅ **Sin Duplicación**: Código DRY (Don't Repeat Yourself)
- ✅ **Imágenes por ruta pública**: Compatible con Vite y despliegue
- ✅ **Datos externos con fetch**: products.json y newsData.js

## 📊 Estado del Proyecto

### ✅ **Funcionalidades Completadas**
- [x] Listado dinámico de productos con useEffect y fetch
- [x] Filtro por categoría de videojuegos
- [x] Carrito de compras con useState
- [x] Renderizado condicional (carrito vacío, botones)
- [x] Navegación entre secciones
- [x] Sección de noticias con imágenes públicas
- [x] Formulario de contacto validado
- [x] Estados visuales mejorados
- [x] Diseño responsivo
- [x] Despliegue en GitHub Pages

### 🎯 **Conceptos de React Aplicados**
- [x] **useState**: Gestión de múltiples estados
- [x] **useEffect**: Carga de datos asíncrona
- [x] **Props**: Comunicación entre componentes
- [x] **Renderizado Condicional**: Lógica de UI
- [x] **Componentes Funcionales**: Arquitectura moderna

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Eres libre de usarlo, modificarlo y distribuirlo.

