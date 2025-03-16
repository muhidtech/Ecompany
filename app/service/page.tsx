import React from 'react'
import NavBar from '../components/NavBar'
import AllHero from '../components/AllHero'
import Service from '../components/service'
import Footer from '../components/Footer'

function page() {
  return (
    <>
      <NavBar />
      <AllHero title='Service'/>
      <Service />
      <Footer />
    </>
  )
}

export default page
