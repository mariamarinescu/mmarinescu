import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { ToggleButton } from '../../../components';

interface DarkModeButtonProps {
  isMobile?: boolean;
}

export const DarkModeButton: React.FC<DarkModeButtonProps> = ({ isMobile }) => {
  const toggleDarkMode = () => document.body.classList.toggle('dark');

  return (
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
      size={isMobile ? 'sm' : 'md'}
    />
  );
};
