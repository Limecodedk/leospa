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
import TeatmentAdmin from './Pages/Admin/Treatment/TreatmentAdmin.jsx'
import EditTreatmentAdmin from './Pages/Admin/Treatment/EditTreatmentAdmin.jsx'
import HeroAdmin from './Pages/Admin/Hero/HeroAdmin.jsx';
import HeroEdit from './Pages/Admin/Hero/HeroEdit.jsx';
import HeroCreate from './Pages/Admin/Hero/HeroCreate.jsx'
import FooterEdit from './Pages/Admin/FooterEdit.jsx'
import AboutAdmin from './Pages/Admin/About/AboutAdmin.jsx'
import CreateTreatmentAdmin from './Pages/Admin/Treatment/CreateTreatmentAdmin.jsx';
import NewssubscriptionAdmin from './Pages/Admin/Newssubscription/NewssubscriptionAdmin.jsx'
//Admin stylesheet
import './Styles/Admin.scss'
import Appointments from './components/Appointments.jsx';
import NotFound from './NotFound.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* PUBLIC */}
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/service' element={<Services />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* ADMIN */}
        <Route path='/admin/' element={<LayoutAdmin />} >
          <Route index element={<Dashboard />} />
          <Route path='treatment' element={<TeatmentAdmin />} />
          <Route path='treatment/create' element={<CreateTreatmentAdmin />} />
          <Route path='treatment/:id' element={<EditTreatmentAdmin />} />
          <Route path='hero' element={<HeroAdmin />} />
          <Route path='hero/edit/:id' element={<HeroEdit />} />
          <Route path='hero/create' element={<HeroCreate />} />
          <Route path='about' element={<AboutAdmin />} />
          <Route path='footer/edit' element={<FooterEdit />} />
          <Route path='newssubscription' element={<NewssubscriptionAdmin />} />
        </Route>

        {/* NotFound 404 page */}
        <Route path='*' element={<NotFound />} />

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
