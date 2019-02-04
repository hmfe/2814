import React, { Component } from 'react'
import './SearchResults.css'

class SearchResults extends Component {

  highlightedResult(result, query) {
    // Split on query term and include term into parts, ignore case
    const parts = result.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        { parts.map((part, i) => 
          <span key={i} style={part.toLowerCase() === query.toLowerCase() ? { fontWeight: 'bold' } : {} }>
            { part }
          </span>)
        } 
      </span>
    )
  }

  render() {
    const { hits, query, selectResult } = this.props

    return (
      <div className="SearchResults">
        {hits.map((result, index) => (
          <div key={index} role="button" aria-label={result} className="SearchResults-item" onClick={() => selectResult(result)}>
            {this.highlightedResult(result, query)}
          </div>
        ))}
      </div>
    )
  }
}

export default SearchResults