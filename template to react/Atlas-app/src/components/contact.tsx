// src/components/Contact.tsx
import React from "react";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.css";
import "../aos.css";
import "../bootstrap.min.css";

const Contact: React.FC = () => {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      id="contact"
      style={{ backgroundImage: `url(/img/contact-bk.jpg)` }}
    >
      <div className="container my-5">
        <div className="row justify-content-between">
          <div className="col-md-6 text-white">
            <h2 className="font-weight-bold">Contact Us</h2>
            <p className="my-4">
              Te iisque labitur eos, nec sale argumentum scribentur,
              <br /> augue disputando in vim. Erat fugit sit at, ius lorem.
            </p>
            <ul className="list-unstyled">
              <li>Email : company_email@com</li>
              <li>Phone : 361-688-5824</li>
              <li>Address : 4826 White Avenue, Corpus Christi, Texas</li>
            </ul>
          </div>
          <div className="col-md-6">
            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="Email">Your Email</label>
                  <input type="email" className="form-control" id="Email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
