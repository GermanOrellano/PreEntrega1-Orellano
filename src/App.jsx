import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'


function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route exact path='*' element={<h1>404 NOT FOUND</h1>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
