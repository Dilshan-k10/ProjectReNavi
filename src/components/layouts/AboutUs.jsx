const AboutUs = () => {
    return (
      <div className="aboutUs">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[30px]">
          <div className="content">
            <h2 className="introStyle text-secondaryBlue">about us</h2>
            <h1 className="headingStyle text-secondaryBlue">
              The Story Behind The System
            </h1>
            <p className="headingDescriptionStyle mb-4">
              We are a team driven by the belief that every student deserves a
              clear, fair, and empowering path to higher education. Our platform
              brings together intelligent admission screening and personalized
              career guidance to create a smarter experience for both students
              and universities.
            </p>
            <p className="headingDescriptionStyle mb-4">
              Using advanced AI, we analyze CVs and educational documents to
              help institutions identify qualified candidates quickly and
              accurately, while generating tailored technical tests for deeper
              evaluation. At the same time, our Career Guidance Tracker supports
              students in discovering suitable career paths, setting long-term
              goals, and staying motivated on their journey.
            </p>
            <p className="headingDescriptionStyle">
              Together, these innovations redefine how students connect with
              opportunities and how universities build their next generation of
              talent.
            </p>
          </div>
          <div className="image rounded-[40px] overflow-hidden h-[500px] lg:h-[600px]">
            <video
              className="outline-none border-none scale-55 lg:scale-55"
              loop
              autoPlay
              muted
            >
              <source src="src/assets/videos/about-us.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
 };

export default AboutUs;