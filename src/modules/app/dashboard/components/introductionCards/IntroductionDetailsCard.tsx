import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { A11y, Navigation, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperImage } from '.';

interface IntroductionDetailsCardProps {
  style?: string;
}

const commonImgProps = {
  width: '100%',
  height: '100%',
  alt: 'Portfolio image',
  dataSwiperZoom: '3',
  className: 'swiper-zoom-container',
};

const imageCollection = [
  {
    src: './img/voxa/ezgif.com-video-to-gif-2.gif',
    isZoomable: false,
    ...commonImgProps,
  },
  {
    src: './img/voxa/Visibility-3.svg',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/Analytics-1.svg',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/attribution-mix@2x.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/Spy-on-podcast-competitors.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/low-hanging-fruits-podcast-keywords-1.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/1.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/2.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/3.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/4.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/5.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/6.png',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: './img/voxa/7.png',
    isZoomable: true,
    ...commonImgProps,
  },
];

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
        // style={{
        //   width: '1800px',
        // }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        zoom
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => setNextSlide(true)}
      >
        {imageCollection.map(({ isZoomable, ...imageComponentProps }) => (
          <SwiperSlide zoom={isZoomable}>
            <SwiperImage {...imageComponentProps} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
