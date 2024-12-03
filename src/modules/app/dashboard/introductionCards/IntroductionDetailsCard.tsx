import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { A11y, Navigation, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperImage } from '.';
import { imageCollection } from './imageCollection';

interface IntroductionDetailsCardProps {
  className?: string;
}

export const IntroductionDetailsCard: React.FC<
  IntroductionDetailsCardProps
> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        'h-full bg-white dark:bg-gray-light-muted border-gray-light-muted border flex items-center'
      )}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        zoom
        navigation
        centeredSlides
        effect="cube"
        pagination={{ clickable: true }}
      >
        {imageCollection.map(({ isZoomable, id, ...imageComponentProps }) => (
          <SwiperSlide
            id={id}
            key={id}
            zoom={isZoomable}
            className="text-white bg-white "
          >
            <SwiperImage {...imageComponentProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
