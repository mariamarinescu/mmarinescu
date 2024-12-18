import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { useEffect, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { ToggleButton } from '.';

export const ThemeButton: React.FC = () => {
  const [isDarkActive, setIsDarkActive] = useState(false);
  const [darkThemeStatus, setDarkThemeStatusInStore] =
    useRecoilState(darkThemeAtom);
  const [initialization, setInitialization] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkActive((prevState) => {
      const currentState = !prevState;
      setDarkThemeStatusInStore(currentState);
      return currentState;
    });
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    if (initialization) {
      if (isDarkActive !== darkThemeStatus && darkThemeStatus !== undefined) {
        setIsDarkActive(darkThemeStatus);
        document.body.classList.add('dark');
        setInitialization(false);
      }
    }
  }, []);

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
