import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: [],
  }

  componentDidMount() {
    this.fetchData();   
  }

  fetchData = (query="cats") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          gifs: result.data.slice(0, 3),
        })
      });
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmitHandler={this.fetchData} />
      </div>
    )
  }
}

export default GifListContainer;