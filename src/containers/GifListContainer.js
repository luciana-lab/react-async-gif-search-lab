import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    // componentDidMount() {
    //     fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g')
    //         .then(resp => resp.json())
    //         .then(data => this.setState({ gif: data.data }))
    // }

    // Couldn't solve this part by myself, used solution.
    fetchGifs = (search = '') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(data => this.setState({ gifs: data.data }))
    }

    componentDidMount() {
        this.fetchGifs()
    }

    displayGif = () => {
        const limitedGif = this.state.gifs.map(link => link.images.original.url)
        return limitedGif.slice(0, 3)
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList display={this.displayGif()} />
            </div>
        )
    }
}

export default GifListContainer;