// src/components/Banner.tsx
import React, { useEffect } from "react";
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import the AOS styles
import "../custom.css";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, buttonText }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="jumbotron jumbotron-fluid text-white"
      id="banner"
      style={{ backgroundImage: `url(/img/banner-bk.jpg)` }}
    >
      <div className="container text-center text-md-left">
        <header>
          <div className="row justify-content-between">
            <div className="col-2">
              <img src="img/logo.png" alt="logo" />
            </div>
            <div className="col-6 align-self-center text-right">
              <a href="#" className="text-white lead">
                Get Early Access
              </a>
            </div>
          </div>
        </header>
        <h1
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-once="true"
          className="display-3 font-weight-bold my-5"
        >
          {title}
        </h1>
        <p
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-once="true"
          className="lead text-white my-4"
        >
          {description}
        </p>
        <a
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-once="true"
          href="#"
          className="btn my-4 font-weight-bold atlas-cta cta-green"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
