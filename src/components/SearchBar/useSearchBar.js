import fetchProducts from 'api/fetchProducts'
import AppContext from 'contexts/AppContext'
import { useContext, useState } from 'react'

const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const { setProducts, setLoading } = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  return { searchValue, setSearchValue, handleSearch }
}

export default useSearchBar
