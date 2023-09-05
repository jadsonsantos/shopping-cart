import './Products.css'

import React from 'react'

import ProductCard from '../ProductCard/ProductCard'
import useProducts from './useProducts'

const Products = () => {
  const { products } = useProducts()

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  )
}

export default Products
