import React from 'react'
import TextField from '../common/form/TextField'
import MembersList from '../ui/MembersList'

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <MembersList />
      <TextField label={'текстовое поле'} htmlFor={''} name={'name'} />
    </>
  )
}
