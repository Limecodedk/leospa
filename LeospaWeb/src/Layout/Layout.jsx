import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'


import Loader from '../components/Loader'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout