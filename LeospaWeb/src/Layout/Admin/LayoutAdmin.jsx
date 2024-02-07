import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {

  return (
    <>
      <HeaderAdmin />
      <main className="adminDashboard">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutAdmin