import React from 'react'
import "./HeroGlobal.css"
import zikzak from "../../images/zik-zak-line.png"
import bgdot from "../../images/bg-dots.png"
import dot_specing from "../../images/dot-spcing.png"

const HeroGlobal = () => {
  return (
    <div class="troo-da-hero-section" id="troo-da-hero-section">
 <div class="wave-img"><img src={zikzak} alt="zikzak" /></div>
      <div class="spinner-wrap">
        <div class="spinner-item"></div>
        <div class="spinner-item spinner-item--2"></div>
        <div class="spinner-item spinner-item--3"></div>
      </div>
      <div class="container">
         <div class="row">
             <div class="hero-text">
              <div class="vert-move"><img src={bgdot} alt="bgdot" /></div>
              <div class="left-img-col">
               <div class="vert-move"><img src={dot_specing} alt="dot_specing" /></div>
                <div class="mercury"></div>
            </div>
           </div>
          <div class="col-md-12">
            <div class="sub-page-title">
            <ul class="breadcrumb">
              <li><a href="index.html">Home</a></li> /
              <li><a href="about.html">About us</a></li>
             </ul>
             <h2>About Us</h2>
            </div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default HeroGlobal