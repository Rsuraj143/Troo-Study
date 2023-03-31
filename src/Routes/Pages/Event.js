import React from 'react'
import EventComponent from '../../Components/EventsComponent/EventComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const Event = () => {
  return (
    <div className="sub-page">
        <Header/>
        <HeroGlobal/>
        <EventComponent/>
        <Footer/>
    </div>
  )
}

export default Event