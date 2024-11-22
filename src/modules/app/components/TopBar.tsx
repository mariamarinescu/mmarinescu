import { DarkModeButton, LinkedInShareButton } from '.';

interface TopBarProps {
  isMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isMobile }: TopBarProps) => {
  return (
    <div className="flex items-center gap-4 flex-row justify-end w-screen bg-white h-16 xl:h-20 px-6 md:px-9 py-4 md:py-4 ">
      <LinkedInShareButton size={isMobile ? 0 : 40} />
      {/* <AwesomeButton size="icon" type="primary">
        <IoMdDownload />
        <p>Download CV</p>
      </AwesomeButton> */}
      <DarkModeButton isMobile={isMobile} />
    </div>
  );
};
