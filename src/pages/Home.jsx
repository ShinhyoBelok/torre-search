import React from 'react'
import User from '../componets/User'

export default function Home() {
  return (
    <div>
      <input type="search" placeholder="Search people by name" />
      <User />
    </div>
  )
}
