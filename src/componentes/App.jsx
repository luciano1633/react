import { useState, useEffect } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import News from './News'
import Footer from './Footer'
import { products as initialProducts } from '../products'
import { news as initialNews } from '../newsData'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [news, setNews] = useState([])

  // useEffect para simular carga de datos desde fuente externa
  useEffect(() => {
    // Simular carga asíncrona de productos y noticias
    const loadData = async () => {
      // Simular delay de carga para demostrar useEffect
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Cargar datos desde archivos locales (simulando API externa)
      setProducts(initialProducts)
      setNews(initialNews)
    }
    
    loadData()
  }, []) // Array vacío significa que se ejecuta solo una vez al montar el componente

  // Función para agregar producto al carrito
  // Si el producto ya existe, incrementa la cantidad; si no, lo agrega con cantidad 1
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // Función para remover producto del carrito
  // Reduce la cantidad en 1; si llega a 0, lo elimina completamente
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 })
          }
        } else {
          acc.push(item)
        }
        return acc
      }, [])
    )
  }

  // Calcular total de productos y precio total del carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.offerPrice || item.normalPrice) * item.quantity, 0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Videojuegos "Game On"</h1>
        <div className="cart-summary">
          <span>Carrito: {totalItems} productos - Total: ${totalPrice.toLocaleString()}</span>
        </div>
      </header>
      <main>
        <ProductList products={products} cart={cart} onAddToCart={addToCart} />
        <Cart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          totalItems={totalItems}
          totalPrice={totalPrice}
        />
        <News news={news} />
      </main>
      <footer className="app-footer">
        <p>© 2025 Videojuegos. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
