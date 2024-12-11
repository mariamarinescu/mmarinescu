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

const buttonListConfig = [
  {
    dataTooltipContent: 'Javascript',
    dataTooltipId: 'my-js-tooltip',
    icon: <JSIcon className="custom-icon-size" />,
  },
  {
    dataTooltipContent: 'Typescript',
    dataTooltipId: 'my-typescript-tooltip',
    icon: <TypescriptIcon className="custom-icon-size" />,
  },
  {
    dataTooltipContent: 'React.js',
    dataTooltipId: 'my-react-tooltip',
    icon: <ReactIcon className="custom-icon-size" />,
  },
  {
    dataTooltipContent: 'HTML5',
    dataTooltipId: 'my-html-tooltip',
    icon: <HTML5Icon className="custom-icon-size" />,
  },
  {
    dataTooltipContent: 'CSS3',
    dataTooltipId: 'my-css-tooltip',
    icon: <CSS3Icon className="custom-icon-size" />,
  },
  {
    dataTooltipContent: 'Eslint',
    dataTooltipId: 'my-eslint-tooltip',
    icon: <EslintIcon className="custom-icon-size" />,
  },

  {
    dataTooltipContent: 'Tailwind',
    dataTooltipId: 'my-tailwind-tooltip',
    icon: <TailwindCSSIcon className="custom-icon-size" />,
    href: 'https://tailwindcss.com',
  },
  {
    dataTooltipContent: 'Recoil.js',
    dataTooltipId: 'my-recoil-tooltip',
    icon: <RecoilIcon className="custom-icon-size" />,
    href: 'https://recoiljs.org',
  },
  {
    dataTooltipContent: 'Redux.js',
    dataTooltipId: 'my-redux-tooltip',
    icon: <ReduxIcon className="custom-icon-size" />,
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
