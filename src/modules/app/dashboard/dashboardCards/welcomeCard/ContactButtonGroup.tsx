import { Button } from 'components/buttons';
import { CVIcon, GitHubIcon, LinkedinIcon } from '../icons';

const buttonClassName = 'w-32 justify-start';

const getButtonListConfig = () => [
  {
    href: 'https://www.linkedin.com/in/maria-marinescu',
    icon: <LinkedinIcon className="custom-icon-size" />,
    label: 'Linkedin',
    className: buttonClassName,
    id: 'linkedin-profile',
    'data-testid': 'linkedin-button',
    ariaLabel: 'Access my Linkedin profile',
  },
  {
    href: 'https://github.com/mariamarinescu',
    icon: <GitHubIcon className="custom-icon-size" />,
    label: 'Github',
    className: buttonClassName,
    id: 'github-profile',
    'data-testid': 'github-button',
    ariaLabel: 'Access my Github profile',
  },
  {
    href: 'https://drive.google.com/file/d/159ZUZmArnAXdVG-ReRp-32UcmgYE8cX4/view?usp=sharing',
    label: 'Resume',
    className: buttonClassName,
    id: 'download-resume',
    icon: <CVIcon className="custom-icon-size" />,
    'data-testid': 'resume-button',
    ariaLabel: 'Navigate to resume',
  },
];

export const ContactButtonGroup = () => {
  const buttonListConfig = getButtonListConfig();

  return (
    <>
      <div className="h-inherit align-center mt-5 flex w-full flex-wrap items-center justify-end gap-2">
        {buttonListConfig.map(
          ({
            href,
            icon,
            label,
            className,
            id,
            'data-testid': testId,
            ariaLabel,
          }) => (
            <Button
              id={id}
              ariaLabel={ariaLabel}
              href={href}
              icon={icon}
              label={label}
              className={className}
              key={id}
              data-testid={testId}
            />
          )
        )}
      </div>
    </>
  );
};
