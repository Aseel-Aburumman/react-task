import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  mobile: string;
  password: string;
  agreeTerms: boolean;
  subscribeNewsletter: boolean;
}

interface ValidationErrors {
  email?: string;
  mobile?: string;
  password?: string;
  agreeTerms?: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    mobile: "",
    password: "",
    agreeTerms: false,
    subscribeNewsletter: false,
  });

  const [emailExists, setEmailExists] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let validationErrors: ValidationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.mobile) {
      validationErrors.mobile = "Please enter a valid mobile number";
    }
    if (
      !formData.password ||
      formData.password.length < 6 ||
      formData.password.length > 18
    ) {
      validationErrors.password =
        "Password must be between 6 and 18 characters";
    }
    if (!formData.agreeTerms) {
      validationErrors.agreeTerms =
        "You must agree to the terms and conditions";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existingUser = localStorage.getItem(formData.email);
      if (existingUser) {
        setEmailExists(true);
      } else {
        localStorage.setItem(formData.email, JSON.stringify(formData));
        setSubmitted(true);
        setEmailExists(false);
      }
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row justify-content-evenly align-items-center">
        {/* Carousel */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide col-lg-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              className="active"
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
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="public/orangepic1.jpg"
                className="d-block w-100"
                alt="..."
                width="400"
                height="800"
              />
            </div>
            <div className="carousel-item">
              <img
                src="public/orangepic2.jpg"
                className="d-block w-100"
                alt="..."
                width="400"
                height="800"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-lg-6 flex-fill">
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
          <div className="mx-auto">
            <form
              className="mx-auto"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-4 text-center"> </h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="form-text">eg: username@domain.com</div>
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputMobile" className="form-label">
                  Mobile *
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputMobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                <div className="form-text">eg: 077********</div>
                {errors.mobile && (
                  <div className="text-danger">{errors.mobile}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Create Password *
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="form-text">
                  The Password should be between 6-18 characters.
                </div>
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to the terms & conditions Orange.
                </label>
                {errors.agreeTerms && (
                  <div className="text-danger">{errors.agreeTerms}</div>
                )}
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck2"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck2">
                  Receive Coding Academy Newsletter.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary boosted-btn-lg w-100 mb-3"
              >
                Sign Up
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary boosted-btn-lg w-100"
              >
                Already have an account? Login
              </button>
            </form>
          </div>
          {/* Display Messages */}
          {emailExists && (
            <div className="text-danger mt-3">
              Email account already exists!
            </div>
          )}
          {submitted && !emailExists && (
            <div className="text-success mt-3">Registration successful!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
