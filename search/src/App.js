import React, { Component } from 'react'
import SearchBar from './containers/SearchBar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<SearchBar placeholder={'Search for a country'} />
      </div>
    )
  }
}

export default App
