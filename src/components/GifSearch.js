import React from 'react';

export default class GifSearch extends React.Component {

  state = {
    searchValue : ""
  }

  handleSearchInput = (e) => {
    const searchValue = e.target.value

    this.setState({ searchValue })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    this.props.searchGifs(this.state.searchValue)
  }
  

  

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <input 
          onChange={this.handleSearchInput}
          type="text" 
          value={this.state.searchValue}
        />
        <input type="submit" value="Search" />
      </form>
    )
  }
}