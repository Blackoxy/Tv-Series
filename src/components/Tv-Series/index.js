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
        console.log(data.tv_shows[1])
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