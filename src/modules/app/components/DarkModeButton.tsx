import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { ToggleButton } from '../../../components';

export const DarkModeButton = ({ isMobile }: { isMobile?: boolean }) => {
  const toggleDarkMode = () => document.body.classList.toggle('dark');

  return (
    <ToggleButton
      activeIcon={<IoMdSunny style={{ fontSize: '16px' }} />}
      inactiveIcon={
        <IoMdMoon style={{ fontSize: '16px' }} className="text-gray-800" />
      }
      activeBgColor="bg-th-darker-gray hover:bg-th-lighter-gray"
      inactiveBgColor="hover:bg-th-lighter-gray"
      className="top-4 right-4 h-14 w-14 dark:border-th-medium-gray border border-gray-950"
      label="Toggle dark mode"
      onChange={toggleDarkMode}
      size={isMobile ? 'small' : 'medium'}
    />
  );
};
