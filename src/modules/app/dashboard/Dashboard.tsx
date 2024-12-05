import { IntroductionMainCard } from './introductionCards';

export const Dashboard: React.FC = () => {
  return (
    <div className="main-padding flex h-full w-full grow items-start justify-center bg-white dark:bg-theme-dark-bg">
      {/* <Introduction /> */}
      <IntroductionMainCard />
    </div>
  );
};
