import { SliderCard, WelcomeCard } from './introductionCards';
import { AboutMeCard } from './introductionCards/AboutMeCard';
import { ContactCard } from './introductionCards/ContactCard';
import { SkillsCard } from './introductionCards/SkillsCard';

export const Dashboard: React.FC = () => {
  return (
    <div className="main-padding relative flex h-fit grow flex-col items-start justify-start gap-4 bg-white dark:bg-theme-dark-bg">
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
