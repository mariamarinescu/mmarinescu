import { SimpleButton } from 'components/buttons';
import { MdOutlineFileDownload } from 'react-icons/md';

export const ResumeDownloadButton = () => {
  return (
    <SimpleButton>
      <div className="flex align-end w-full pt-2 gap-4 m-auto">
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
      </div>
    </SimpleButton>
  );
};
