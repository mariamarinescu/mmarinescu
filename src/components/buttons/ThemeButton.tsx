import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { ToggleButton } from '.';

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
    ReactGA.event({
      category: 'User',
      action: 'Clicked theme button',
    });
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
          inactiveIcon={<IoMdMoon size={20} className="text-white" />}
          className="right-4"
          label="Toggle dark mode"
          onChange={toggleDarkMode}
          size="md"
        />
      </div>
      <ThemeAwareTooltip id="theme-switch-button" />
    </>
  );
};
