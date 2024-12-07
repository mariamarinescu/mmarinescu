import clsx from 'clsx';
import { ButtonWithTooltip } from 'components/buttons';
import { useEffect, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { ContactModal } from '../dashboard/dashboardCards/contactCard/ContactModal';
import { EmailIcon } from '../dashboard/dashboardCards/icons';

export const TopNavBar: React.FC = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [darkThemeStatus, setDarkThemeStatusInStore] =
    useRecoilState(darkThemeAtom);

  const [isDarkActive, setIsDarkActive] = useState(false);

  useEffect(() => {
    if (darkThemeStatus !== isDarkActive)
      setDarkThemeStatusInStore(isDarkActive);
  }, [isDarkActive]);

  const toggleDarkMode = () => {
    setIsDarkActive((prevState) => !prevState);
    document.body.classList.toggle('dark');
  };
  return (
    <div className="w-full">
      <div
        className={clsx(
          'flex w-screen flex-row items-center justify-end gap-1 bg-white',
          'main-padding h-8 border-b border-gray-dark dark:bg-gray-dark'
        )}
      >
        <ButtonWithTooltip
          icon={
            <EmailIcon
              className="h-8 w-8"
              isDarkThemeActive={!!darkThemeStatus}
            />
          }
          onClick={() => setContactModalOpen(true)}
          variant="icon"
          dataTooltipContent="Send me a message"
          dataTooltipId="my-email-tooltip"
          className="transition-all duration-200"
        />
        <ButtonWithTooltip
          icon={
            !darkThemeStatus ? (
              <IoMdSunny className="custom-transition h-8 w-8 text-black hover:text-yellow-500" />
            ) : (
              <IoMdMoon className="custom-transition h-8 w-8 text-white hover:text-yellow-200" />
            )
          }
          onClick={() => toggleDarkMode()}
          variant="icon"
          dataTooltipContent="Send me a message"
          dataTooltipId="my-email-tooltip"
          className="transition-all duration-200"
        />
      </div>
      <ContactModal
        open={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};
