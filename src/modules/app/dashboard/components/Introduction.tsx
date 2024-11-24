import {
  IntroductionDetailsCard,
  IntroductionMainCard,
} from './introductionCards';
import { useStyle } from './introductionCards/useStyle';

export const Introduction = () => {
  const { style } = useStyle();

  return (
    <div>
      {/* <div className="w-[90vw] h-[60vh] md:w-[85vw] 2xl:w-[1200px] md:h-[550px] flex flex-col gap-3 md:gap-0 md:flex-row overflow-y-scroll items-center p-1"> */}
      <IntroductionMainCard style={style} />
      <IntroductionDetailsCard style={style} />
    </div>
  );
};
