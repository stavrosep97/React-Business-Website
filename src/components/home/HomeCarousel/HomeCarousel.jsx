// components/HomeCarousel.jsx
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './HomeCarousel.css';

export default function HomeCarousel() {
  const slidesData = [
    {
      id: 1,
      image: '/images/carousel1.jpg',
      title: 'Shading Systems & Curtains',
      subtitle: 'Light & Style',
      buttonText: 'VIEW PRODUCTS',
      link: '/products', // δεν υπάρχει ακόμα σελίδα - placeholder
    },
    {
      id: 2,
      image: '/images/carousel2.jpg',
      title: 'Modern Roller Blinds',
      subtitle: 'Solutions for every space',
      buttonText: 'CHECK OUT OUR GALLERY',
      link: '/gallery', // δεν υπάρχει ακόμα σελίδα - placeholder
    },
    {
      id: 3,
      image: '/images/carousel3.jpg',
      title: 'Custom Made Solutions',
      subtitle: 'Tailored to your needs',
      buttonText: 'CONTACT US',
      link: '/contact', // αυτό υπάρχει ήδη ως σελίδα
    }
  ];

  return (
    <section className="carousel-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={3000}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} className="slide-image" />

              <div className="slide-overlay">
                <div className="container">
                  <div className="text-box">
                    <h2>
                      <span className="title-part1">{slide.title}:</span>
                      <span className="title-part2"> {slide.subtitle}</span>
                    </h2>

                    {slide.link.startsWith('/') ? (
                      <Link to={slide.link} className="slide-btn">
                        {slide.buttonText}
                      </Link>
                    ) : (
                      <a href={slide.link} className="slide-btn">
                        {slide.buttonText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}