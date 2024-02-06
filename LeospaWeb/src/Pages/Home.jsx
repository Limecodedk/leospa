import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Treatments from '../components/Treatments'
import Recommendations from '../components/Recommendations'
import Team from '../components/Team'
import Book from '../components/Book'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {<Treatments />}
      <Recommendations />
      <Team />
      <Book />
    </>
  )
}

export default Home