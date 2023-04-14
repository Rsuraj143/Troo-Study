import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import ErrorPage from '../../Components/OtherComponent/ErrorPage'
import useDocumentTitle from '../../PageTitle'

const Error404 = () => {
  useDocumentTitle("TRooStudy Error Page")
  return (
    <div className="sub-page">
        <Header/>
        <ErrorPage/>
        <Footer/>
    </div>
  )
}

export default Error404