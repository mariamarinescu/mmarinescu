import { Button } from 'components/buttons';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { CVIcon, GitHubIcon, LinkedinIcon } from '../icons';

const iconClassName = 'h-8 w-8';
const buttonClassName = 'w-32 justify-start';

const getButtonListConfig = (isDarkThemeActive: boolean | undefined) => [
  {
    href: 'https://www.linkedin.com/in/maria-marinescu',
    icon: (
      <LinkedinIcon
        className={iconClassName}
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
        className={iconClassName}
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
    label: 'Github',
    className: buttonClassName,
    id: 'github-profile',
  },
  {
    href: 'https://drive.google.com/file/d/1OddetrK6XoQl-V7YQf9WPuLLW6w-RF-O/view?usp=sharing',
    icon: (
      <CVIcon className={iconClassName} isDarkThemeActive={isDarkThemeActive} />
    ),
    label: 'Resume',
    className: buttonClassName,
    id: 'download-resume',
  },
];

export const ContactButtonGroup = () => {
  const isDarkThemeActive = useRecoilValue(darkThemeAtom);
  const buttonListConfig = getButtonListConfig(isDarkThemeActive);

  return (
    <>
      <div className="h-inherit align-center flex w-full flex-wrap items-center justify-start gap-2">
        {buttonListConfig.map(({ href, icon, label, className, id }) => (
          <Button
            href={href}
            icon={icon}
            label={label}
            className={className}
            key={id}
          />
        ))}
      </div>
    </>
  );
};
