import { Link } from 'react-router-dom'

const AnalyzerHeroSection = () => {
    return (
      <div className="container lg:px-20 px-8 mx-auto mt-24 lg:mt-32">
        <div className="hero-section flex flex-col lg:flex-row gap-8 mb-6 lg:mb-20 mt-8 lg:mt-12">
          <div className="content">
            <h3 className="text-secondaryBlue introStyle">intro</h3>
            <h1 className="headingStyle text-secondaryBlue">
              Apply Smarter... Let AI Analyze Your Admission Instantly
            </h1>
            <p className="headingDescriptionStyle">
              A smart AI-powered admission pre-screening platform that analyzes
              your academic documents to instantly check eligibility for degree
              programmes. It compares your qualifications with real programme
              requirements and highlights strengths or gaps—giving you clear
              guidance before you apply. Fast, accurate insights to help you
              choose the right academic path with confidence.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="primaryButtonStyle ">Explore</button>
              <Link to="/analyze" className="secondaryButtonStyle">
                Analyze</Link>
            </div>
          </div>
          <div className="image">
            <div className="container h-0 lg:h-10"></div>
            <video
              className="outline-none border-none scale-55 lg:scale-125"
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

export default AnalyzerHeroSection;