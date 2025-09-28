# Tienda de Videojuegos PlayStation

Una aplicación web de eCommerce para comprar videojuegos de PlayStation, desarrollada con React y Vite.

## Funcionalidades

- **Listado de Productos**: Muestra juegos de PS con nombre, precio normal, precio oferta, descripción e imagen.
- **Carrito de Compras**: Permite agregar y eliminar productos, muestra contador total y precio total.
- **Interfaz Responsiva**: Diseño moderno y adaptable a diferentes dispositivos.

## Tecnologías Utilizadas

- React 19
- Vite
- JavaScript ES6+
- CSS3

## Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/videosjuegos.git
   cd videosjuegos
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
│   └── images/          # Imágenes de los productos
├── App.jsx              # Componente principal
├── App.css              # Estilos globales
├── ProductList.jsx      # Componente de listado de productos
├── ProductList.css      # Estilos del listado
├── Cart.jsx             # Componente del carrito
├── Cart.css             # Estilos del carrito
├── products.js          # Datos de los productos
└── main.jsx             # Punto de entrada
```

## Imágenes

Coloca las imágenes de los productos en `src/assets/images/` con los nombres especificados en `products.js`.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
