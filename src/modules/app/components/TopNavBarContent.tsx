import { ContactButton, DarkModeButton } from 'components/buttons';
import { useState } from 'react';
import { checkIsMobile } from 'src/utils';
import { ContactModal } from './contact';

export const TopNavBarContent = () => {
  const isMobile = checkIsMobile();
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  return (
    <>
      <ContactButton setContactFormOpen={setContactFormOpen} />
      <DarkModeButton isMobile={isMobile} />
      <ContactModal
        open={isContactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </>
  );
};
