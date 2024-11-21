import clsx from 'clsx';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { LinkedInShareButton } from '.';

export const ResumeDownloadButton = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <>
      <div className="flex align-end w-full pt-2">
        <LinkedInShareButton
          size={isMobile ? 32 : 0}
          className="linkedin-share-button"
        />
        <button
          className={clsx(
            'flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize',
            'transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
          )}
        >
          <MdOutlineFileDownload size={20} />
          <a
            className="button mx-1"
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
      <Tooltip
        place="top"
        id="my-tooltip"
        className="z-50 bg-transparent border dark:bg-white"
      />
    </>
  );
};
