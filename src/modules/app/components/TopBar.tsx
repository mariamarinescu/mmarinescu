import { DarkModeButton, LinkedInShareButton } from '.';

interface TopBarProps {
  isMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isMobile }: TopBarProps) => {
  return (
    <>
      <LinkedInShareButton size={40} />
      <DarkModeButton isMobile={isMobile} />
    </>
  );
};
