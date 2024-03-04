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
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchResults(searchValue)
    setSearchValue('')
  }

  return { searchValue, setSearchValue, handleSearch }
}

export default useSearchBar
