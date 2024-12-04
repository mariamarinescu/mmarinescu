import { ButtonWithTooltip } from 'components/buttons';
import { ContactModal } from 'modules/app/components/contact';
import { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlineFileDownload } from 'react-icons/md';

export const ContactButtonRow = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  return (
    <>
      <div className="h-inherit align-center flex w-full justify-end gap-2">
        <ButtonWithTooltip
          onClick={() => setContactFormOpen(true)}
          dataTooltipContent="Contact me"
          dataTooltipId="contact-button"
          icon={<CiMail size={20} />}
          size="medium"
          label="Contact"
        />
        <ButtonWithTooltip
          href="https://drive.google.com/file/d/1U9z0-8gRL1Wjevx0Whm2Hq9U9AzsjLtV/view?usp=sharing"
          dataTooltipContent="Download resume"
          dataTooltipId="my-tooltip"
          icon={<MdOutlineFileDownload size={20} />}
          iconPosition="left"
          label="Resume"
          size="medium"
        />
      </div>
      <ContactModal
        open={isContactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </>
  );
};
