import React from 'react'
import CarrierDetailsComp from '../../Components/CarrierComponent/CarrierDetailsComp'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const CarrerDetails = () => {
  return (
    <div className="carrer-page-detail  sub-page">
        <Header/>
        <HeroGlobal/>
        <CarrierDetailsComp/>
        <ContactComponent />
        <Footer/>
    </div>
  )
}

export default CarrerDetails