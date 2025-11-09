import { useContext, useEffect } from 'react'

import fetchProducts from 'api/fetchProducts'
import AppContext from 'contexts/AppContext'

const useProducts = () => {
  const { setProducts, setLoading } = useContext(AppContext)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const response = await fetchProducts('celular')
        setProducts(Array.isArray(response) ? response : [])
      } catch (error) {
        console.error('Error loading products:', error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [setProducts, setLoading])
}

export default useProducts
