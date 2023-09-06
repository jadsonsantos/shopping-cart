import './Cart.css'

import CartItem from 'components/CartItem/CartItem'
import AppContext from 'contexts/AppContext'
import React, { useContext } from 'react'
import formatCurrency from 'utils/formatCurrency'

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <section className={`cart ${isCartVisible && 'cart--active'}`}>
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
