import React from 'react'
import BlogListComponent from '../../Components/BlogsComponent/BlogListComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const BlogsList = () => {
  return (
    <div className="Blogs-list-page sub-page">
        <Header/>
        <HeroGlobal/>
        <BlogListComponent/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default BlogsList