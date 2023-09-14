import './SearchResults.css'

import AppContext from 'contexts/AppContext'
import React, { useContext } from 'react'

const SearchResults = () => {
  const { products, searchResults } = useContext(AppContext)

  return (
    searchResults && (
      <div className="search-results">
        <div className="container">
          <div className="search-results__term">{searchResults}</div>
          <div className="search-results__total">
            {products.length} resultados
          </div>
        </div>
      </div>
    )
  )
}

export default SearchResults
