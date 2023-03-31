import React from 'react'
import BlogComponent2 from '../../Components/BlogsComponent/BlogComponent2'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const Blogs = () => {
  return (
    <div className="blogs-page sub-page">
        <Header/>
        <HeroGlobal/>
        <BlogComponent2/>
        <ContactComponent />
        <Footer/>
    </div>
  )
}

export default Blogs