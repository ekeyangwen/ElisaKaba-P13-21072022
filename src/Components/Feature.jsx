import React from "react";

const Feature = ({ title, content, image, alt }) => {
  return (
    <div className="feature-item">
      <h2 className="featureTitle">Features</h2>
      <img src={image} alt={alt} className="feature-item-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-item-content">{content}</p>
    </div>
  );
};

export default Feature;
