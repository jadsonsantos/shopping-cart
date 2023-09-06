import './ProductCard.css'

import AppContext from 'contexts/AppContext'
import propTypes from 'prop-types'
import React, { useContext } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'

import formatCurrency from '../../utils/formatCurrency'

const ProductCard = ({ data }) => {
  const { title, price, thumbnail } = data
  const { cartItems, setCartItems, setIsCartVisible } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
    setIsCartVisible(true)
  }

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="produto"
        className="product__image"
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price)}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button className="button__add-cart" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired
