import './CartButton.css'

import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartButton = () => {
  return (
    <button className="cart-button" type="button">
      <AiOutlineShoppingCart />
      <span className="cart-status">0</span>
    </button>
  )
}

export default CartButton
