import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Outlet } from 'react-router-dom'
import FooterAdmin from './FooterAdmin'

const LayoutAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <main className="adminDashboard">
        <Outlet />
      </main>
      <FooterAdmin />
    </>
  )
}

export default LayoutAdmin