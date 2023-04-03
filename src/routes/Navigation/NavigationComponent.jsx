import React from 'react'
import { Link } from 'react-router-dom'

const NavigationComponent = () => {
  return (
    <div>
      <h1>Logo</h1>
      <nav>
        <Link to="/auth">Auth</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  )
}

export default NavigationComponent
