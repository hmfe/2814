import React, { Component } from 'react'
import SearchClear from './SearchClear'
import './SearchHistory.css'

class SearchHistory extends Component {

  render() {
    const { clearHistory, history, removeItem } = this.props

    return history.length > 0 && (
      <div className="SearchHistory">
        <div className="SearchHistory-header">
          <h2>Search history</h2>
          <button className="SearchHistory-clear" onClick={clearHistory}>Clear search history</button>
        </div>
        <div className="SearchHistory-list">
          {history.map((item, index) => (
            <div key={index} className="SearchHistory-item">
              <div className="SearchHistory-item-name">{item.name}</div>
              <div className="SearchHistory-item-date">{item.date}</div>
              <SearchClear onClick={() => removeItem(item.name)} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SearchHistory