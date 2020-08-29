import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from "../components/GifList";

const API_KEY = process.env.REACT_APP_API_KEY;

// ** path to the actual image is images.original.url

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  // takes in a user input and fetch for gifs based on that, repopulate this.state.gifs with the first 3 gif urls that returned
  searchGifs = (searchInput) => {
    const API_QUERY = `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_KEY}&rating=g`;

    fetch(API_QUERY)
      .then(response => response.json())
      .then(result => {
        const firstThreeGifObjs = result.data.slice(0, 3);

        const gifs = firstThreeGifObjs.map(obj =>  obj.images.original.url);

        this.setState({ gifs });
      });
  }

  render() {
    return (
      <React.Fragment>
        <GifSearch searchGifs={this.searchGifs}/>
        <GifList gifs={this.state.gifs} /> 
      </React.Fragment>
    )
  }
}