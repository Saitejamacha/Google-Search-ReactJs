import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

// Sai Teja's Code

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  selectSuggestionFunc = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const resultSuggestions = suggestionsList.filter(eachsuggestion =>
      eachsuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <div className="inner-con">
          <img
            alt="google logo"
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="m-con">
            <div className="search-con">
              <img
                alt="search icon"
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-bar"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <div className="search-suggestions-con">
              <ul>
                {resultSuggestions.map(eachItem => (
                  <SuggestionItem
                    className="un-order-list"
                    key={eachItem.id}
                    searchItems={eachItem}
                    selectSuggestionFunc={this.selectSuggestionFunc}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
