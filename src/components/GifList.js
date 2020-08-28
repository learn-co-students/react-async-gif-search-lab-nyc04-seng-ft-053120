import React from 'react';

class GifList extends React.Component {

  renderGifs = () => {
    return this.props.gifs.map((gif) => <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li>)
  }

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    )
  }
}

export default GifList