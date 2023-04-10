import React from 'react'
import "./ErrorPage.css"
import zikzak from "../../images/zik-zak-line.png"
import bgDot from "../../images/bg-dots.png"
import dotSpacing from "../../images/dot-spcing.png"
import emoji from "../../images/emoji.png"

const ErrorPage = () => {
  return (
    <div className="troo-da-hero-section" id="troo-da-hero-section">
        <div className="wave-img"><img src={zikzak} alt="zikzak" /></div>
      <div className="spinner-wrap">
        <div className="spinner-item"></div>
        <div className="spinner-item spinner-item--2"></div>
        <div className="spinner-item spinner-item--3"></div>
      </div>
      <div className="container">
         <div className="row">
             <div className="hero-text">
              <div className="vert-move"><img src={bgDot} alt="bgDot" /></div>
              <div className="left-img-col">
               <div className="vert-move"><img src={dotSpacing} alt="dotSpacing" /></div>
                <div className="mercury"></div>
            </div>
           </div>
          <div className="col-md-12">
           <div className="eorr-page">
            <span>4<img src={emoji} alt="emoji" />4</span>
            <h2>Oops... Page Not Found!</h2>
            <p>The page you are looking for was moved, removed, renamed or never existed.</p>
            <div className="call-ss"><a className="btnn btn-lg" href="index.html">Back to Home</a></div>
           </div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default ErrorPage