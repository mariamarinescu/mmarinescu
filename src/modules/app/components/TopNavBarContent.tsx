import { ContactButton, DarkModeButton } from 'components/buttons';
import { createRef, useState } from 'react';
import { checkIsMobile } from 'src/utils';
import { ContactModal } from './contact';

export const TopNavBarContent = () => {
  const isMobile = checkIsMobile();
  const contactFormRef = createRef<HTMLFormElement>();
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  return (
    <>
      <ContactButton setContactFormOpen={setContactFormOpen} />
      <DarkModeButton isMobile={isMobile} />
      <ContactModal
        formRef={contactFormRef}
        open={isContactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </>
  );
};
