import React from "react";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import BlogComponent from "../Components/BlogsComponent/BlogComponent";
import ContactComponent from "../Components/ContactComponent/ContactComponent";
import CounterComponent from "../Components/CounterComponent/CounterComponent";
import FAQComponent from "../Components/FAQComponent/FAQComponent";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeroGlobal from "../Components/HeroComponent/HeroGlobal";
import InstructorComponent from "../Components/InstructorComponent/InstructorComponent";
import LearningPathComponent from "../Components/LearningPathComponent/LearningPathComponent";
import PartnerComponent from "../Components/PartnerComponent/PartnerComponent";
import StudentReviewComponent from "../Components/StudentReviewComponent/StudentReviewComponent";

const About = () => {
  return (
    <div class="about-page sub-page">
      <Header />
      <HeroGlobal />
      <AboutComponent />
      <CounterComponent />
      <LearningPathComponent />
      <InstructorComponent />
      <PartnerComponent />
      <StudentReviewComponent />
      <FAQComponent />
      <BlogComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default About;
