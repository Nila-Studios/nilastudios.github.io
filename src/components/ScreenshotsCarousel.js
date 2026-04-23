'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ScreenshotsCarousel() {
  const images = [
    { src: '/assets/images/app-previews/app1.jpg', alt: 'ZodiacMind app home screen preview' },
    { src: '/assets/images/app-previews/app2.jpg', alt: 'Horoscope chart generation screen' },
    { src: '/assets/images/app-previews/app3.jpg', alt: 'Marriage compatibility report preview' },
    { src: '/assets/images/app-previews/app4.jpg', alt: 'PDF export report preview' },
    { src: '/assets/images/app-previews/app5.jpg', alt: 'PDF export report preview' },
    { src: '/assets/images/app-previews/app6.jpg', alt: 'PDF export report preview' },
    { src: '/assets/images/app-previews/app7.jpg', alt: 'PDF export report preview' },
    { src: '/assets/images/app-previews/app8.jpg', alt: 'PDF export report preview' },
  ];

  return (
    <div className="carousel-wrap">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.1}
        spaceBetween={16}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3.1,
            spaceBetween: 20,
          },
        }}
        className="screenshots-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={1067}
              priority={index < 2}
              quality={80}
              //              style={{
              //                width: '100%',
              //                height: 'auto',
              //              }}
            />
          </SwiperSlide>
        ))}
        {/* Manually adding navigation/pagination elements to match the previous design's custom styling and positioning */}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}
