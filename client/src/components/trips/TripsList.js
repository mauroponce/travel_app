import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTrips } from '../../services/trips';

export default function TripsList() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    getTrips().then(response => {
      setTrips(response.data);
    });
  }, []);

  return (
    <div>
      {trips.map(trip => (
        <div key={trip.id}>
          <Link to={`/trips/${trip.id}`} >{trip.name}</Link>
        </div>
      ))}
    </div>
  )
}
