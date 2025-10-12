import { useState, useEffect } from 'react'
import ProductList from './componentes/ProductList'
import Cart from './componentes/Cart'
import Footer from './componentes/Footer'
import Navbar from './componentes/Navbar'
import ContactForm from './componentes/ContactForm'
import News from './componentes/News'
import { news as initialNews } from './newsData'
// import { products as initialProducts } from './products'
import './componentes/App.css'

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [activeSection, setActiveSection] = useState('products') // Estado para navegación
  const [news] = useState(initialNews)
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  // useEffect para cargar productos usando Fetch API y cleanup
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('/react/products.json', { signal });
        if (!response.ok) throw new Error('Error al cargar productos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error al obtener productos:', error);
        }
      }
    };

    fetchProducts();

    // Cleanup para abortar fetch si el componente se desmonta
    return () => {
      controller.abort();
    };
  }, []);



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
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <header className="app-header">
        <div className="cart-summary">
          <span>Carrito: {totalItems} productos - Total: ${totalPrice.toLocaleString()}</span>
        </div>
      </header>
      <main>
        {activeSection === 'products' ? (
          <>
            <ProductList
              products={products}
              cart={cart}
              onAddToCart={addToCart}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <Cart
              cart={cart}
              onRemoveFromCart={removeFromCart}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          </>
        ) : activeSection === 'news' ? (
          <News news={news} />
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
