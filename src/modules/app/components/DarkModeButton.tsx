import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { Tooltip } from 'react-tooltip';
import { ToggleButton } from '../../../components';

interface DarkModeButtonProps {
  isMobile?: boolean;
}

export const DarkModeButton: React.FC<DarkModeButtonProps> = ({ isMobile }) => {
  const toggleDarkMode = () => document.body.classList.toggle('dark');

  return (
    <>
      <div
        className="w-fit h-fit flex"
        data-tooltip-content="Switch dark/light theme"
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
