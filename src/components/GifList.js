import React from 'react';

export default class GifList extends React.Component {

  renderGifs = () => {
    return this.props.gifs.map(gif => {
      return <li key={gif}><img src={gif} alt="A Lovely Gif Image"/></li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    )
  }
}