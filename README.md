# Videojuegos "Game On" 🕹️

Aplicación web de eCommerce moderna para comprar videojuegos de PlayStation, desarrollada con **React 19** y **Vite 7**. Incluye navegación intuitiva, carrito de compras funcional, sección de noticias, filtro por categoría, formulario de contacto validado, integración con Bootstrap y mejoras visuales avanzadas.

## 🌐 Enlace en Vivo

[Ver aplicación desplegada en GitHub Pages](https://luciano1633.github.io/react/)

## 🚀 **Últimas Actualizaciones** ⭐

### **Versión 2.0 - Diciembre 2024**
- **🔄 React 19.1.1**: Actualización a la última versión con mejoras de rendimiento
- **🎨 Bootstrap 5.3.8**: Integración completa de Bootstrap + React Bootstrap
- **📋 Formulario de Contacto**: Componente completamente funcional con validación
- **🛠️ ESLint 9**: Configuración moderna con reglas actualizadas
- **🔧 Vite 7**: Build tool actualizado para mejor rendimiento
- **🧹 Cleanup Automático**: AbortController para cancelar fetch al desmontar componentes
- **✨ UX Mejorada**: Feedback visual inmediato en todas las interacciones

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
- **Validación Avanzada**: Validación en tiempo real de nombre, correo y mensaje
- **Feedback Visual Inmediato**: Mensajes de error y éxito instantáneos
- **Limpieza Automática**: Reseteo del formulario tras envío exitoso
- **Diseño Moderno**: Estilos personalizados con Bootstrap y responsivos

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
- **React 19.1.1**: Framework principal con hooks modernos y últimas características
- **Vite 7.1.7**: Build tool ultrarrápido para desarrollo y producción
- **Bootstrap 5.3.8**: Framework CSS para diseño responsivo y componentes
- **React Bootstrap 2.10.10**: Componentes React optimizados para Bootstrap
- **JavaScript ES6+**: Funciones modernas y sintaxis actual
- **ESLint 9.36**: Linting avanzado con configuración moderna
- **GitHub Pages**: Despliegue automático con gh-pages 6.3.0

### **Hooks y Estados Implementados**
- **`useState`**: Gestión múltiple de estados (carrito, productos, noticias, filtro, navegación, formulario)
- **`useEffect`**: Carga asíncrona con fetch API y cleanup automático (AbortController)
- **Estados Compuestos**: Manejo de objetos complejos en carrito y formularios
- **Validación en Tiempo Real**: Estados para errores y éxito en formularios

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
│   ├── ProductList.jsx   # Listado de productos con filtros
│   ├── ProductList.css   # Estilos de productos
│   ├── Cart.jsx          # Carrito de compras interactivo
│   ├── Cart.css          # Estilos del carrito
│   ├── News.jsx          # Sección de noticias
│   ├── News.css          # Estilos de noticias
│   ├── ContactForm.jsx   # Formulario de contacto validado ⭐ NUEVO
│   ├── ContactForm.css   # Estilos del formulario ⭐ NUEVO
│   └── Footer.jsx        # Pie de página
├── products.js           # (Obsoleto) Datos de productos
├── newsData.js           # Datos de noticias con rutas públicas
├── index.css             # Estilos globales
└── main.jsx              # Punto de entrada
public/
├── products.json         # Datos de productos (cargados con fetch) ⭐ ACTUALIZADO
└── assets/
    └── images/           # Imágenes públicas optimizadas
```

## 🎨 Características de Diseño y Buenas Prácticas
### **Criterios y Consideraciones del Profesor**
- ✅ **Estructura modular** y carpetas organizadas
- ✅ **Bootstrap 5.3.8** integrado con React Bootstrap 2.10.10
- ✅ **Componentes React** modernos con hooks
- ✅ **Renderizado condicional** y dinámico avanzado
- ✅ **Fetch API** con cleanup y manejo de errores
- ✅ **Formularios validados** con feedback en tiempo real
- ✅ **Imágenes públicas** optimizadas para Vite/GitHub Pages
- ✅ **ESLint** configurado con reglas modernas
- ✅ **GitHub Actions** para despliegue automático
- ✅ **Documentación completa** en README.md

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
npm run dev      # Servidor de desarrollo (Vite 7)
npm run build    # Construir para producción
npm run lint     # Ejecutar ESLint para verificar código
npm run preview  # Vista previa del build
npm run deploy   # Desplegar a GitHub Pages automáticamente
```

### **Dependencias Principales**
```json
{
  "dependencies": {
    "bootstrap": "^5.3.8",           // Framework CSS
    "react": "^19.1.1",             // React principal
    "react-bootstrap": "^2.10.10",   // Componentes Bootstrap para React
    "react-dom": "^19.1.1"          // React DOM
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^4.1.0",  // Plugin Vite optimizado
    "eslint": "^9.36.0",                   // Linter moderno
    "gh-pages": "^6.3.0",                 // Despliegue automático
    "vite": "^7.1.7"                      // Build tool
  }
}
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
- [x] **React 19** con hooks modernos y optimizaciones
- [x] **Fetch API** con AbortController para cleanup automático
- [x] **Bootstrap 5 + React Bootstrap** completamente integrado
- [x] **Formulario de contacto** con validación en tiempo real
- [x] **ESLint 9** con configuración moderna y reglas actualizadas
- [x] Listado dinámico de productos con useEffect y fetch
- [x] Filtro por categoría de videojuegos
- [x] Carrito de compras con useState avanzado
- [x] Renderizado condicional (carrito vacío, botones, formularios)
- [x] Navegación entre secciones fluida
- [x] Sección de noticias con imágenes públicas
- [x] Estados visuales mejorados con Bootstrap
- [x] Diseño responsivo y accesible
- [x] Despliegue automatizado en GitHub Pages

### 🎯 **Conceptos de React Aplicados**
- [x] **useState**: Gestión compleja de múltiples estados
- [x] **useEffect**: Carga asíncrona con cleanup y AbortController
- [x] **Props**: Comunicación bidireccional entre componentes
- [x] **Renderizado Condicional**: Lógica avanzada de UI
- [x] **Componentes Funcionales**: Arquitectura moderna React 19
- [x] **Validación de Formularios**: Estados y manejo de errores
- [x] **Fetch API**: Peticiones HTTP modernas con manejo de errores
- [x] **Event Handling**: Manejo avanzado de eventos de usuario

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Eres libre de usarlo, modificarlo y distribuirlo.

