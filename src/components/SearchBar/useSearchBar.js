import { useState } from 'react'

const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return { searchValue, setSearchValue }
}

export default useSearchBar
