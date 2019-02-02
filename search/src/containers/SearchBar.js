import { connect } from 'react-redux'
import {
  fetchQueryResult
} from '../store'
import SearchBar from '../components/SearchBar'

const mapStateToProps = state => ({
  fetchedQuery: state.fetchedQuery,
  hits: state.hits,
  value: state.query
})

const mapDispatchToProps = {
  fetchQueryResult: query => fetchQueryResult({ query }),
  clearInput: () => fetchQueryResult({ query: '' })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)