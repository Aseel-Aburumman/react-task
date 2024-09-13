import React from "react";
import "../custom.css";

const FeatureSafe: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid feature" id="feature-last">
      <div className="container">
        <div className="row justify-content-between text-center text-md-left">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-6 flex-md-last"
          >
            <h2 className="font-weight-bold">Safe and reliable</h2>
            <p className="my-4">
              Duo suas detracto maiestatis ad, commodo lucilius invenire nec ad,
              <br /> eum et oratio disputationi. Falli lobortis his ad
            </p>
            <a
              href="#"
              className="btn my-4 font-weight-bold atlas-cta cta-blue"
            >
              Learn More
            </a>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-6 align-self-center flex-md-first"
          >
            <img
              src="img/feature-2.png"
              alt="Safe and reliable"
              className="mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSafe;
