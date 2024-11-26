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
  style?: string;
}

export const IntroductionDetailsCard: React.FC<
  IntroductionDetailsCardProps
> = ({ style }) => {
  return (
    <div
      className={clsx(
        style,
        'h-full bg-white dark:bg-lighter-gray-1 border-lighter-gray-1 border flex items-center'
      )}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        zoom
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imageCollection.map(({ isZoomable, id, ...imageComponentProps }) => (
          <SwiperSlide id={id} key={id} zoom={isZoomable}>
            <SwiperImage {...imageComponentProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
