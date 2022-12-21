import axios from 'axios'
import React, { Component } from 'react'

export default class TripsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/v1/trips.json').then(response => {
      this.setState({
        trips: response.data
      });
    });
  }

  render() {
    const {trips} = this.state;
    return (
      <div>
        {trips.map(trip => (
          <div key={trip.id}>
            {trip.name}
          </div>
        ))}
      </div>
    )
  }
}
