import {
  AboutMeCard,
  ContactCard,
  SkillsCard,
  SliderCard,
  WelcomeCard,
} from './dashboardCards';

export const Dashboard: React.FC = () => {
  return (
    <div className="main-padding relative mx-auto flex h-fit grow flex-col items-start justify-start gap-4 bg-white dark:bg-theme-dark-bg 2xl:max-w-[1200px]">
      <div className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6 md:grid-cols-2">
        <WelcomeCard />
        <SkillsCard />
      </div>
      <div className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6 md:grid-cols-7">
        <AboutMeCard className="col-span-1 md:col-span-4" />
        <ContactCard className="col-span-1 md:col-span-3" />
      </div>
      <div className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6">
        <SliderCard />
      </div>
    </div>
  );
};
