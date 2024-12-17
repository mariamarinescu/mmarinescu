import { Button, ButtonWithTooltip } from 'components/buttons';
import { useState } from 'react';
import ReactGA from 'react-ga4';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { ContactModal } from '../contactCard/ContactModal';
import { CVIcon, EmailIcon, GitHubIcon, LinkedinIcon } from '../icons';

const buttonClassName = 'w-32 justify-start';

const getButtonListConfig = (isDarkThemeActive: boolean | undefined) => [
  {
    href: 'https://www.linkedin.com/in/maria-marinescu',
    icon: (
      <LinkedinIcon
        className="custom-icon-size"
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
    label: 'Linkedin',
    className: buttonClassName,
    id: 'linkedin-profile',
  },
  {
    href: 'https://github.com/mariamarinescu',
    icon: (
      <GitHubIcon
        className="custom-icon-size"
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
    label: 'Github',
    className: buttonClassName,
    id: 'github-profile',
  },
  {
    href: 'https://drive.google.com/file/d/1jAJcdkcsiK1cOIWmreTzeKLIRRAWeKC-/view?usp=sharing',
    label: 'Resume',
    className: buttonClassName,
    id: 'download-resume',
    icon: (
      <CVIcon
        className="custom-icon-size"
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
  },
];

export const ContactButtonGroup = () => {
  const isDarkThemeActive = useRecoilValue(darkThemeAtom);
  const buttonListConfig = getButtonListConfig(isDarkThemeActive);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    ReactGA.event({
      category: 'User',
      action: 'Opened contact modal',
    });
    setContactModalOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="h-inherit align-center mt-5 flex w-full flex-wrap items-center justify-end gap-2">
        {buttonListConfig.map(({ href, icon, label, className, id }) => (
          <Button
            href={href}
            icon={icon}
            label={label}
            className={className}
            key={id}
          />
        ))}
        <ButtonWithTooltip
          label="Contact"
          className={buttonClassName}
          onClick={toggleContactModal}
          icon={
            <EmailIcon
              className="h-6 w-6"
              isDarkThemeActive={isDarkThemeActive}
            />
          }
          dataTooltipContent="Contact me"
          dataTooltipId="contact-me-button"
        />
      </div>
      <ContactModal open={isContactModalOpen} onClose={toggleContactModal} />
    </>
  );
};
