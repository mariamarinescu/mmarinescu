import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { SwiperImage } from 'components/index';
import { A11y, Navigation, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        'flex h-full items-start border border-gray-light-muted bg-white dark:bg-gray-light-muted'
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
            className="bg-white text-white"
          >
            <SwiperImage {...imageComponentProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
