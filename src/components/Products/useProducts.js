import { useEffect, useState } from 'react'

import fetchProducts from '../../api/fetchProducts'

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('celular').then((response) => {
      setProducts(response)
    })
  }, [])

  return { products, setProducts }
}

export default useProducts
