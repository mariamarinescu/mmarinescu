import { useRef, useState } from 'react';
import { DarkModeButton } from '.';
import { ContactModal } from '../dashboard/components/contact/ContactModal';
import { ContactButton } from './ContactButton';

interface TopBarProps {
  isMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isMobile }: TopBarProps) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const formRef = useRef<any>();

  return (
    <>
      <ContactButton setContactModalOpen={setContactModalOpen} />
      <DarkModeButton isMobile={isMobile} />
      <ContactModal
        formRef={formRef}
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
};
