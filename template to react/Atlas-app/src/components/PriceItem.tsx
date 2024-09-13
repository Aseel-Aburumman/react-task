// src/components/PriceItem.tsx
import React from "react";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.css";
import "../aos.css";
import "../bootstrap.min.css";

interface PriceItemProps {
  planName: string;
  price: number;
  features: string[];
}

const PriceItem: React.FC<PriceItemProps> = ({ planName, price, features }) => {
  return (
    <div
      data-aos={planName === "PREMIUM" ? "fade-up" : "fade-right"}
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-once="true"
      className={
        planName === "PREMIUM"
          ? "col-md-4 text-center py-4 mt-5 rounded"
          : "col-md-4 text-center py-4 mt-5  "
      }
      id={planName === "PREMIUM" ? "price-table__premium" : "nope"}
    >
      {" "}
      <h4 className="my-4">{planName}</h4>
      <p className="font-weight-bold">
        $<span className="display-2 font-weight-bold">{price}</span>/ MO.
      </p>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a
        href="#"
        className={
          planName === "PREMIUM"
            ? "btn my-4 font-weight-bold atlas-cta cta-green"
            : "btn my-4 font-weight-bold atlas-cta cta-ghost "
        }
      >
        Get Started
      </a>
    </div>
  );
};

export default PriceItem;
