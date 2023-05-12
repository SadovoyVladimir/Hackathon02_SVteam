import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MemberLayout() {
  return (
    <div>
      <h2>Member layout</h2>
      <Outlet />
    </div>
  )
}
