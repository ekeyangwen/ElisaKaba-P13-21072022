import React from "react";
/**
 *
 * @param {string} params Contains all informations for features
 * @returns features
 */
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
