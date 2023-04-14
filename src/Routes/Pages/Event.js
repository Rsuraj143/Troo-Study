import React from 'react'
import EventComponent from '../../Components/EventsComponent/EventComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../../PageTitle'

const Event = () => {
  useDocumentTitle("TRooStudy Event")
  return (
    <div className="sub-page">
        <Header/>
        <HeroGlobal/>
        <EventComponent/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Event