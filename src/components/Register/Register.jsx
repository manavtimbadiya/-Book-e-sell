import React from "react";
import "./Register.css";
import P4 from "../../assets/breadcrumb-arrow.svg";

const Register = () => {
    return (
        <div>
          <main>
        <section class="create-account-page-wrapper">
          <div class="container">
            <div class="breadcrumb-wrapper"> 
                 <a href="#" title="Home">Home</a> &nbsp;
                 <img src={P4} alt="_blank"></img>&nbsp;
                  <p>Create an Account</p>
            </div>
            <h1>Login or Create an Account</h1>
            <div class="create-account-row">
              <form>
                <div class="form-block">
                  <div class="personal-information">
                    <div class="personal-information-header">
                      <h2>Personal Information</h2>
                      <p>
                        Please enter the following information to create your
                        account.
                      </p>
                    </div>
                    <div class="form-row-wrapper">
                      <div class="form-col">
                        <div class="form-group">
                          <label for="first-name" id="first-name-label"
                            >First Name *</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="first-name"
                          />
                        </div>
                      </div>
                      <div class="form-col">
                        <div class="form-group">
                          <label for="last-name" id="last-name-label"
                            >Last Name *</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="last-name"
                          /><br></br>
                        </div>
                      </div>
                      <div class="form-col full-width">
                        <div class="form-group">
                          <label for="email-address" id="email-address-label"
                            >Email Adress *</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="email-address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="login-information">
                    <div class="personal-information-header">
                      <h2>Login Information</h2>
                    </div>
                    <div class="form-row-wrapper">
                      <div class="form-col">
                        <div class="form-group">
                          <label for="password" id="password-label"
                            >Password *</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                          />
                        </div>
                      </div>
                      <div class="form-col">
                        <div class="form-group">
                          <label
                            for="confirm-password"
                            id="confirm-password-label"
                            >Confirm Password *</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="confirm-password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="btn-wrapper">
                      <button class="btn blue-btn" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
        </div>
    )
}

export default Register;