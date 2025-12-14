const CareerHeroSection = () => {
    return (
      <div className="container lg:px-20 px-8 mx-auto mt-24 lg:mt-32">
        <div className="hero-section flex flex-col lg:flex-row gap-8 mb-6 lg:mb-20 mt-8 lg:mt-12">
          <div className="content">
            <h3 className="text-secondaryBlue introStyle">intro</h3>
            <h1 className="headingStyle text-secondaryBlue">
              Dream Smarter… Let AI Build Your Career Path Step by Step
            </h1>
            <p className="headingDescriptionStyle">
              An AI-powered career goal tracking system that analyzes student
              progress, recommends the right actions, and creates personalized
              roadmaps aligned with the Sri Lankan education system—supporting
              students at every stage of their journey.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="primaryButtonStyle ">Explore</button>
              <button className="secondaryButtonStyle">Start</button>
            </div>
          </div>
          <div className="image overflow-hidden">
            <div className="container h-0 lg:h-10"></div>
            <video
              className="outline-none border-none scale-55 lg:scale-100"
              loop
              autoPlay
              muted
            >
              <source
                src="src/assets/videos/AnalyzerHero.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
 };

export default CareerHeroSection;