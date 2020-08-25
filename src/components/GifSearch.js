import React from 'react';

class GifSearch extends React.Component {
  state = {
    query: "",
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmitHandler(this.state.query);
  }

  handleOnChange = event => {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleOnChange} />
        </form>
      </div>
    )
  }
}

export default GifSearch;