import React from 'react'
import BlogDetailsComponent from '../../Components/BlogsComponent/BlogDetailsComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'

const BlogDetails = () => {
  return (
    <div className="blog-details-page Blogs-list-page  sub-page">
        <Header/>
        <HeroGlobal/>
        <BlogDetailsComponent/>
        <Footer/>
    </div>
  )
}

export default BlogDetails