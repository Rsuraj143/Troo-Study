import React from "react";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import CourseCategoryComponent from "../../Components/CourseCategoryComponent/CourseCategoryComponent";
import FetureComponent2 from "../../Components/FetureComponent/FetureComponent2";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import InstructorComponent from "../../Components/InstructorComponent/InstructorComponent";
import PartnerComponent from "../../Components/PartnerComponent/PartnerComponent";
import StudentReviewComponent from "../../Components/StudentReviewComponent/StudentReviewComponent";

const Cources = () => {
  return (
    <div className="Cources-page sub-page">
      <Header />
      <HeroGlobal />
      <FetureComponent2/>
      <CourseCategoryComponent/>
      <InstructorComponent />
      <PartnerComponent />
      <StudentReviewComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Cources;
