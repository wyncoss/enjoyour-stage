// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Index',
          path: './w1.png',
        },
        {
          title: 'Sección compras',
          path: './w3.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'Sección inicio',
          path: './w2.png',
        },
        {
          title: 'Póster',
          path: './w7.png',
        },
      ],
    },
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

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[260px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-1 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
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

export default WorkSlider;
