import './CartItem.css'

import React, { useContext } from 'react'
import { BsFillCartDashFill } from 'react-icons/bs'

import propTypes from 'prop-types'

import AppContext from 'contexts/AppContext'
import formatCurrency from 'utils/formatCurrency'

const CartItem = ({ data }) => {
  const { id, thumbnail, title, price } = data
  const { cartItems, setCartItems } = useContext(AppContext)

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id)
    setCartItems(updatedItems)
  }

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsFillCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object
}.isRequired
