import React from 'react';

class GifList extends React.Component {
  renderLists = () => {
    return this.props.gifs.map(gif => {
      return <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderLists()}
      </ul>
    )
  }
}

export default GifList;