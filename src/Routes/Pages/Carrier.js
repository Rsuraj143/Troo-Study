import React from 'react'
import CarrierComponent from '../../Components/CarrierComponent/CarrierComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import useDocumentTitle from '../../PageTitle'

const Carrier = () => {
  useDocumentTitle("TRooStudy Carrier")
  return (
    <div className="carrer-page sub-page">
        <Header/>
        <HeroGlobal/>
        <CarrierComponent/>
        <ContactComponent />
        <Footer/>
    </div>
  )
}

export default Carrier