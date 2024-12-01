import { ToggleButton } from 'components/buttons';
import { useEffect, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { Tooltip } from 'react-tooltip';
import { useRecoilState } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';

interface DarkModeButtonProps {
  isMobile?: boolean;
}

export const DarkModeButton: React.FC<DarkModeButtonProps> = () => {
  const [isDarkActive, setIsDarkActive] = useState(false);
  const [darkThemeStatus, setDarkThemeStatusInStore] =
    useRecoilState(darkThemeAtom);

  useEffect(() => {
    if (darkThemeStatus !== isDarkActive)
      setDarkThemeStatusInStore(isDarkActive);
  }, [isDarkActive]);

  const toggleDarkMode = () => {
    setIsDarkActive((prevState) => !prevState);
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <div
        className="w-fit h-fit flex"
        data-tooltip-content={`Switch ${!!darkThemeStatus ? 'light' : 'dark'} theme`}
        data-tooltip-id="theme-switch-button"
      >
        <ToggleButton
          activeIcon={<IoMdSunny style={{ fontSize: '16px' }} />}
          inactiveIcon={
            <IoMdMoon style={{ fontSize: '16px' }} className="text-gray-800" />
          }
          activeBgColor="bg-th-darker-gray"
          inactiveBgColor="hover:bg-th-lighter-gray"
          className="top-4 right-4 border-neon-pink border"
          label="Toggle dark mode"
          onChange={toggleDarkMode}
          size="md"
        />
      </div>
      <Tooltip
        id="theme-switch-button"
        place="bottom"
        className="max-w-sm text-xs"
      />
    </>
  );
};
