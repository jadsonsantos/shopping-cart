import React, { useState } from 'react'

import propTypes from 'prop-types'

import AppContext from './AppContext'

const Provider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    searchValue,
    setSearchValue,
    searchResults,
    setSearchResults
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default Provider

Provider.propTypes = {
  children: propTypes.any
}.isRequired
