import clsx from 'clsx';
import { ButtonWithTooltip } from 'components/buttons';
import { Card } from 'components/containers';
import {
  CSS3Icon,
  HTML5Icon,
  JSIcon,
  ReactIcon,
  TypescriptIcon,
} from './icons';

const customIconSize = 'h-8 xl:h-10 w-8 xl:w-10';

const buttonListConfig = [
  {
    dataTooltipContent: 'Javascript',
    dataTooltipId: 'my-js-tooltip',
    icon: <JSIcon className={customIconSize} />,
  },
  {
    dataTooltipContent: 'Typescript',
    dataTooltipId: 'my-typescript-tooltip',
    icon: <TypescriptIcon className={customIconSize} />,
  },
  {
    dataTooltipContent: 'React.js',
    dataTooltipId: 'my-react-tooltip',
    icon: <ReactIcon className={customIconSize} />,
  },
  {
    dataTooltipContent: 'HTML5',
    dataTooltipId: 'my-html-tooltip',
    icon: <HTML5Icon className={customIconSize} />,
  },
  {
    dataTooltipContent: 'CSS3',
    dataTooltipId: 'my-css-tooltip',
    icon: <CSS3Icon className={customIconSize} />,
  },
];

interface SkillsCardProps {
  className?: string;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ className }) => {
  return (
    <Card
      title="What can I do?"
      className={clsx('h-full w-full', className)}
      data-testid="skills-card"
    >
      <div
        className="align-center flex h-fit w-full flex-wrap items-center justify-start gap-2 md:gap-4 lg:gap-5"
        data-testid="skills-card-buttons"
      >
        {buttonListConfig.map(({ dataTooltipContent, dataTooltipId, icon }) => (
          <ButtonWithTooltip
            key={dataTooltipId}
            dataTooltipContent={dataTooltipContent}
            dataTooltipId={dataTooltipId}
            icon={icon}
            className="h-16 cursor-default xl:h-16"
            data-testid={`button-${dataTooltipId}`}
          />
        ))}
      </div>
    </Card>
  );
};
