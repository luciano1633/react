# Videojuegos "Game On"

Una aplicación web de eCommerce para comprar videojuegos de PlayStation, desarrollada con React y Vite. Incluye listado de productos, carrito de compras funcional y sección de noticias.

## 🌐 Enlace en Vivo

[Ver aplicación desplegada](https://luciano1633.github.io/react/)

## Funcionalidades

- **Listado de Productos**: Muestra juegos de PS con nombre, precio normal, precio oferta, descripción e imagen completa.
- **Carrito de Compras**: Permite agregar y eliminar productos, muestra contador total y precio total.
- **Sección de Noticias**: Artículos sobre PlayStation con imágenes y fechas.
- **Interfaz Responsiva**: Diseño moderno con bordes redondeados, adaptable a dispositivos móviles y desktop.
- **Colores Personalizados**: Títulos en blanco sobre fondos oscuros para mejor contraste.

## Tecnologías Utilizadas

- React 19
- Vite
- JavaScript ES6+
- CSS3
- GitHub Pages para despliegue

## Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/luciano1633/react.git
   cd react
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Despliegue en GitHub Pages

1. Crea un repositorio público en GitHub.

2. Actualiza `vite.config.js` con el nombre de tu repositorio:
   ```javascript
   base: '/tu-nombre-de-repo/',
   ```

3. Construye y despliega:
   ```bash
   npm run deploy
   ```

4. En GitHub, ve a Settings > Pages y configura la rama `gh-pages` como fuente.

## Estructura del Proyecto

```
src/
├── assets/
│   └── images/
│       ├── games/          # Imágenes de productos
│       └── news/           # Imágenes de noticias
├── components/             # (Opcional, componentes separados)
├── App.jsx                 # Componente principal
├── App.css                 # Estilos globales
├── ProductList.jsx         # Componente de listado de productos
├── ProductList.css         # Estilos del listado
├── Cart.jsx                # Componente del carrito
├── Cart.css                # Estilos del carrito
├── News.jsx                # Componente de noticias
├── News.css                # Estilos de noticias
├── products.js             # Datos de los productos
├── newsData.js             # Datos de las noticias
└── main.jsx                # Punto de entrada
```

## Imágenes

- **Productos**: Coloca las imágenes en `src/assets/images/games/` y actualiza `products.js` con imports.
- **Noticias**: Coloca las imágenes en `src/assets/images/news/` y actualiza `newsData.js` con imports.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
