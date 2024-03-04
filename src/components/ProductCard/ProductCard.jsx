import './ProductCard.css'

import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'

import propTypes from 'prop-types'

import formatCurrency from 'utils/formatCurrency'

import useProductCard from './useProductCard'

const ProductCard = ({ data }) => {
  const { title, price, thumbnail } = data
  const { handleAddCart } = useProductCard(data)

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="produto"
        className="product__image"
        width={350}
        height={350}
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
