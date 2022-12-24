import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard(props) {
  const handleLogout = (e) => {
    e.preventDefault()
    props.handleLogout()
  }

  return (
    <div>The dashboard</div>
  )
}
