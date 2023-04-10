import React from "react";
import "./ContactDetails.css";

const RegisterForm = () => {
  return (
    <div className="troo-da-apply-section" id="troo-da-apply-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fome-section">
              <div className="con-form-tile">
                <h4>Register for Interest</h4>
                <p>Start Your Education Journey</p>
              </div>
              <form className="aplyfome">
              <div className="row">
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="name" className="form-control" id="floatingInput" placeholder="First Name" />
                      <label for="floatingInput">First Name</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="name" className="form-control" id="floatingInput" placeholder="Last Name" />
                      <label for="floatingInput">Last Name</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="name" className="form-control" id="floatingInput" placeholder="Your Phone" />
                      <label for="floatingInput">Your Phone</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="Your Email" />
                      <label for="floatingInput">Your Email</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="Subject of Interest" />
                      <label for="floatingInput">Subject of Interest</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="interested" className="form-control" id="floatinginterested"
                        placeholder="Are you interested in academic counselling ?" />
                      <label for="floatingInput">Are you interested in academic counselling ?</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input type="interested" className="form-control" id="floatinginterested"
                        placeholder="Where did you hear about us ?" />
                      <label for="floatingInput">Where did you hear about us ?</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <select id="floatingSelect" className="form-select">
                      <option></option>
                      <option>...</option>
                    </select>
                    <label for="floatingSelect">Select Your Country</label>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="field">
                  <div className="form-floating">
                    <input type="interested" className="form-control" id="floatinginterested"
                      placeholder="Whrite something" />
                    <label for="floatingInput">Whrite something</label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btnn btn-lg">Submit</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
