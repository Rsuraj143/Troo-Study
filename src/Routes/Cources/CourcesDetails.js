import React from 'react'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import CourseDetailsComponent from '../../Components/FetureComponent/CourseDetailsComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const CourcesDetails = () => {
  return (
    <div className="sub-page">
      <Header/>
      <HeroGlobal/>
      <CourseDetailsComponent/>
      <ContactComponent />
      <Footer/>
    </div>
  )
}

export default CourcesDetails