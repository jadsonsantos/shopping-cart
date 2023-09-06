import './App.css'

import Provider from 'contexts/Provider'
import React from 'react'

import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {
  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  )
}

export default App
