import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroComponent/HeroGlobal'
import ContactDetails from '../Components/ContactComponent/ContactDetails'
import useDocumentTitle from '../PageTitle'

const Contact = () => {
  useDocumentTitle("TRooStudy Contact")
  return (
    <div className="contact-page sub-page">
        <Header/>
        <HeroGlobal/>
        <ContactDetails/>
        <Footer/>
    </div>
  )
}

export default Contact