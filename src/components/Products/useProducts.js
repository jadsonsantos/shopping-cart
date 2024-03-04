import { useContext, useEffect } from 'react'

import fetchProducts from 'api/fetchProducts'
import AppContext from 'contexts/AppContext'

const useProducts = () => {
  const { setProducts, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('celular').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])
}

export default useProducts
