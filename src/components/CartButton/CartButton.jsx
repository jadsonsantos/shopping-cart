import './CartButton.css'

import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import AppContext from 'contexts/AppContext'

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return (
    <button
      className="cart-button"
      type="button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  )
}

export default CartButton
