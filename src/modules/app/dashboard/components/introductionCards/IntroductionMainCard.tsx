import clsx from 'clsx';

interface IntroductionMainCardProps {
  style?: string;
}

export const IntroductionMainCard: React.FC<IntroductionMainCardProps> = ({
  style,
}) => {
  return (
    <div
      className={clsx(
        style,
        'h-[94%] bg-darker-gray-1 rounded-r-lg sm:rounded-r-none'
      )}
    ></div>
  );
};
