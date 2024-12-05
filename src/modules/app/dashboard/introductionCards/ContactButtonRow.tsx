import { Button, ButtonWithTooltip } from 'components/buttons';
import { ContactModal } from 'modules/app/components/contact';
import { useState } from 'react';
import { CVIcon } from './CVIcon';
import { ContactMeIcon } from './ContactMeIcon';
import { GitHubIcon } from './GitHubIcon';
import { LinkedinIcon } from './LinkedinIcon';

export const ContactButtonRow = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  return (
    <>
      <div className="h-inherit align-center flex w-full items-center justify-end gap-2">
        <Button
          href="https://www.linkedin.com/in/maria-marinescu"
          dataTooltipContent="Linkedin profile"
          dataTooltipId="my-tooltip"
          icon={<LinkedinIcon className="h-8 w-8" />}
          iconPosition="left"
          // label="Linkedin"
          size="medium"
        />

        <Button
          href="https://github.com/mariamarinescu"
          dataTooltipContent="GitHub profile"
          dataTooltipId="my-tooltip"
          icon={<GitHubIcon className="h-8 w-8" />}
          iconPosition="left"
          // label="Github"
          size="medium"
        />

        <ButtonWithTooltip
          onClick={() => setContactFormOpen(true)}
          dataTooltipContent="Contact me"
          dataTooltipId="contact-button"
          icon={<ContactMeIcon className="h-8 w-8" />}
          size="medium"
          // label="Contact"
        />

        <ButtonWithTooltip
          href="https://drive.google.com/file/d/1OddetrK6XoQl-V7YQf9WPuLLW6w-RF-O/view?usp=sharing"
          dataTooltipContent="Download resume"
          dataTooltipId="my-tooltip"
          icon={<CVIcon className="h-8 w-8" />}
          iconPosition="left"
          // label="Resume"
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
