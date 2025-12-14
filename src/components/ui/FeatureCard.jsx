import React from 'react'

const FeatureCard = ({feature}) => {
  return (
    <div className="featureBar-item flex flex-col items-center pt-4">
      <div className="flex justify-center gap-2">
        <img src={feature.image1} alt="feature icon 1" srcset="" />
        <img src={feature.image2} alt="feature icon 2" srcset="" />
      </div>
      <h2 className="introStyle text-greyColor">{feature.title}</h2>
    </div>
  );
}

export default FeatureCard