// src/components/FeaturesSection.tsx
import React from "react";
import FeatureItem from "./FeatureItem";

const FeaturesSection: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center font-weight-bold">
        Smartest protection for your site
      </h2>
      <div className="row">
        <FeatureItem
          image="smart-protect-1.jpg"
          title="Anti-spam"
          description="Lorem ipsum dolor sit amet porro his no his deleniti."
        />
        <FeatureItem
          image="smart-protect-2.jpg"
          title="Phishing Detect"
          description="Ne error antiopam usu. Sed vocen concludaturque ea."
        />
        <FeatureItem
          image="smart-protect-3.jpg"
          title="Smart Scan"
          description="Et usu ocurreret elaboraret doctus prodesse assueverit."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
