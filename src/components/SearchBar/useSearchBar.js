import { useContext } from 'react'

import fetchProducts from 'api/fetchProducts'
import AppContext from 'contexts/AppContext'

const useSearchBar = () => {
  const {
    setProducts,
    setLoading,
    searchValue,
    setSearchValue,
    setSearchResults
  } = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()

    if (!searchValue.trim()) {
      return
    }

    try {
      setLoading(true)
      const products = await fetchProducts(searchValue)
      setProducts(Array.isArray(products) ? products : [])
      setSearchResults(searchValue)
      setSearchValue('')
    } catch (error) {
      console.error('Error searching products:', error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  return { searchValue, setSearchValue, handleSearch }
}

export default useSearchBar
