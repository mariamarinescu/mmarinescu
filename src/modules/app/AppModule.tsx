import { checkIsMobile } from 'src/utils';
import { DarkModeButton, Footer, LinkedInShareButton } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  const isMobile = checkIsMobile();

  return (
    <div className="bg-white dark:bg-th-darker-gray min-h-screen w-full mx-auto relative flex flex-col px-5">
      <div className="w-full h-fit my-2 flex justify-end items-center gap-4">
        <LinkedInShareButton
          size={isMobile ? 0 : 40}
          className="Demo__some-network__share-button"
        />
        {/* <AwesomeButton size="icon" type="primary">
          <IoMdDownload />
          <p>Download CV</p>
        </AwesomeButton> */}
        <DarkModeButton isMobile={isMobile} />
      </div>
      <Dashboard />
      <Footer className="my-4" />
    </div>
  );
};
