import './Products.css'

import React from 'react'

import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import useProducts from './useProducts'

const Products = () => {
  const { products, loading } = useProducts()

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  )
}

export default Products
