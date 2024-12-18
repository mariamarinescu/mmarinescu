import {
  AboutMeCard,
  SkillsCard,
  SliderCard,
  StepperCard,
  WelcomeCard,
} from './dashboardCards';

export const Dashboard: React.FC = () => {
  return (
    <div
      className="main-padding relative mx-auto flex h-full grow flex-col items-start justify-start gap-4 2xl:max-w-[1000px]"
      data-testid="dashboard"
    >
      <div
        className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6 md:grid-cols-2"
        data-testid="welcome-skills-section"
      >
        <WelcomeCard data-testid="welcome-card" />
        <SkillsCard data-testid="skills-card" />
      </div>
      <div
        className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6 md:grid-cols-12"
        data-testid="about-me-stepper-section"
      >
        <AboutMeCard
          className="col-span-1 md:col-span-4"
          data-testid="aboutme-card"
        />
        <StepperCard
          className="col-span-1 md:col-span-8"
          data-testid="stepper-card"
        />
      </div>
      <div
        className="grid h-fit w-full grid-cols-1 gap-4 px-1 sm:px-6"
        data-testid="slider-section"
      >
        <SliderCard data-testid="slider-card" />
      </div>
    </div>
  );
};
