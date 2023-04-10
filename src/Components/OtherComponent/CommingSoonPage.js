import React from "react";
import "./CommingSoonPage.css";
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import dotSpacing from "../../images/dot-spcing.png";
import cross from "../../images/crose.png"
import twodot from "../../images/two-dot.png"

const CommingSoonPage = () => {
  return (
    <div id="troo-da-coming-soon" className="troo-da-coming-soon">
      <div className="spinner-wrap">
        <div className="spinner-item"></div>
        <div className="spinner-item spinner-item--2"></div>
        <div className="spinner-item spinner-item--3"></div>
      </div>
      <div className="vert-move">
        <img src={dotSpacing} alt="dotSpacing" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="coming-text">
              <div className="zoom-in-zoom-out">
                <img src={cross} alt="cross" />
              </div>
              <div className="commingsoon-title">
                We Are <br />
                Coming Very Soon
              </div>
              <p>
                We are working hard to give you a better experience
                <br />
                with our new impressive site. Stay connected, Stay updated!{" "}
              </p>
              <span>
                For more inquiry: <Link href="#">contact@troostudy.com</Link>
              </span>
              <div className="foot-socail">
                <span>Social Media</span>
                <ul>
                  <li>
                    <Link to="/">
                      <TiSocialLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TbBrandInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TiSocialTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TiSocialFacebook />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="fome-section">
              <div className="fomr-tile">Contact With Us</div>
              <p>Lorem ipsum doller sit it is simply dumy text.</p>
              <form className="row g-3">
                <div className="col-md-12">
                  <div className="field">
                    <input type="name" className="form-control" id="inputName" />
                    <label for="inputName" className="form-label">
                      Your Name
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="field">
                    <input type="phone" className="form-control" id="inputPhone" />
                    <label for="inputPhone" className="form-label">
                      Your Phone
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="field">
                    <input type="email" className="form-control" id="inputEmail" />
                    <label for="inputEmail" className="form-label">
                      Your Email
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="field">
                    <input
                      type="subject"
                      className="form-control"
                      id="inputsubject"
                    />
                    <label for="inputSubject" className="form-label">
                      Subject
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="field">
                    <input
                      type="Whrite"
                      className="form-control"
                      id="inputWhrite"
                    />
                    <label for="inputWhrite" className="form-label">
                      Whrite something
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btnn btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="dot-zik">
              <img src={twodot} alt="twodot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoonPage;
