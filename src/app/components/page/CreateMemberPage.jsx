import React from 'react'
import CreateMemberForm from '../ui/createMemberForm'

export default function CreateMemberPage() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-10 offset-md-1 shadow p-4'>
          <h1 className='mb-4'>Создание участника</h1>
          <CreateMemberForm />
        </div>
      </div>
    </div>
  )
}
