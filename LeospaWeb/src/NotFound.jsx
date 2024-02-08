import React from 'react'
import Header from './layout/Header'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className='notFoundPage'>
        <div className='notFoundPageContent'>
          <h2>404</h2>
          <h1>Page not found</h1>
          <p>Oops! The page you are locking for does not exist. It might have been moved or deleted</p>
          <Link to={'/'} className='btn'>
            Go to homepage
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound