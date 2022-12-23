import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getTrip } from '../../services/trips';


export default function Trip() {
  const [trip, setTrip] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getTrip(id).then(response => {
      setTrip(response.data)
    });
  }, []);

  return (
    <div>{trip.name}</div>
  );
}
