import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.scss'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Layout from './layout/Layout';
//Pages Import
import Home from './Pages/Home';
import Features from './Pages/Features';
import Services from './Pages/Services.jsx';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* PUBLIC */}
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/Service' element={<Services />} />

        </Route>

        {/* ADMIN */}
      </>
    )
  )

  return (
    <>
      <main className='container'>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
