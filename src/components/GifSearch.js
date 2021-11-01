import React from 'react';

class GifSearch extends React.Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({ search: e.target.value })
    }

    // Couldn't solve this part by myself, used solution.
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    // Couldn't solve this part by myself, used solution.
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for Gifs: </label>
                    <input type="text" name="search" onChange={this.handleChange} value={this.state.search} placeholder="dogs" />
                </form>
            </div>
        )
    }
}

export default GifSearch;