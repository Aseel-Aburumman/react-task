// src/components/PricingSection.tsx
// import React from "react";
import PriceItem from "./PriceItem";
import React, { useEffect } from "react";
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import the AOS styles
import "../custom.css";
import "bootstrap/dist/css/bootstrap.css";
import "../aos.css";
import "../bootstrap.min.css";

interface Plan {
  planName: string;
  price: number;
  features: string[];
}

interface PricingSectionProps {
  plans: Plan[]; // Array of plans passed via props
}

const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container my-5  py-2" id="price-table">
      <h2 className="text-center font-weight-bold d-block mb-3">
        Check our pricing
      </h2>
      <div className="row">
        {plans.map((plan, index) => (
          <PriceItem
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
