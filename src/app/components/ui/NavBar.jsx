import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-2'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/favorites' className='nav-link'>
                Favorites
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/createMember' className='nav-link'>
                Create
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
