import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LoginPage({ handler }) {
  return (
    <>
      <h3 className='mb-4'>Login</h3>
      <p>Тут должна быть форма для входа</p>
      <Navigate to='/auth/login' />
      <p>
        Dont have account?{' '}
        <NavLink
          role='button'
          className='text-decoration-none'
          onClick={handler}
        >
          Sign up
        </NavLink>
      </p>
    </>
  )
}

LoginPage.propTypes = {
  handler: PropTypes.func
}
