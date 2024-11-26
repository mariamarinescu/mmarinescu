import { useRef, useState } from 'react';
import { GrContact } from 'react-icons/gr';
import { DarkModeButton, LinkedInShareButton } from '.';
import { ContactModal } from '../dashboard/components/contact/ContactModal';

interface TopBarProps {
  isMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isMobile }: TopBarProps) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const formRef = useRef<any>();

  return (
    <>
      <LinkedInShareButton size={40} />
      <button onClick={() => setContactModalOpen(true)}>
        <div className="w-10 h-10 flex rounded-full bg-black justify-center items-center">
          <GrContact size={16} color="white" />
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
