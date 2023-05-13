import React, { useEffect } from 'react'
import TextField from '../common/form/TextField'
import MembersList from '../ui/MembersList'

export default function MainPage() {
  // useEffect(() => {

  //   localStorage.getItem('favourites')
  // }, [])

  return (
    <>
      <h1>Main page</h1>
      <MembersList />
      <TextField label={'текстовое поле'} htmlFor={''} name={'name'} />
    </>
  )
}
