import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function SignupPage({ handler }) {
  return (
    <>
      <h3 className='mb-4'>Sign up</h3>
      <p>Тут должна быть форма для регистрации</p>
      <Navigate to='/auth/signup' />
      <p>
        Already have account?{' '}
        <NavLink
          role='button'
          className='text-decoration-none'
          onClick={handler}
        >
          Login
        </NavLink>
      </p>
    </>
  )
}

SignupPage.propTypes = {
  handler: PropTypes.func
}
