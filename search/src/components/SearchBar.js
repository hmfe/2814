import React, { Component, Fragment } from 'react'
import SearchClear from './SearchClear'
import SearchResults from './SearchResults'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    const { clearInput, fetchedQuery, fetchQueryResult, hits, placeholder, selectResult, value } = this.props

    return (
      <Fragment>
        <div className="SearchBar">
          <input 
            className="SearchBar-input" 
            onChange={event => fetchQueryResult(event.target.value)} 
            placeholder={placeholder}
            value={value}
          />
          <SearchClear onClick={clearInput} />
        </div>
        {hits.length > 0 && <SearchResults hits={hits} query={fetchedQuery} selectResult={selectResult} />}
      </Fragment>
    )
  }
}

export default SearchBar