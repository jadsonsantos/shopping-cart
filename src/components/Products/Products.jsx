import './Products.css'

import AppContext from 'contexts/AppContext'
import React, { useContext } from 'react'

import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import useProducts from './useProducts'

const Products = () => {
  useProducts()
  const { loading, products } = useContext(AppContext)

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
