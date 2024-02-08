import React, { useState, lazy, Suspense } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Layout from './layout/Layout';
//Admin stylesheet
import './Styles/Admin.scss'
//Pages Import
const Home = React.lazy(() => import('./Pages/Home'));
const Features = React.lazy(() => import('./Pages/Features'));
const Services = React.lazy(() => import('./Pages/Services.jsx'));
const Appointments = React.lazy(() => import('./components/Appointments.jsx'));
const Login = React.lazy(() => import('./Pages/Login.jsx'));
const NotFound = React.lazy(() => import('./NotFound.jsx'));
//Admin Page Import
const LayoutAdmin = React.lazy(() => import('./Layout/Admin/LayoutAdmin.jsx'));
const Dashboard = React.lazy(() => import('./Pages/Admin/Dashboard.jsx'));
const TeatmentAdmin = React.lazy(() => import('./Pages/Admin/Treatment/TreatmentAdmin.jsx'));
const EditTreatmentAdmin = React.lazy(() => import('./Pages/Admin/Treatment/EditTreatmentAdmin.jsx'));
const HeroAdmin = React.lazy(() => import('./Pages/Admin/Hero/HeroAdmin.jsx'));
const HeroEdit = React.lazy(() => import('./Pages/Admin/Hero/HeroEdit.jsx'));
const HeroCreate = React.lazy(() => import('./Pages/Admin/Hero/HeroCreate.jsx'));
const FooterEdit = React.lazy(() => import('./Pages/Admin/FooterEdit.jsx'));
const AboutAdmin = React.lazy(() => import('./Pages/Admin/About/AboutAdmin.jsx'));
const CreateTreatmentAdmin = React.lazy(() => import('./Pages/Admin/Treatment/CreateTreatmentAdmin.jsx'));
const NewssubscriptionAdmin = React.lazy(() => import('./Pages/Admin/Newssubscription/NewssubscriptionAdmin.jsx'));
import PageLoader from './components/Loader.jsx'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* PUBLIC */}
        <Route path='/' element={<Layout />} >
          <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
          <Route path='/features' element={<Suspense fallback={<PageLoader />}><Features /></Suspense>} />
          <Route path='/service' element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
          <Route path='/appointments' element={<Suspense fallback={<PageLoader />}><Appointments /></Suspense>} />
          <Route path='/login' element={<Suspense fallback={<PageLoader />}><Login /></Suspense>} />
        </Route>

        {/* ADMIN */}
        <Route path='/admin/' element={<LayoutAdmin />} >
          <Route index element={<Suspense fallback={<PageLoader />}><Dashboard /></Suspense>} />
          <Route path='treatment' element={<Suspense fallback={<PageLoader />}><TeatmentAdmin /></Suspense>} />
          <Route path='treatment/create' element={<Suspense fallback={<PageLoader />}><CreateTreatmentAdmin /></Suspense>} />
          <Route path='treatment/:id' element={<Suspense fallback={<PageLoader />}><EditTreatmentAdmin /></Suspense>} />
          <Route path='hero' element={<Suspense fallback={<PageLoader />}><HeroAdmin /></Suspense>} />
          <Route path='hero/edit/:id' element={<Suspense fallback={<PageLoader />}><HeroEdit /></Suspense>} />
          <Route path='hero/create' element={<Suspense fallback={<PageLoader />}><HeroCreate /></Suspense>} />
          <Route path='about' element={<Suspense fallback={<PageLoader />}><AboutAdmin /></Suspense>} />
          <Route path='footer/edit' element={<Suspense fallback={<PageLoader />}><FooterEdit /></Suspense>} />
          <Route path='newssubscription' element={<Suspense fallback={<PageLoader />}><NewssubscriptionAdmin /></Suspense>} />
        </Route>

        {/* NotFound 404 page */}
        <Route path='*' element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
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
