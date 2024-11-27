import { MdAlternateEmail } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

interface ContactButtonProps {
  setContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  setContactModalOpen,
}) => {
  return (
    <>
      <button
        onClick={() => setContactModalOpen(true)}
        data-tooltip-content="Contact me"
        data-tooltip-id="contact-button"
      >
        <div className="w-10 h-10 flex rounded-full justify-center items-center border border-neon-pink hover:bg-neon-pink hover:text-white dark:text-white dark:hover:text-white">
          <MdAlternateEmail size={20} />
        </div>
      </button>
      <Tooltip
        id="contact-button"
        place="bottom"
        className="max-w-sm text-xs"
      />
    </>
  );
};
