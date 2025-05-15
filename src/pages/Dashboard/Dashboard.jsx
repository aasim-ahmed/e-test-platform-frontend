import React from 'react'

export default function Dashboard() {
  const role = localStorage.getItem('role');
  return (
    <div>
      <h1>Dashboard {role}</h1>
      

    </div>
  )
}
