import { Footer } from 'components/Footer';
import { ContactButton, DarkModeButton } from 'components/buttons';
import { TopNavBar } from 'components/navigation';
import { useRef, useState } from 'react';
import { checkIsMobile } from 'src/utils';
import { Dashboard } from './dashboard/Dashboard';
import { ContactModal } from './dashboard/components/contact';

const TopNavBarContent = () => {
  const isMobile = checkIsMobile();
  const contactFormRef = useRef<any>();
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

export const AppModule = () => {
  return (
    <main className="flex flex-col content-between w-screen h-screen">
      <TopNavBar>
        <TopNavBarContent />
      </TopNavBar>
      <Dashboard />
      <Footer />
    </main>
  );
};
//
