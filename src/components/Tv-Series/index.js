import React, { Component } from 'react';

class Tvseries extends Component {
    constructor() {
        super();
        this.state = {
            shows: []
        };
    }

componentDidMount(){
    fetch('https://www.episodate.com/api/most-popular?page=1')
    .then(results => results.json())
    .then(data => {
        console.log(data.tv_shows)
        let shows = data.tv_shows.map((show) => {
            return(
                <div key={show.id}>
                    <p>{show.name}</p>
                    <img src={show.image_thumbnail_path} alt='tv-series thumbnail' />
                </div>
            )
        })
        this.setState({shows: shows})
    })
}

render(){
    return (
        <div>
            {this.state.shows}
        </div>
    )
}
}

export default Tvseries;