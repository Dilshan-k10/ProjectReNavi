import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <footer>
      <div className="bg-secondaryBlue lg:flex lg:flex-col-3 justify-center items-center text-center lg:text-center py-8 px-8 gap-8 lg:gap-40">
        <div className="logo flex justify-center py-8 lg:py-12">
          <img
            src="src/assets/images/logo-white.png"
            alt="logo"
            className="w-[80px] lg:w-[100px]"
          />
        </div>
        <div className="links lg:flex lg:flex-row flex flex-col items-center justify-center gap-4 lg:gap-8 mb-8 lg:mb-0">
          <Link to="/" className="footerTextStyle text-whiteColor cursor-pointer hover:text-blueLight">Home</Link>
          <Link to="/analyze" className="footerTextStyle text-whiteColor cursor-pointer hover:text-blueLight">Admission Analyze</Link>
          <p className="footerTextStyle text-whiteColor cursor-pointer hover:text-blueLight">Career Guidance</p>
          <button onClick={() => scrollToSection('about-us')} className="footerTextStyle text-whiteColor cursor-pointer hover:text-blueLight">About Us</button>
          <button onClick={() => scrollToSection('contact-us')} className="footerTextStyle text-whiteColor cursor-pointer hover:text-blueLight">Contact Us</button>
        </div>
        <div className="social flex flex-row justify-center gap-2 mb-4 lg:mb-0">
          <img
            src="src/assets/icons/lets-icons_insta.svg"
            alt="instagram"
            className="w-[24px] cursor-pointer"
          />
          <img
            src="src/assets/icons/ic_baseline-facebook.svg"
            alt="facebook"
            className="w-[24px] cursor-pointer"
          />
          <img
            src="src/assets/icons/prime_twitter.svg"
            alt="twitter"
            className="w-[24px] cursor-pointer"
          />
          <img
            src="src/assets/icons/mdi_youtube.svg"
            alt="youtube"
            className="w-[24px] cursor-pointer"
          />
        </div>
      </div>
      <div className="bg-secondaryBlue text-whiteColor text-center pb-4">
        <div className="px-20 pb-8 opacity-25">
          <hr />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-10">
          <p className="text-[10px]">
            © 2025 Project ReNavi. All rights reserved.
          </p>
          <p className="text-[10px] cursor-pointer">Privacy policy</p>
          <p className="text-[10px] cursor-pointer">Terms of service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer