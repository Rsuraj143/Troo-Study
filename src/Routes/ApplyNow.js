import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroComponent/HeroGlobal'
import RegisterForm from '../Components/ContactComponent/RegisterForm'

const ApplyNow = () => {
  return (
    <div className="apply-page sub-page">
        <Header/>
        <HeroGlobal/>
        <RegisterForm/>
        <Footer/>
    </div>
  )
}

export default ApplyNow