import React from "react";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import EventCompDetails from "../../Components/EventsComponent/EventCompDetails";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroGlobal from "../../Components/HeroComponent/HeroGlobal";
import useDocumentTitle from "../../PageTitle";

const EventDetails = () => {
  useDocumentTitle("TRooStudy Event Details")
  return (
    <div className="events-page-detail  sub-page">
      <Header />
      <HeroGlobal />
      <EventCompDetails />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default EventDetails;
