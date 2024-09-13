// src/components/FeatureItem.tsx
import React from "react";

interface FeatureItemProps {
  image: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="col-md-4 text-center">
      <img src={`/img/${image}`} alt={title} className="mx-auto" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
