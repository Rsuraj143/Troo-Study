import React from 'react'
import "./InstructureComponent.css"
import team1 from "../../images/team-1.png"
import team2 from "../../images/team-2.png"
import team3 from "../../images/team-3.png"
import team4 from "../../images/team-4.png"
import team5 from "../../images/team-5.png"
import team6 from "../../images/team-6.png"
import { Link } from 'react-router-dom'
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

const InstructorComponent = () => {
  return (
    <div class="troo-da-instructor-section" id="troo-da-instructor-section" >
        <div class="container">
     <div class="row">
       <div class="col-md-12">
          <div class="sub-tile-con">
            <div class="sub-txt">Our Instructor</div>
            <h2>Troostudy’s <span>Best Instructor</span></h2>
          </div>
       </div>
     </div>
     <div class="row">
      <div class="col-md-4">
         <div class="instructor">
            <div class="ins-img">
              <img src={team1} alt="team1" />
            </div>
            <div class="ins-txt">
              <h4>Pr. Alexa Boss</h4>
              <p>Assistant Director</p>
            </div>
            <div class="team-deatils">
              <p>Social Media</p>
              <ul>
                <li><Link to="#"><TiSocialFacebook/> </Link></li>
                 <li><Link to="#"><TiSocialLinkedin/> </Link></li>
                 <li><Link to="#"><TiSocialTwitter/> </Link></li>
                 <li><Link to="#"><TbBrandInstagram/> </Link></li>
             </ul>
            </div>
         </div>
      </div>
      <div class="col-md-4">
        <div class="instructor">
          <div class="ins-img">
            <img src={team2} alt="team2" />
          </div>
          <div class="ins-txt">
            <h4>Dr. Adam Anderson</h4>
            <p>Co-founder of company</p>
          </div>
          <div class="team-deatils">
            <p>Social Media</p>
            <ul>
                <li><Link to="#"><TiSocialFacebook/> </Link></li>
                 <li><Link to="#"><TiSocialLinkedin/> </Link></li>
                 <li><Link to="#"><TiSocialTwitter/> </Link></li>
                 <li><Link to="#"><TbBrandInstagram/> </Link></li>
             </ul>
          </div>
       </div>
      </div>
      <div class="col-md-4">
        <div class="instructor">
          <div class="ins-img">
            <img src={team3} alt="team3" />
          </div>
          <div class="ins-txt">
            <h4>Dr. Sasha Davi</h4>
            <p>Co-founder of compan</p>
          </div>
          <div class="team-deatils">
            <p>Social Media</p>
            <ul>
                <li><Link to="#"><TiSocialFacebook/> </Link></li>
                 <li><Link to="#"><TiSocialLinkedin/> </Link></li>
                 <li><Link to="#"><TiSocialTwitter/> </Link></li>
                 <li><Link to="#"><TbBrandInstagram/> </Link></li>
             </ul>
          </div>
       </div>
      </div>
     </div>
     <div class="row">
      <div class="col-md-4">
         <div class="instructor">
            <div class="ins-img">
              <img src={team4} alt="team4" />
            </div>
            <div class="ins-txt">
              <h4>Pr. Antonia Craighton</h4>
              <p>Digital Marketer</p>
            </div>
            <div class="team-deatils">
              <p>Social Media</p>
              <ul>
                <li><Link to="#"><TiSocialFacebook/> </Link></li>
                 <li><Link to="#"><TiSocialLinkedin/> </Link></li>
                 <li><Link to="#"><TiSocialTwitter/> </Link></li>
                 <li><Link to="#"><TbBrandInstagram/> </Link></li>
             </ul>
            </div>
         </div>
      </div>
      <div class="col-md-4">
        <div class="instructor">
          <div class="ins-img">
            <img src={team5} alt="team5" />
          </div>
          <div class="ins-txt">
            <h4>Pr. Marti Scorsese</h4>
            <p>Course Researcher</p>
          </div>
          <div class="team-deatils">
            <p>Social Media</p>
            <ul>
                <li><Link to="#"><TiSocialFacebook/> </Link></li>
                 <li><Link to="#"><TiSocialLinkedin/> </Link></li>
                 <li><Link to="#"><TiSocialTwitter/> </Link></li>
                 <li><Link to="#"><TbBrandInstagram/> </Link></li>
             </ul>
          </div>
       </div>
      </div>
      <div class="col-md-4">
        <div class="instructor">
          <div class="ins-img">
            <img src={team6} alt="team6" />
          </div>
          <div class="ins-txt">
            <h4>Pr. Olivia Woodson</h4>
            <p>International Consultant</p>
          </div>
          <div class="team-deatils">
            <p>Social Media</p>
            <ul>
              <li><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
               <li><Link to="#"><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
               <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
               <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
           </ul>
          </div>
       </div>
      </div>
     </div>
     <div class="row">
        <div class="col-md-12">
        <div class="call-ss"><Link class="btn btn-lg" href="#">View All Instuctor</Link></div>
      </div>
     </div>
   </div>
    </div>
  )
}

export default InstructorComponent