import clsx from 'clsx';
import { MdOutlineFileDownload } from 'react-icons/md';

interface IntroductionMainCardProps {
  style?: string;
}

export const IntroductionMainCard: React.FC<IntroductionMainCardProps> = ({
  style,
}) => {
  return (
    <div
      className={clsx(
        style,
        'h-[94%] bg-white dark:bg-darker-gray-1 border-darker-gray-1 border rounded-r-lg md:rounded-r-none'
      )}
    >
      <div className="w-full h-full text-black dark:text-white flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl xl:text-3xl">Hi, I'm Maria!</h3>

        <div className="overflow-scroll w-full h-full text-md md:text-lg xl:text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="flex w-full h-inherit justify-end gap-1 align-center">
          {/* <ResumeDownloadButton /> */}
          <button
            className={clsx(
              'flex items-center px-4 py-2 h-8 font-medium tracking-wide text-white capitalize',
              'transition-colors duration-300 transform bg-white border-darker-gray-1 border rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            )}
          >
            <MdOutlineFileDownload size={20} color="black" />
            <a
              className="mx-1 text-sm hidden xs:inline-block text-black"
              href="src/assets/resume.pdf"
              download="MMResume.pdf"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Download resume"
              data-tooltip-place="bottom"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
