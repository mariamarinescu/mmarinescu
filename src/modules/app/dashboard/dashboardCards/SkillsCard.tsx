import clsx from 'clsx';
import { ButtonWithTooltip } from 'components/buttons';
import { Card } from 'components/containers';
import {
  CSS3Icon,
  EslintIcon,
  HTML5Icon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCSSIcon,
  TypescriptIcon,
} from './icons';
import { RecoilIcon } from './icons/skillsCard/RecoilIcon';

const iconClassName = 'h-8 w-8 md:h-12 md:w-12';

const buttonListConfig = [
  {
    dataTooltipContent: 'Javascript',
    dataTooltipId: 'my-js-tooltip',
    icon: <JSIcon className={iconClassName} />,
  },
  {
    dataTooltipContent: 'Typescript',
    dataTooltipId: 'my-typescript-tooltip',
    icon: <TypescriptIcon className={iconClassName} />,
  },
  {
    dataTooltipContent: 'React.js',
    dataTooltipId: 'my-react-tooltip',
    icon: <ReactIcon className={iconClassName} />,
  },
  {
    dataTooltipContent: 'HTML5',
    dataTooltipId: 'my-html-tooltip',
    icon: <HTML5Icon className={iconClassName} />,
  },
  {
    dataTooltipContent: 'CSS3',
    dataTooltipId: 'my-css-tooltip',
    icon: <CSS3Icon className={iconClassName} />,
  },
  {
    dataTooltipContent: 'Eslint',
    dataTooltipId: 'my-eslint-tooltip',
    icon: <EslintIcon className={iconClassName} />,
  },

  {
    dataTooltipContent: 'Tailwind',
    dataTooltipId: 'my-tailwind-tooltip',
    icon: <TailwindCSSIcon className={iconClassName} />,
    href: 'https://tailwindcss.com',
  },
  {
    dataTooltipContent: 'Recoil.js',
    dataTooltipId: 'my-recoil-tooltip',
    icon: <RecoilIcon className={iconClassName} />,
    href: 'https://recoiljs.org',
  },
  {
    dataTooltipContent: 'Redux.js',
    dataTooltipId: 'my-redux-tooltip',
    icon: <ReduxIcon className={iconClassName} />,
    href: 'https://redux.js.org',
  },
];

interface SkillsCardProps {
  className?: string;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ className }) => {
  return (
    <Card title="What can I do?" className={clsx('h-full w-full', className)}>
      <div className="align-center flex h-fit w-full flex-wrap items-center justify-start gap-2 md:gap-4 lg:gap-5">
        {buttonListConfig.map(
          ({ dataTooltipContent, dataTooltipId, icon, href }) => (
            <ButtonWithTooltip
              key={dataTooltipId}
              dataTooltipContent={dataTooltipContent}
              dataTooltipId={dataTooltipId}
              icon={icon}
              href={href}
            />
          )
        )}
      </div>
    </Card>
  );
};
