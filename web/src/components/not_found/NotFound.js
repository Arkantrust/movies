import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to='/' >
        Return home
      </Link>
    </div>
  )
}

export default NotFound