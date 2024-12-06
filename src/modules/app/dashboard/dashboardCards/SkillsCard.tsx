import clsx from 'clsx';
import { ButtonWithTooltip } from 'components/buttons';
import { Card } from 'components/containers';
import {
  CSS3Icon,
  HTML5Icon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCSSIcon,
  TypescriptIcon,
} from './icons';
import { RecoilIcon } from './icons/skillsCard/RecoilIcon';

export const SkillsCard = ({ className }: { className?: string }) => {
  return (
    <Card title="What can I do?" className={clsx('h-full w-full', className)}>
      <div className="align-center flex h-fit w-full flex-wrap items-center justify-start gap-2">
        <ButtonWithTooltip
          dataTooltipContent="Javascript"
          dataTooltipId="my-js-tooltip"
          icon={<JSIcon className="h-8 md:w-8" />}
        />

        <ButtonWithTooltip
          dataTooltipContent="Typescript"
          dataTooltipId="typescript-icon"
          icon={<TypescriptIcon className="h-8 w-8" />}
        />

        <ButtonWithTooltip
          dataTooltipContent="React.js"
          dataTooltipId="my-tooltip"
          icon={<ReactIcon className="h-8 w-8" />}
        />

        <ButtonWithTooltip
          dataTooltipContent="HTML5"
          dataTooltipId="my-html-tooltip"
          icon={<HTML5Icon className="h-8 w-8" />}
        />

        <ButtonWithTooltip
          dataTooltipContent="CSS3"
          dataTooltipId="my-css-tooltip"
          icon={<CSS3Icon className="h-8 w-8" />}
        />

        <ButtonWithTooltip
          dataTooltipContent="Tailwind"
          dataTooltipId="my-tailwind-tooltip"
          icon={<TailwindCSSIcon className="h-8 w-8" />}
          href="https://tailwindcss.com"
        />

        <ButtonWithTooltip
          dataTooltipContent="Recoil.js"
          dataTooltipId="my-recoil-tooltip"
          icon={<RecoilIcon className="h-8 w-8" />}
          href="https://recoiljs.org"
        />

        <ButtonWithTooltip
          dataTooltipContent="Redux.js"
          dataTooltipId="my-redux-tooltip"
          icon={<ReduxIcon className="h-8 w-8" />}
          href="https://redux.js.org"
        />
      </div>
    </Card>
  );
};
