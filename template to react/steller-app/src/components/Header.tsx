import React from "react";

interface HeaderProps {
  subtitle: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ subtitle, title }) => {
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="infos">
          <h6 className="subtitle">{subtitle}</h6>
          <h6 className="title">{title}</h6>
          <p>UI/UX Designer</p>

          <div className="buttons pt-3">
            <button className="btn btn-primary rounded">HIRE ME</button>
            <button className="btn btn-dark rounded">DOWNLOAD CV</button>
          </div>

          <div className="socials mt-4">
            <a className="social-item" href="javascript:void(0)">
              <i className="ti-facebook"></i>
            </a>
            <a className="social-item" href="javascript:void(0)">
              <i className="ti-google"></i>
            </a>
            <a className="social-item" href="javascript:void(0)">
              <i className="ti-github"></i>
            </a>
            <a className="social-item" href="javascript:void(0)">
              <i className="ti-twitter"></i>
            </a>
          </div>
        </div>
        <div className="img-holder">
          <img src="imgs/man.svg" alt="" />
        </div>
      </div>

      <div className="widget">
        <div className="widget-item">
          <h2>124</h2>
          <p>Happy Clients</p>
        </div>
        <div className="widget-item">
          <h2>456</h2>
          <p>Project Completed</p>
        </div>
        <div className="widget-item">
          <h2>789</h2>
          <p>Awards Won</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
