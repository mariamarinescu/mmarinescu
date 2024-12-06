import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { ToggleButton } from 'components/buttons';
import { useEffect, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';

export const ThemeButton: React.FC = () => {
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
        className="flex h-fit w-fit"
        data-tooltip-content={`Switch to ${!!darkThemeStatus ? 'light' : 'dark'} theme`}
        data-tooltip-id="theme-switch-button"
      >
        <ToggleButton
          activeIcon={<IoMdSunny size={20} />}
          inactiveIcon={<IoMdMoon size={20} className="text-gray-800" />}
          activeBgColor="bg-gray-dark"
          inactiveBgColor="hover:bg-gray-medium"
          className="right-4 top-4 border border-gray-800 hover:border-neon-purple dark:border-white dark:hover:border-neon-purple"
          label="Toggle dark mode"
          onChange={toggleDarkMode}
          size="md"
        />
      </div>
      <ThemeAwareTooltip id="theme-switch-button" />
    </>
  );
};
