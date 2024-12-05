import { IntroductionMainCard } from './introductionCards';

export const Introduction = () => {
  const className =
    'rounded-lg w-full md:w-6/12 p-5 xl:p-12 border hover:border-neon-purple';

  return (
    // <div className="flex h-[85vh] w-[90vw] min-w-80 flex-row items-start gap-5 overflow-y-scroll px-2 py-3 md:h-[70vh] md:flex-row md:gap-0 md:px-7 xl:w-[85vw] 2xl:w-[1200px]">
    <div className="flex w-full">
      <IntroductionMainCard />

      {/* <IntroductionDetailsCard className={className} /> */}
    </div>
  );
};
