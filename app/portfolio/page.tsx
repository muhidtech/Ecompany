import React from 'react'
import NavBar from '../components/NavBar'
import AllHero from '../components/AllHero'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

function page() {
  return (
    <>
      <NavBar />
      <AllHero title='Portfolio' />
      <Portfolio />
      <Footer />
    </>
  )
}

export default page
