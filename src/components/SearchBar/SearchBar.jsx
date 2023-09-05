import './SearchBar.css'

import React from 'react'
import { BsSearch } from 'react-icons/bs'

import useSearchBar from './useSearchBar'

const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearchBar()

  return (
    <form className="search-bar">
      <input
        type="search"
        className="search__input"
        placeholder="Buscar produtos"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar
