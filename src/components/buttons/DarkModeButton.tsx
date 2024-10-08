import { MoonIcon, SunIcon, ToggleButton } from '..';

export const DarkModeButton = () => {
  const toggleDarkMode = () => document.body.classList.toggle('dark');

  return (
    <ToggleButton
      activeIcon={<SunIcon className="size-7" />}
      inactiveIcon={<MoonIcon className="size-7" />}
      className="absolute top-4 right-4 h-12 w-20"
      label="Toggle dark mode"
      onChange={toggleDarkMode}
    />
  );
};
