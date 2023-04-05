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
                      <input
                        type="name"
                        class="form-control"
                        id="inputFirstName"
                      />
                      <label for="inputFirstName" class="form-label">
                        First Name
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field">
                      <input
                        type="name"
                        class="form-control"
                        id="inputLastName"
                      />
                      <label for="inputLastName" class="form-label">
                        Last Name
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="field">
                      <input
                        type="phone"
                        class="form-control"
                        id="inputYourPhone"
                      />
                      <label for="inputYourPhone" class="form-label">
                        Your Phone
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field">
                      <input
                        type="email"
                        class="form-control"
                        id="inputYourEmail"
                      />
                      <label for="inputYourEmail" class="form-label">
                        Your Email
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="field">
                      <input
                        type="subject"
                        class="form-control"
                        id="inputSubject"
                      />
                      <label for="inputSubject" class="form-label">
                        Subject of Interest
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field">
                      <input
                        type="interested"
                        class="form-control"
                        id="inputinterested"
                      />
                      <label for="inputinterested" class="form-label">
                        Are you interested in academic counselling ?
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="field">
                      <input
                        type="about"
                        class="form-control"
                        id="inputabout"
                      />
                      <label for="inputabout" class="form-label">
                        Where did you hear about us ?
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field">
                      <select id="inputCountry" class="form-select">
                        <option></option>
                        <option>...</option>
                      </select>
                      <label for="inputCountry" class="form-label">
                        Select Your Country
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <input
                      type="Whrite"
                      class="form-control"
                      id="inputWhrite"
                    />
                    <label for="inputWhrite" class="form-label">
                      Whrite something
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btnn btn-lg">
                    Submit
                  </button>
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
