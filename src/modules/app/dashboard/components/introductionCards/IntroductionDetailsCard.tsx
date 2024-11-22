import clsx from 'clsx';

interface IntroductionDetailsCardProps {
  style?: string;
}

export const IntroductionDetailsCard: React.FC<
  IntroductionDetailsCardProps
> = ({ style }) => {
  return <div className={clsx(style, 'h-full bg-lighter-gray-1')}></div>;
};
