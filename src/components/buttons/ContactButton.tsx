import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { MdAlternateEmail } from 'react-icons/md';

interface ContactButtonProps {
  setContactFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  setContactFormOpen,
}) => {
  return (
    <>
      <button
        onClick={() => setContactFormOpen(true)}
        data-tooltip-content="Contact me"
        data-tooltip-id="contact-button"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-purple hover:bg-neon-purple hover:text-white dark:text-white dark:hover:text-white">
          <MdAlternateEmail size={20} />
        </div>
      </button>
      <ThemeAwareTooltip id="contact-button" />
    </>
  );
};
