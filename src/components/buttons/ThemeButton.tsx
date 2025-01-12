import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { useCallback, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { ToggleButton } from '.';

/**
 * ThemeButton component allows users to toggle between light and dark themes.
 *
 * This component uses a toggle button to switch themes and displays a tooltip
 * indicating the current theme. It also ensures that the theme state is synchronized
 * with the DOM.
 *
 * @returns {JSX.Element} The rendered ThemeButton component.
 */
export const ThemeButton: React.FC = () => {
  const [isDarkActive, setIsDarkActive] = useState<boolean>(() => {
    return document.body.classList.contains('dark');
  });

  const toggleDarkMode = useCallback(() => {
    setIsDarkActive((prev) => !prev);
    document.body.classList.toggle('dark');
  }, [isDarkActive]);

  return (
    <>
      <div
        className="flex h-fit w-fit"
        data-tooltip-content={`Switch to ${isDarkActive ? 'light' : 'dark'} theme`}
        data-tooltip-id="theme-switch-button"
        role="button"
        aria-label={`Switch to ${isDarkActive ? 'light' : 'dark'} theme`}
        aria-pressed={isDarkActive}
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
