import React from 'react'
import "./ErrorPage.css"
import zikzak from "../../images/zik-zak-line.png"
import bgDot from "../../images/bg-dots.png"
import dotSpacing from "../../images/dot-spcing.png"
import emoji from "../../images/emoji.png"

const ErrorPage = () => {
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
              <div class="vert-move"><img src={bgDot} alt="bgDot" /></div>
              <div class="left-img-col">
               <div class="vert-move"><img src={dotSpacing} alt="dotSpacing" /></div>
                <div class="mercury"></div>
            </div>
           </div>
          <div class="col-md-12">
           <div class="eorr-page">
            <span>4<img src={emoji} alt="emoji" />4</span>
            <h2>Oops... Page Not Found!</h2>
            <p>The page you are looking for was moved, removed, renamed or never existed.</p>
            <div class="call-ss"><a class="btnn btn-lg" href="index.html">Back to Home</a></div>
           </div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default ErrorPage