import React from 'react'
import NavBar from '../components/NavBar'
import AllHero from '../components/AllHero'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

function page() {
  return (
    <>
      <NavBar />
      <AllHero title='Price'/>
      <Pricing />
      <Footer />
    </>
  )
}

export default page
