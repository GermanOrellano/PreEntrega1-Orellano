
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartProvider from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'

function App() {

  return (

    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route extact path='/cart' element={<Cart />} />
          <Route exact path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
