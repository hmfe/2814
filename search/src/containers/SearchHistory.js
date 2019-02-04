import { connect } from 'react-redux'
import {
  clearHistory,
  removeFromHistory
} from '../store'
import SearchHistory from '../components/SearchHistory'

const mapStateToProps = state => ({
  history: state.history,
})

const mapDispatchToProps = {
  clearHistory,
  removeItem: name => removeFromHistory({ name })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchHistory)