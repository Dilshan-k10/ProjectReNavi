import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Hide when scrolling down
      } else {
        setIsVisible(true) // Show when scrolling up
      }
      
      // Check which section is in view
      const aboutSection = document.getElementById('about-us')
      const contactSection = document.getElementById('contact-us')
      
      if (contactSection && currentScrollY >= contactSection.offsetTop - 200) {
        setActiveSection('contact')
      } else if (aboutSection && currentScrollY >= aboutSection.offsetTop - 200) {
        setActiveSection('about')
      } else {
        setActiveSection('home')
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div
        className={`w-full lg:px-20 px-8 fixed top-0 left-0 right-0 z-50 bg-whiteColor backdrop-blur-md bg-opacity-90 items-center transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="text-secondaryBlue py-4 lg:pb-2 lg:pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/">
                <img
                  src="src/assets/images/logo-black.png"
                  alt="logo"
                  className="w-[60px] lg:w-[72px]"
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4 px-6 py-2 bg-whiteColor bg-opacity-40 rounded-full">
                <button
                  onClick={() => scrollToSection('hero-section')}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === 'home' 
                      ? 'bg-primaryBlue text-whiteColor' 
                      : 'text-secondaryBlue hover:bg-primaryBlue hover:text-whiteColor'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about-us')}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === 'about' 
                      ? 'bg-primaryBlue text-whiteColor' 
                      : 'text-secondaryBlue hover:bg-primaryBlue hover:text-whiteColor'
                  }`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact-us')}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === 'contact' 
                      ? 'bg-primaryBlue text-whiteColor' 
                      : 'text-secondaryBlue hover:bg-primaryBlue hover:text-whiteColor'
                  }`}
                >
                  Contact Us
                </button>
              </div>
              <div className="hidden md:flex space-x-2">
                <Link to="/analyze" className="navbarSecondaryButtonStyle">
                  Analyze Now
                </Link>
                <Link to="/analyze" className="navbarPrimaryButtonStyle">
                  Sign In
                </Link>
              </div>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col justify-center items-center w-6 h-6"
              >
                <span
                  className={`bg-secondaryBlue block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-secondaryBlue block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-secondaryBlue block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>
            <div
              className={`absolute top-0 right-0 h-full w-2/3 bg-secondaryBlue transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-6 pt-20">
                <div className="space-y-6">
                  <Link
                    to="/"
                    className="block text-white text-lg py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="block text-white text-lg py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-white text-lg py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ResponsiveNavbar