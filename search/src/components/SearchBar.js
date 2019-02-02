import React, { Component } from 'react'
import SearchResults from './SearchResults'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    const { clearInput, fetchedQuery, fetchQueryResult, hits, placeholder, value } = this.props

    return (
      <div>
        <div className="SearchBar">
          <input 
            className="SearchBar-input" 
            onChange={event => fetchQueryResult(event.target.value)} 
            placeholder={placeholder}
            value={value}
          />
          <button className="SearchBar-clear" onClick={clearInput}>×</button>
        </div>
        {hits.length > 0 && <SearchResults hits={hits} query={fetchedQuery} />}
      </div>
    )
  }
}

export default SearchBar