import React from 'react';
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleSubmit = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=BbOh2w6Dk3CcYfNa9f4bkkLWn8mc41X4&rating=g`)
    .then(res => res.json())
    .then((gifObjArr) => {
      this.setState({
        gifs: gifObjArr.data.slice(0, 3)
      })
    })
  }

  componentDidMount() {
    this.handleSubmit()
  }

  render () {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch search={this.handleSubmit}/>
      </div>
    )
  }
}

export default GifListContainer