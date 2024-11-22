import {
  IntroductionDetailsCard,
  IntroductionMainCard,
} from './introductionCards';
import { useStyle } from './introductionCards/useStyle';

export const Introduction = () => {
  const { style } = useStyle();

  return (
    <div className="w-[90vw] h-[60vh] xl:w-[85vw] 2xl:w-[1200px]  md:h-[550px] flex flex-col gap-3 sm:gap-0 sm:flex-row overflow-y-scroll items-center p-1">
      <IntroductionMainCard style={style} />
      <IntroductionDetailsCard style={style} />
    </div>
  );
};
