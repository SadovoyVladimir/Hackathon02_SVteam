import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-primary mb-2">
      <div>
        <ul className='d-flex list-unstyled ml-0 pl-0 me-auto mb-2 p-3'>
          <li className='me-2 '>
            <NavLink to='/' className='text-white text-decoration-none'>
              Home
            </NavLink>
          </li>
          <li className='me-2 '>
            <NavLink to='/member/1' className='text-white text-decoration-none'>
              First member
            </NavLink>
          </li>
          <li className='me-2 '>
            <NavLink
              to='/favorites'
              className='text-white text-decoration-none'
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
