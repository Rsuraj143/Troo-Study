import React from 'react'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import BlogComponent from '../Components/BlogsComponent/BlogComponent'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import CounterComponent from '../Components/CounterComponent/CounterComponent'
import CourseCategoryComponent from '../Components/CourseCategoryComponent/CourseCategoryComponent'
import FAQComponent from '../Components/FAQComponent/FAQComponent'
import FetureComponent from '../Components/FetureComponent/FetureComponent'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HeroComponent from '../Components/HeroComponent/HeroComponent'
import InstructorComponent from '../Components/InstructorComponent/InstructorComponent'
import LearningPathComponent from '../Components/LearningPathComponent/LearningPathComponent'
import PartnerComponent from '../Components/PartnerComponent/PartnerComponent'
import StudentReviewComponent from '../Components/StudentReviewComponent/StudentReviewComponent'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroComponent/>
        <AboutComponent/>
        <CounterComponent/>
        <FetureComponent/>
        <CourseCategoryComponent/>
        <LearningPathComponent/>
        <InstructorComponent/>
        <PartnerComponent/>
        <StudentReviewComponent/>
        <FAQComponent/>
        <BlogComponent/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default Home