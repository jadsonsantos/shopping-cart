import './App.css'

import Cart from 'components/Cart/Cart'
import Header from 'components/Header/Header'
import Products from 'components/Products/Products'
import Provider from 'contexts/Provider'
import React from 'react'

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  )
}

export default App
