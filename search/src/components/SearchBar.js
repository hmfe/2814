import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    const { fetchQueryResult, clearInput, value, placeholder } = this.props

    return (
      <div className="SearchBar">
        <input 
          className="SearchBar-input" 
          onChange={event => fetchQueryResult(event.target.value)} 
          placeholder={placeholder}
          value={value}
        />
        <div className="SearchBar-clear" onClick={clearInput}>×</div>
      </div>
    )
  }
}

export default SearchBar