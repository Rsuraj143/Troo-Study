import React from 'react'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import FAQComponent2 from '../../Components/FAQComponent/FAQComponent2'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const FAQs = () => {
  return (
    <div className="404-page sub-page">
      <Header/>
      <HeroGlobal/>
      <FAQComponent2/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default FAQs