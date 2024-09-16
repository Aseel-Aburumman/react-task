import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { useState } from "react";

const App: React.FC = () => {
  // State to manage form inputs
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false);
  const [newsletter, setNewsletter] = useState<boolean>(false);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!termsAgreed) {
      alert("You must agree to the terms & conditions.");
      return;
    }

    // Here you can handle local storage or any validation logic
    console.log({
      email,
      mobile,
      password,
      termsAgreed,
      newsletter,
    });

    // Clear the form after submission
    setEmail("");
    setMobile("");
    setPassword("");
    setTermsAgreed(false);
    setNewsletter(false);
  };

  return (
    <div className="d-flex justify-content-evenly">
      {/* Carousel */}
      <div
        id="carouselExampleAutoplaying"
        className="overflow-hidden carousel slide"
        data-bs-ride="carousel"
      >
        <div className="overflow-hidden carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="overflow-hidden active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="overflow-hidden carousel-inner">
          <div className="overflow-hidden carousel-item active">
            <img
              src="public/orangepic1.jpg"
              width="400"
              height="800"
              className="overflow-hidden bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/orangepic2.jpg"
              width="400"
              height="800"
              className="overflow-hidden bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              alt="Slide 2"
            />
          </div>
        </div>
        <button
          className="overflow-hidden carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        ></button>
        <button
          className="overflow-hidden carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        ></button>
      </div>

      {/* Form Section */}
      <div className="flex-fill">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg border-bottom">
          <div className="container-fluid">
            <div className="navbar-brand me-auto">
              <a className="stretched-link" href="#">
                <img
                  src="public/logo_orange.png"
                  width="50"
                  height="50"
                  alt="Boosted - Back to Home"
                  loading="lazy"
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Form */}
        <div className="mx-auto">
          <form className="mx-auto" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="w-50 mb-3 mt-5 mx-auto">
              <label htmlFor="exampleInputEmail1" className="w-50 form-label">
                Email address *
              </label>
              <input
                type="email"
                className="w-75 form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div id="emailHelp" className="w-50 form-text">
                eg: username@domain.com
              </div>
            </div>

            {/* Mobile */}
            <div className="mx-auto w-50 mb-3">
              <label htmlFor="exampleInputmobile" className="w-50 form-label">
                Mobile *
              </label>
              <input
                type="number"
                className="w-75 form-control"
                id="exampleInputmobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <div id="mobHelp" className="w-50 form-text">
                eg: 077********
              </div>
            </div>

            {/* Password */}
            <div className="mx-auto w-50 mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="w-50 form-label"
              >
                Create Password *
              </label>
              <input
                type="password"
                className="w-75 form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div id="passHelp" className="w-50 form-text">
                The Password should be between 6-18 characters.
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="mx-auto w-50 mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
                required
              />
              <label className="w-50 form-check-label" htmlFor="exampleCheck1">
                I agree to the terms & conditions of Orange.
              </label>
            </div>

            {/* Newsletter */}
            <div className="mx-auto w-50 mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleNewsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              <label
                className="w-50 form-check-label"
                htmlFor="exampleNewsletter"
              >
                Receive Coding Academy Newsletter.
              </label>
            </div>

            {/* Submit Button */}
            <div className="mx-auto">
              <button
                type="submit"
                className="mx-auto w-25 btn btn-primary mt-2"
              >
                Sign Up
              </button>
              <br />
              <button className="mx-auto w-25 btn border btn-default mt-2">
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
