import React from 'react'
import "./ContactComponent.css"
import blueArrow from "../../images/blu-arrow.png"
import getImg from "../../images/get-img.png"

const ContactComponent = () => {
  return (
    <div class="troo-da-get-in-touch-section" id="troo-da-get-in-touch-section">
<div class="arrow-icon">
    <img src={blueArrow} alt="blueArrow" />
  </div>
   <div class="container">
     <div class="row">
       <div class="col-md-12">
        <div class="get-in-touch-img">
             <img src={getImg} alt="getImg" />
         </div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-6">
          <div class="sub-tile-con">
              <div class="sub-txt">Get in Touch</div>
              <h2>Leave Your Contact Detail and <br/>We’ll <span>  Get in Touch </span> with You.</h2>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and is typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since.</p>
       </div>
       <div class="col-md-6">
         <div class="fome-section">
          <div class="fomr-tile">Contact Form</div>
           <form class="row g-3">
            <div class="col-md-6">
              <div class="field">
              <input type="name" class="form-control" id="inputName" />
              <label for="inputName" class="form-label">Your Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="field">
              <input type="phone" class="form-control" id="inputPhone" />
              <label for="inputPhone" class="form-label">Your Phone</label>
            </div>
            </div>
            <div class="col-md-6">
              <div class="field">
              <input type="email" class="form-control" id="inputEmail" />
              <label for="inputEmail" class="form-label">Your Email</label>
             </div>
            </div>
            <div class="col-md-6">
              <div class="field">
              <input type="subject" class="form-control" id="inputsubject" />
              <label for="inputSubject" class="form-label">Subject</label>
           </div>
            </div>
            <div class="col-md-12">
              <div class="field">
                <textarea  type="Whrite" class="form-control" id="inputWhrite"></textarea>
              <label for="inputWhrite" class="form-label">Whrite something</label>
             </div>
             </div>
            <div class="col-12">
              <button type="submit" class="btn btn-lg">Submit</button>
            </div>
          </form>
         </div>
       </div>
     </div>
   </div>
    </div>
  )
}

export default ContactComponent