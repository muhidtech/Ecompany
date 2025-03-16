import React from 'react'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Footer from '../components/Footer'
import AllHero from '../components/AllHero'

function page() {
  return (
    <>
      <NavBar />
      <AllHero title='About' />
      <About />
      <Footer />
    </>
  )
}

export default page
