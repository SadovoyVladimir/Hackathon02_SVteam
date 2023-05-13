import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SignupPage from '../components/page/SignupPage'
import LoginPage from '../components/page/LoginPage'

export default function AuthLayout() {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === 'login' ? type : 'signup')

  const toggleFormType = () => {
    setFormType((prevState) => (prevState === 'signup' ? 'login' : 'signup'))
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          {formType === 'signup' ? (
            <SignupPage handler={toggleFormType} />
          ) : (
            <LoginPage handler={toggleFormType} />
          )}
        </div>
      </div>
    </div>
  )
}
