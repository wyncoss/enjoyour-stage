// data
export const teamSlider = {
  slides: [
    {
      images: [
        {
          title: 'Roger',
          path: '/me.jpg',
        },
        {
          title: 'Yuly',
          path: '/yuli.jpg',
        },
        {
          title: 'Alexa',
          path: '/alex.jpg',
        },
        {
          title: 'Camilo',
          path: '/test.jpg',
        },
        {
          title: 'Sebas',
          path: '/sebas.jpg',
        },
        {
          title: 'Carito',
          path: '/caro.jpg',
        },
        {
          title: 'Dayana',
          path: '/d3.jpg',
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import modules
import { Pagination } from 'swiper';

import Image from 'next/image';

const TeamSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[460px]"
    >
      {teamSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-4 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={200}
                        height={200}
                        alt={image.title}
                        className="h-[100px] sm:h-[180px]"
                      />
                      {/* overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition-all duration-300">
                        {/* title */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <p>{image.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TeamSlider;
