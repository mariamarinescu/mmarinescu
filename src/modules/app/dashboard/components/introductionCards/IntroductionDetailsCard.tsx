import clsx from 'clsx';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IntroductionDetailsCardProps {
  style?: string;
}

const content = () => <div className="w-[440px] h-[440px] bg-red-500" />;

export const IntroductionDetailsCard: React.FC<
  IntroductionDetailsCardProps
> = ({ style }) => {
  return (
    <div className={clsx(style, 'h-full bg-lighter-gray-1 flex items-center')}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>{content}</SwiperSlide>
        <SwiperSlide>{content}</SwiperSlide>
        <SwiperSlide>{content}</SwiperSlide>
        <SwiperSlide>{content}</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
