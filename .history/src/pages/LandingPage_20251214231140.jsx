import React from "react";
import "../styles/styles.css";
import FeaturesBar from "../components/ui/FeaturesBar";
import ComponentCard from "../components/ui/ComponentCard";
import Footer from "../components/layouts/Footer";
import ResponsiveNavbar from "../components/layouts/ResponsiveNavbar";
import AboutUs from "../components/layouts/AboutUs";
import ContactUs from "../components/layouts/ContactUs";
import HeroSwiper from "../components/ui/HeroSwiper";
import AnalyzerHeroSection from "../components/layouts/AnalyzerHeroSection";
import CareerHeroSection from "../components/layouts/CareerHeroSection";

const LandingPage = () => {
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
    < >
      
        <ResponsiveNavbar />

      <div className="hero-section" id="home">
        <HeroSwiper>
          {/* Slide 1 */}
          <AnalyzerHeroSection />
          
          {/* Slide 2 */}
          <CareerHeroSection />
        </HeroSwiper>
      </div>
      <div className="bg-blueWhite">
        <FeaturesBar features={features} />
      </div>
      <div className="container lg:px-20 px-8 mx-auto mt-8 lg:mt-20">
        <div className="component-section">
          <h2 className="introStyle text-secondaryBlue">key components</h2>
          <div className="grid lg:grid-cols-2 lg:gap-12 mb-8 lg:mb-10">
            <h1 className="headingStyle text-secondaryBlue">
              Explore Our Smart Capabilities
            </h1>
            <p className="headingDescriptionStyle">
              Our platform unites smart admission screening and personalized
              career guidance in one place. Using AI, it analyzes your CV and
              documents to assess eligibility and generate tailored technical
              tests. At the same time, the Career Guidance Tracker helps you
              explore career paths, set goals, and track your progress.
              Together, these features support students in making informed
              decisions and help universities identify the right candidates
              efficiently.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-[30px]">
            <ComponentCard
              component={{
                image: "src/assets/images/Analyzer-iamge.svg",
                title:
                  "AI-Driven Admission Screening and Test Generation System",
                description:
                  "Our system analyzes CVs & educational documents, evaluates eligibility, and generates customized technical tests for qualified candidates — combining document analysis, eligibility filtering, and test generation into one smart platform.",
                buttonIcon: "src/assets/icons/External Link.svg",
                buttonText: "View",
              }}
            />
            <ComponentCard
              component={{
                image: "src/assets/images/guidence-image.svg",
                title:
                  "AI-Driven Admission Screening and Test Generation System",
                description:
                  "Our system analyzes CVs & educational documents, evaluates eligibility, and generates customized technical tests for qualified candidates — combining document analysis, eligibility filtering, and test generation into one smart platform.",
                buttonIcon: "src/assets/icons/External Link.svg",
                buttonText: "View",
              }}
            />
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

export default LandingPage;
