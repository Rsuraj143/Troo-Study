import React from 'react'
import BlogDetailsComponent from '../../Components/BlogsComponent/BlogDetailsComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../../PageTitle'

const BlogDetails = () => {
  useDocumentTitle("TRooStudy Blogs Details")
  return (
    <div className="blog-details-page Blogs-list-page  sub-page">
        <Header/>
        <HeroGlobal/>
        <BlogDetailsComponent/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default BlogDetails