import ResponsiveNavbar from "../components/layouts/ResponsiveNavbar";
import FeaturesBar from "../components/ui/FeaturesBar";
import KeyFeatureCard from "../components/ui/KeyFeatureCard";
import OverviewCard from "../components/ui/OverviewCard";
import AboutUs from "../components/layouts/AboutUs";
import ContactUs from "../components/layouts/ContactUs";
import Footer from "../components/layouts/Footer";
import "../styles/styles.css";


const AdmissionAnalyzer = () => {

    const features = [
      {
        title: "Ai powered",
        image1: "src/assets/icons/prime_microchip-ai.svg",
        image2: "src/assets/icons/ri_lightbulb-flash-line.svg",
      },
      {
        title: "Scan with OCR",
        image1: "src/assets/icons/material-symbols_scan-outline-rounded.svg",
        image2:
          "src/assets/icons/material-symbols_document-scanner-outline-rounded.svg",
      },
      {
        title: "nlp powered",
        image1: "src/assets/icons/mdi_notes-search-variant.svg",
        image2: "src/assets/icons/fluent_puzzle-piece-32-regular.svg",
      },
      {
        title: "automated",
        image1: "src/assets/icons/uil_check-circle.svg",
        image2: "src/assets/icons/fluent_settings-cog-multiple-20-regular.svg",
      },
      {
        title: "Secured",
        image1: "src/assets/icons/mdi_secure-outline.svg",
        image2: "src/assets/icons/mdi_clipboard-check-outline.svg",
      },
    ];
  return (
    <>
      
        <ResponsiveNavbar />
      

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
              <button className="secondaryButtonStyle">Analyze</button>
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
      <div className="bg-blueWhite">
        <FeaturesBar features={features} />
      </div>

      <div className="container lg:px-20 px-8 mx-auto mt-8 lg:mt-20">
        <div className="keyFeatures-section">
          <h2 className="introStyle text-secondaryBlue">key features</h2>
          <div className="grid lg:grid-cols-2 lg:gap-12 mb-8 lg:mb-10">
            <h1 className="headingStyle text-secondaryBlue">
              Transforming Data into Decisions
            </h1>
            <p className="headingDescriptionStyle">
              Our Admission Analyzer uses advanced AI to evaluate CVs and
              educational documents, quickly determine eligibility for degree
              programmes, and generate tailored technical tests—making the
              admission process faster, fairer, and more efficient for both
              students and universities or companies.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-[30px]">
            <KeyFeatureCard
              featureCard={{
                backgroundImage: 'url("src/assets/images/download2.svg")',
                title: "AI-Based Document Analysis",
                description:
                  "Extracts and understands academic details using OCR and NLP",
              }}
            />
            <KeyFeatureCard
              featureCard={{
                backgroundImage: 'url("src/assets/images/download3.svg")',
                title: "Eligibility Scoring System",
                description:
                  "Matches applicant data with degree requirementsAutomated Test Generation",
              }}
            />
            <KeyFeatureCard
              featureCard={{
                backgroundImage: 'url("src/assets/images/download4.svg")',
                title: "Automated Test Generation",
                description: "Creates degree-specific online exams",
              }}
            />
            <KeyFeatureCard
              featureCard={{
                backgroundImage: 'url("src/assets/images/download5.svg")',
                title: "Document Authenticity Detection",
                description:
                  "Detects fake or tampered certificates using AI algorithms",
              }}
            />
            <KeyFeatureCard
              featureCard={{
                backgroundImage: 'url("src/assets/images/download6.svg")',
                title: "Admin Dashboard",
                description: "Review, manage, and rank applicants efficiently",
              }}
            />
            <KeyFeatureCard
              featureCard={{
                backgroundImage: 'url("src/assets/images/download7.svg")',
                title: "Data Security",
                description: "Encrypted data storage and secure transmission",
              }}
            />
          </div>
        </div>
      </div>
      <div className="overview-section bg-secondaryBlue">
        <div className="container lg:px-20 px-8 mx-auto mt-24 lg:mt-32">
          <div className="flex flex-col lg:flex-row gap-8 mb-6 lg:mb-20 mt-8 lg:mt-12 justify-center items-center">
            <div className="content-section pt-[40px]">
              <h3 className="text-whiteColor introStyle">overview</h3>
              <h1 className="headingStyle text-whiteColor">
                The Brain Behind the System
              </h1>
              <p className="headingDescriptionStyle text-whiteColor">
                Get a quick look at how our AI-powered platform processes
                applications—from CV upload and document analysis to eligibility
                scoring and automated test generation—bringing speed, accuracy,
                and fairness to the admission journey.
              </p>

              <div className="overviewCard-section mt-8 pb-8">
                <OverviewCard
                  overviewCard={{
                    number: "01",
                    title: "Application Submission",
                    description:
                      "Applicants submit their CVs and academic certificates via the user-friendly online portal.",
                  }}
                />
                <OverviewCard
                  overviewCard={{
                    number: "02",
                    title: "Document Analysis",
                    description:
                      "Utilizing OCR and NLP for comprehensive document processing.",
                  }}
                />

                <OverviewCard
                  overviewCard={{
                    number: "03",
                    title: "Eligibility Evaluation",
                    description:
                      "Automated assessment against program specific criteria.",
                  }}
                />
                <OverviewCard
                  overviewCard={{
                    number: "04",
                    title: "Custom Test Generation",
                    description:
                      "Tailored tests for qualified applicants, technical or aptitude.",
                  }}
                />
                <OverviewCard
                  overviewCard={{
                    number: "05",
                    title: "Report & Ranking Dashboard",
                    description:
                      "Detailed insights for admission officers to make informed decisions.",
                  }}
                />
              </div>
            </div>
            <div className="image-section">
              <video
                className="outline-none border-none mix-blend-lighten scale-75 lg:scale-[1.3]"
                loop
                autoPlay
                muted
              >
                <source
                  src="src/assets/videos/6802824_Digital_Animation_Montage_1920x1080.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-section mb-20 lg:mb-32">
        <div className="container lg:px-20 px-8 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-6 lg:mb-20 mt-8 lg:mt-12 ">
            <div className="content-section pt-[40px]">
              <h3 className="text-secondaryBlue introStyle">impact</h3>
              <h1 className="headingStyle text-secondaryBlue">
                Measurable improvements in admissions
              </h1>
              <p className="headingDescriptionStyle text-secondaryBlue">
                Quantifiable results that demonstrate the power of intelligent
                screening
              </p>
              <div className="flex flex-row gap-8 mt-8">
                <div className="percentage leading-none">
                  <h2 className="text-[32px] lg:text-[62px] font-bold">52%</h2>
                  <p className="font-bold text-greyColor text-[16px] lg:text-[20px]">
                    FASTER
                  </p>
                </div>
                <div className="percentage leading-none">
                  <h2 className="text-[32px] lg:text-[62px] font-bold">67%</h2>
                  <p className="font-bold text-greyColor text-[16px] lg:text-[20px]">
                    ACCURACY
                  </p>
                </div>
                <div className="percentage leading-none">
                  <h2 className="text-[32px] lg:text-[62px] font-bold">85%</h2>
                  <p className="font-bold text-greyColor text-[16px] lg:text-[20px]">
                    MATCH RATE
                  </p>
                </div>
              </div>
            </div>
            <div className="image-section overflow-hidden">
              <video
                className="outline-none border-none mix-blend-lighten scale-115 lg:scale-[1.3]"
                loop
                autoPlay
                muted
              >
                <source src="src/assets/videos/1123.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:px-20 px-8 mx-auto mt-20 lg:mb-[100px]" id="about-us">
        <AboutUs />
      </div>
      <div className="container lg:px-20 px-8 mx-auto mt-20 lg:mt-20 mb-20 lg:mb-[150px]" id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default AdmissionAnalyzer;
