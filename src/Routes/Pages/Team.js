import React from 'react'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import InstructorsComponent2 from '../../Components/InstructorComponent/InstructorsComponent2'
import useDocumentTitle from '../../PageTitle'

const Team = () => {
  useDocumentTitle("TRooStudy Team")
  return (
    <div className="team-page sub-page">
        <Header/>
        <HeroGlobal/>
        <InstructorsComponent2/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Team