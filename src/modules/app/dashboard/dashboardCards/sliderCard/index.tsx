import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { Card, SwiperImage } from 'components/index';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imageCollection } from './imageCollection';

interface SliderCardProps {
  className?: string;
}

export const SliderCard: React.FC<SliderCardProps> = ({ className }) => {
  return (
    <Card className={className} title="A glimpse of Voxalyze's frontend">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          zoom
          navigation
          centeredSlides
          effect="cube"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          loop={false}
          keyboard={{
            enabled: true,
          }}
        >
          {imageCollection.map(({ isZoomable, id, ...imageComponentProps }) => (
            <SwiperSlide
              id={id}
              key={id}
              zoom={isZoomable}
              className="bg-white text-white"
            >
              <SwiperImage
                {...imageComponentProps}
                className="hover:cursor-zoom-in"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Card>
  );
};
