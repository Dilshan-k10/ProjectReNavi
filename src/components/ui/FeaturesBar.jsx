import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import FeatureCard from "./FeatureCard";

const FeaturesBar = ({ features }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10} // gap between slides
      slidesPerView={2} // start with 1 card on mobile
      loop={true} // infinite loop
      autoplay={{
        delay: 0, // no delay
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={6000} // slow transition speed
      allowTouchMove={false} // disable manual swiping for smooth effect
          breakpoints={{
          
        430: { slidesPerView: 2 }, // 2 cards on tablet
        1024: { slidesPerView: 4 }, // 3 cards on desktop
        1280: { slidesPerView: 4 }, // 4 cards on large screens
      }}
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <FeatureCard feature={feature} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturesBar;
