import './Cart.css'

import React, { useContext, useEffect } from 'react'

import CartItem from 'components/CartItem/CartItem'

import AppContext from 'contexts/AppContext'
import formatCurrency from 'utils/formatCurrency'

const Cart = () => {
  const { cartItems, isCartVisible, setCartItems } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem('@cartItems')

    setCartItems(JSON.parse(itemsFromLocalStorage))
  }, [])

  useEffect(() => {
    localStorage.setItem('@cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice)}</div>
    </section>
  )
}

export default Cart
