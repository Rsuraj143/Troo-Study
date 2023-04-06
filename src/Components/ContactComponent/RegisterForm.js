import React from "react";
import "./ContactDetails.css";

const RegisterForm = () => {
  return (
    <div class="troo-da-apply-section" id="troo-da-apply-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="fome-section">
              <div class="con-form-tile">
                <h4>Register for Interest</h4>
                <p>Start Your Education Journey</p>
              </div>
              <form class="aplyfome">
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="name" class="form-control" id="floatingInput" placeholder="First Name" />
                      <label for="floatingInput">First Name</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="name" class="form-control" id="floatingInput" placeholder="Last Name" />
                      <label for="floatingInput">Last Name</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="name" class="form-control" id="floatingInput" placeholder="Your Phone" />
                      <label for="floatingInput">Your Phone</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Your Email" />
                      <label for="floatingInput">Your Email</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Subject of Interest" />
                      <label for="floatingInput">Subject of Interest</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="interested" class="form-control" id="floatinginterested"
                        placeholder="Are you interested in academic counselling ?" />
                      <label for="floatingInput">Are you interested in academic counselling ?</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <div class="form-floating">
                      <input type="interested" class="form-control" id="floatinginterested"
                        placeholder="Where did you hear about us ?" />
                      <label for="floatingInput">Where did you hear about us ?</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <select id="floatingSelect" class="form-select">
                      <option></option>
                      <option>...</option>
                    </select>
                    <label for="floatingSelect">Select Your Country</label>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="field">
                  <div class="form-floating">
                    <input type="interested" class="form-control" id="floatinginterested"
                      placeholder="Whrite something" />
                    <label for="floatingInput">Whrite something</label>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btnn btn-lg">Submit</button>
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
