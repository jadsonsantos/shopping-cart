import { useEffect, useState } from 'react'

import fetchProducts from '../../api/fetchProducts'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('celular').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])

  return { products, loading }
}

export default useProducts
