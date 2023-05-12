import React from 'react'
import { Outlet } from 'react-router-dom'

export default function FavoritesLayout() {
  return (
    <div>
      <h2>Favorites layout</h2>
      <Outlet />
    </div>
  )
}
