import React from 'react'

const ComponentCard = ({ component = {} }) => {
  return (
    <div className="component-card bg-blueWhite p-[18px] border rounded-[40px] items-center text-center ">
      <div className="cardImage">
        <img src={component.image || ""} alt={component.title || "Component"} />
      </div>
      <div className="cardContent">
        <h2 className="cardTitleStyle">{component.title || "Title"}</h2>
        <p className="headingDescriptionStyle text-left">
          {component.description || "Description"}
        </p>
      </div>
      <button className="cardButtonStyle">
        <div className="flex items-center gap-2">
          <img src={component.buttonIcon || ""} alt="Button icon" />
          <h2 className="text-[18px] lg:text-[20px]">
            {component.buttonText || "Button"}
          </h2>
        </div>
      </button>
    </div>
  );
}

export default ComponentCard