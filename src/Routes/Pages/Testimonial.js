import React from 'react'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import StudentReviewComponent2 from '../../Components/StudentReviewComponent/StudentReviewComponent2'

const Testimonial = () => {
  return (
    <div className="teastimonial-page sub-page">
        <Header/>
        <HeroGlobal/>
        <StudentReviewComponent2/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Testimonial