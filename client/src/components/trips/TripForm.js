import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTrip } from '../../services/trips'

export default function TripForm() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    createTrip({
      name
    }).then(() => {
      navigate('/trips')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' name='name' value={name} onChange={event => setName(event.target.value)} />
    </form>
  )
}
