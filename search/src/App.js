import React, { Component } from 'react'
import SearchBar from './containers/SearchBar'
import SearchHistory from './containers/SearchHistory'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar placeholder={'Search for a country'} />
        <SearchHistory />
      </div>
    )
  }
}

export default App
