import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { ToggleButton } from '.';

export const ThemeButton: React.FC = () => {
  const [isDarkActive, setIsDarkActive] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkActive(true);
    return document.body.classList.toggle('dark');
  };

  return (
    <>
      <div
        className="flex h-fit w-fit"
        data-tooltip-content={`Switch to ${!!isDarkActive ? 'light' : 'dark'} theme`}
        data-tooltip-id="theme-switch-button"
      >
        <ToggleButton
          activeIcon={<IoMdSunny size={20} className="text-yellow-800" />}
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
