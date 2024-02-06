import { useState } from 'react'
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
import Login from './Pages/Login.jsx'
//Admin Page Import
import LayoutAdmin from './Layout/Admin/LayoutAdmin.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx'
import TeatmentAdmin from './Pages/Admin/TreatmentAdmin.jsx'
import EditTreatmentAdmin from './Pages/Admin/EditTreatmentAdmin.jsx'

//Admin stylesheet
import './Styles/Admin.scss'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* PUBLIC */}
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/service' element={<Services />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* ADMIN */}
        <Route path='/admin/' element={<LayoutAdmin />} >
          <Route index element={<Dashboard />} />
          <Route path='treatment' element={<TeatmentAdmin />} />
          <Route path='treatment/:id' element={<EditTreatmentAdmin />} />
        </Route>


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
