import fetchProducts from 'api/fetchProducts'
import AppContext from 'contexts/AppContext'
import { useContext, useEffect } from 'react'

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
