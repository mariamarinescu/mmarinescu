// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const content = () => {
  return <div className="h-[700px] w-[500px]" />;
};

export const Introduction = ({ className }: { className?: string }) => {
  // const isMobile = checkIsMobile();

  return (
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

    // <div className="h-full w-full flex">
    //   <div className="bg-red rounded-md w-full sm-w m-6"></div>
    //   <div className="bg-white p-8 m-6 w-8">
    //     <Swiper
    //       // install Swiper modules
    //       modules={[Navigation, Pagination, Scrollbar, A11y]}
    //       spaceBetween={50}
    //       slidesPerView={1}
    //       navigation
    //       pagination={{ clickable: true }}
    //       scrollbar={{ draggable: true }}
    //       onSwiper={(swiper) => console.log(swiper)}
    //       onSlideChange={() => console.log('slide change')}
    //     >
    //       <SwiperSlide>{content}</SwiperSlide>
    //       <SwiperSlide>{content}</SwiperSlide>
    //       <SwiperSlide>{content}</SwiperSlide>
    //       <SwiperSlide>{content}</SwiperSlide>
    //       ...
    //     </Swiper>
    //   </div>
    // </div>

    // <Card className={clsx(className)}>
    //   <Card.Body className="flex gap-4">
    //     <div className="flex flex-col text-start gap-3 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scroll-smooth dark:text-white">
    //       <h1>HI, I'm Maria!!</h1>
    //       <p>
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum."
    //       </p>
    //     </div>

    //     <ResumeDownloadButton isMobile={isMobile} />
    //     {/* <BubbleComponent /> */}
    //   </Card.Body>
    // </Card>
  );
};
