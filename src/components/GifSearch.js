import React from 'react';

class GifSearch extends React.Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.search(this.state.value)
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.value} ></input>
      </form>
    )
  }
}

export default GifSearch