import './Products.css'

import React, { useContext } from 'react'

import AppContext from 'contexts/AppContext'

import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import useProducts from './useProducts'

const Products = () => {
  useProducts()
  const { loading, products } = useContext(AppContext)

  return (
    (loading && <Loading />) || (
      <div className="container">
        <section className="products">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </section>
      </div>
    )
  )
}

export default Products
