import React from 'react'
import NavBar from '../components/NavBar'
import AllHero from '../components/AllHero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function page() {
  return (
    <>
        <NavBar />
        <AllHero title='Contact' />
        <Contact />
        <Footer />
      
    </>
  )
}

export default page
