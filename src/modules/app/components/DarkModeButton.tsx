import { MoonIcon, SunIcon, ToggleButton } from '../../../components';

export const DarkModeButton = () => {
  const toggleDarkMode = () => document.body.classList.toggle('dark');

  return (
    <ToggleButton
      activeIcon={<SunIcon className="size-7 text-gray-600 bg-gray-600" />}
      inactiveIcon={<MoonIcon className="size-7" />}
      className="absolute top-4 right-4 h-12 w-20 dark:border-gray-400 border border-gray-300"
      label="Toggle dark mode"
      onChange={toggleDarkMode}
    />
  );
};
