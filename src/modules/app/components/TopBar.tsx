import { useRef, useState } from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { DarkModeButton } from '.';
import { ContactModal } from '../dashboard/components/contact/ContactModal';

interface TopBarProps {
  isMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isMobile }: TopBarProps) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const formRef = useRef<any>();

  return (
    <>
      <button onClick={() => setContactModalOpen(true)}>
        <div className="w-10 h-10 flex rounded-full justify-center items-center border border-neon-pink hover:bg-neon-pink hover:text-white dark:text-white dark:hover:text-white">
          <MdAlternateEmail size={20} />
        </div>
      </button>
      <DarkModeButton isMobile={isMobile} />
      <ContactModal
        formRef={formRef}
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
};
