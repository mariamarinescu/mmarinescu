import { ChangeThemeButton } from 'components/buttons';
import { checkIsMobile } from 'src/utils';

export const TopNavBarContent = () => {
  const isMobile = checkIsMobile();

  return (
    <>
      <ChangeThemeButton isMobile={isMobile} />
    </>
  );
};
