// src/components/PriceItem.tsx
import React from "react";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.css";
import "../aos.css";
import "../bootstrap.min.css";

const Client: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="img/client-1.png" className="mx-auto d-block" />
          </div>
          <div className="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="img/client-2.png" className="mx-auto d-block" />
          </div>
          <div className="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="img/client-3.png" className="mx-auto d-block" />
          </div>
          <div className="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="img/client-4.png" className="mx-auto d-block" />
          </div>
          <div className="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="img/client-5.png" className="mx-auto d-block" />
          </div>
          <div className="col-sm-4 col-md-2 py-2 align-self-center">
            <img src="img/client-6.png" className="mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
