const KeyFeatureCard = ({ featureCard }) => { 
    return (
      <div
        className="keyFeaturesCard bg-cover bg-center bg-no-repeat rounded-[26px] flex flex-col justify-end"
        style={{
          backgroundImage: featureCard.backgroundImage,
          height: "400px",
        }}
      >
        <div
          className="rounded-[26px] p-4 flex flex-col justify-end items-center"
          style={{
            background:
              // "linear-gradient(180deg, rgba(255, 255, 255, 0) 55.66%, rgba(83, 80, 80, 0.69) 71.17%, #000 95.47%)",
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 53.27%, rgba(83, 80, 80, 0.60) 65.86%, #000 84.89%)",
            backdropFilter: "blur(0px)",
            height: "400px",
          }}
        >
          <h2 className="largeButtonTextStyle mb-[15px]">
            {featureCard.title}
          </h2>
          <p className="extraSmallTextStyle mb-[5px]">
            {featureCard.description}
          </p>
        </div>
      </div>
    );
}
export default KeyFeatureCard;