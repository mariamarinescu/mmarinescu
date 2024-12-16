import {
  AboutMeCard,
  SkillsCard,
  SliderCard,
  StepperCard,
  WelcomeCard,
} from './dashboardCards';

export const Dashboard: React.FC = () => {
  return (
    <div className="main-padding relative mx-auto flex h-full grow flex-col items-start justify-start gap-4 2xl:max-w-[1000px]">
      <div className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6 md:grid-cols-2">
        <WelcomeCard />
        <SkillsCard />
      </div>
      <div className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6 md:grid-cols-12">
        <AboutMeCard className="col-span-1 md:col-span-4" />
        <StepperCard className="col-span-1 md:col-span-8" />
      </div>
      <div className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6">
        <SliderCard />
      </div>
    </div>
  );
};
