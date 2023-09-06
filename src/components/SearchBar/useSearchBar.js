import fetchProducts from 'api/fetchProducts'
import { useState } from 'react'

const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault()
    const products = await fetchProducts(searchValue)
    setSearchValue('')
    console.log(products)
  }

  return { searchValue, setSearchValue, handleSearch }
}

export default useSearchBar
