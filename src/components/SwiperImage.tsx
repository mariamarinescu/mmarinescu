import clsx from 'clsx';

interface SwiperImageProps {
  src: string;
  alt?: string;
  width: string | number;
  height: string | number;
  className?: string;
  dataSwiperZoom?: string | number;
}

export const SwiperImage: React.FC<SwiperImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  dataSwiperZoom,
}) => {
  return (
    <div
      className={clsx('swiper-zoom-container', className)}
      data-swiper-zoom={dataSwiperZoom || '3'}
      data-testid="swiper-image"
    >
      <img
        src={src}
        width={width || '100%'}
        height={height || '100%'}
        alt={alt || 'Image not found!'}
      />
    </div>
  );
};
