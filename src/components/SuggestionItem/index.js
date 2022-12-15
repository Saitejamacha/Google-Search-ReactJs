import './index.css'

const SuggestionItem = props => {
  const {searchItems, selectSuggestionFunc} = props
  const {suggestion} = searchItems

  const onSelect = () => {
    selectSuggestionFunc(suggestion)
  }

  return (
    <li className="list-item" onClick={onSelect}>
      <p className="header">{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
