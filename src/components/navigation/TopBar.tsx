import { useRef, useState } from 'react';
// import { DarkModeButton } from 'components';
import { ContactButton, DarkModeButton } from 'components/buttons';

import { ContactModal } from '../../modules/app/dashboard/components/contact/ContactModal';

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
