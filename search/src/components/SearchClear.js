import React from 'react'
import './SearchClear.css'

const SearchClear = ({ onClick }) => (
   <button aria-label="Clear" className="SearchClear" onClick={onClick}>×</button>
)

export default SearchClear