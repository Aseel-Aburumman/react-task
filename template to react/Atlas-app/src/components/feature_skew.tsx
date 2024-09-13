import React from "react";

const FeatureSkew: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid feature" id="feature-first">
      <div className="container my-5">
        <div className="row justify-content-between text-center text-md-left">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-6"
          >
            <h2 className="font-weight-bold">Take a look inside</h2>
            <p className="my-4">
              Te iisque labitur eos, nec sale argumentum scribentur no,
              <br /> augue disputando in vim. Erat fugit sit at, ius lorem
              deserunt deterruisset no.
            </p>
            <a
              href="#"
              className="btn my-4 font-weight-bold atlas-cta cta-blue"
            >
              Learn More
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-6 align-self-center"
          >
            <img
              src="img/feature-1.png"
              alt="Take a look inside"
              className="mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSkew;
