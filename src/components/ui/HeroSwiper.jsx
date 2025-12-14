import React, { useState, useEffect } from 'react'

const HeroSwiper = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = React.Children.count(children)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 8000)

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-primaryBlue' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSwiper