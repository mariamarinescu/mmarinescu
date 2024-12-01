import {
  IntroductionDetailsCard,
  IntroductionMainCard,
} from './introductionCards';
import { useDashboardCardsStyle } from './useDashboardCardsStyle';

export const Introduction = () => {
  const { style } = useDashboardCardsStyle();

  return (
    <div className="min-w-80 w-[90vw] h-[85vh] md:h-[70vh] xl:w-[85vw] 2xl:w-[1200px] flex flex-col gap-3 md:gap-0 md:flex-row overflow-y-scroll items-center px-2 md:px-7 py-3">
      <IntroductionMainCard style={style} />
      <IntroductionDetailsCard style={style} />
    </div>
  );
};
