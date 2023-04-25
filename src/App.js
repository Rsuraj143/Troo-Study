import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Cources from "./Routes/Cources/Cources";
import CourcesDetails from "./Routes/Cources/CourcesDetails";
import Team from "./Routes/Pages/Team";
import Testimonial from "./Routes/Pages/Testimonial";
import FAQs from "./Routes/Pages/FAQs";
import Error404 from "./Routes/Pages/Error404";
import CommingSoon from "./Routes/Pages/CommingSoon";
import Event from "./Routes/Pages/Event";
import EventDetails from "./Routes/Pages/EventDetails";
import Carrier from "./Routes/Pages/Carrier";
import CarrerDetails from "./Routes/Pages/CarrerDetails";
import Blogs from "./Routes/Blogs/Blogs";
import BlogsList from "./Routes/Blogs/BlogsList";
import BlogDetails from "./Routes/Blogs/BlogDetails";
import Contact from "./Routes/Contact";
import ApplyNow from "./Routes/ApplyNow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/About_Us" element={<About/> } />

          <Route path="/Home/Courses" element={<Cources/> } />
          <Route path="/Home/Courses/Course_Details" element={<CourcesDetails/> } />

          <Route path="/Home/Our_Team" element={<Team/> } />
          <Route path="/Home/Teastimonial" element={<Testimonial/>} />
          <Route path="/Home/FAQs" element={<FAQs/> } />
          <Route path="/Home/404_Error" element={<Error404/>} />
          <Route path="/Home/Comming_Soon" element={<CommingSoon/>} />
          <Route path="/Home/Events" element={<Event/>} />
          <Route path="/Home/Events/Event_Details" element={<EventDetails/> } />
          <Route path="/Home/Carrier" element={<Carrier/>} />
          <Route path="/Home/Carrier/Carrier_Details" element={<CarrerDetails/>} />

          <Route path="/Home/Blogs" element={<Blogs/>} />
          <Route path="/Home/Blog_List" element={<BlogsList/>} />
          <Route path="/Home/Blogs/Blog_Details" element={<BlogDetails/>} />

          <Route path="/Home/Contact_Us" element={<Contact/>} />
          <Route path="/Home/Apply_Now" element={<ApplyNow/> } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
