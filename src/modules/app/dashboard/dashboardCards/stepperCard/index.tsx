import { Card } from 'components/index';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { DeutscheFintechSolutionsIcon, VoxalyzeIcon } from '../icons';
import { ContactButtonGroup } from '../welcomeCard/ContactButtonGroup';
import Step from './Step';

export interface StepType {
  title: string;
  href: string;
  content: string;
  completed: boolean;
  active: boolean;
  icon: React.ReactNode;
  skillSet: React.ReactNode;
}

const skillRowClassName = 'flex gap-2';
const skillIconSize = 'w-5 h-5';

export const getStepsData = (isDarkTheme?: boolean): StepType[] => [
  {
    title: 'Voxalyze',
    href: 'https://www.linkedin.com/company/voxalyze',
    content:
      'Implementing podcast marketing analytics platform alongside a backend developer and our CTO, taking ownership of the majority of frontend development, balancing independent work with regular request for feedback on both technical and professional development. Developed and maintained reusable UI component library, implemented state management, data querying and more.',
    completed: false,
    active: true,
    icon: <VoxalyzeIcon isDarkTheme={isDarkTheme} />,
    skillSet: (
      <ul className="mb-4 flex gap-3 font-poppins text-sm">
        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img
              src="./img/React-icon.png"
              className={skillIconSize}
              alt="React.js"
              data-testid="react-icon"
            />
            <p>React.js</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/Typescript.png"
              className={skillIconSize}
              alt="Typescript"
              data-testid="typescript-icon"
            />
            <p>Typescript</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/ESLint.svg"
              className={skillIconSize}
              alt="Eslint"
              data-testid="eslint-icon"
            />
            <p>Eslint</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/Google-Tag-Manager.webp"
              className={skillIconSize}
              alt="Google Tag Manager"
              data-testid="google-tag-manager-icon"
            />
            <p>google-tag-manager</p>
          </li>
        </div>
        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img
              src="./img/react-hook-form.svg"
              className={skillIconSize}
              alt="React Hook Form"
              data-testid="react-hook-form-icon"
            />
            <p>react-hook-form</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/tailwindcss.svg"
              className={skillIconSize}
              alt="Tailwind CSS"
              data-testid="tailwind-css-icon"
            />
            <p>tailwind CSS</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/tanstack.png"
              className={skillIconSize}
              alt="Tanstack"
              data-testid="tanstack-icon"
            />
            <p>Tanstack</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/recoil.png"
              className={skillIconSize}
              alt="Recoil.js"
              data-testid="recoil-icon"
            />
            <p>recoil.js</p>
          </li>
        </div>
      </ul>
    ),
  },
  {
    title: 'Deutsche Fintech Solutions',
    href: 'https://www.linkedin.com/company/deutsche-fintech-solutions',
    content:
      'Took part of the migration from a mono-repo web app to micro front-end services and in the transition from GraphQL to REST APIs with react-query',
    completed: false,
    active: false,
    icon: <DeutscheFintechSolutionsIcon isDarkTheme={isDarkTheme} />,
    skillSet: (
      <ul className="mb-4 flex gap-3 font-poppins text-sm">
        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img
              src="./img/React-icon.png"
              className={skillIconSize}
              alt="React.js"
              data-testid="react-icon"
            />
            <p>React.js</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/Typescript.png"
              className={skillIconSize}
              alt="Typescript"
              data-testid="typescript-icon"
            />
            <p>Typescript</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/ESLint.svg"
              className={skillIconSize}
              alt="Eslint"
              data-testid="eslint-icon"
            />
            <p>Eslint</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/styled.svg"
              className={skillIconSize}
              alt="styled-components"
              data-testid="styled-components-icon"
            />
            <p>styled-components</p>
          </li>
        </div>
        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img
              src="./img/GraphQL.png"
              className={skillIconSize}
              alt="GraphQL"
              data-testid="graphql-icon"
            />
            <p>GraphQL</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/tanstack.png"
              className={skillIconSize}
              alt="Tanstack"
              data-testid="tanstack-icon"
            />
            <p>Tanstack</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/formik.png"
              className={skillIconSize}
              alt="Formik"
              data-testid="formik-icon"
            />
            <p>Formik</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/storybook.png"
              className={skillIconSize}
              alt="Storybook"
              data-testid="storybook-icon"
            />
            <p>Storybook</p>
          </li>
        </div>
      </ul>
    ),
  },
];

export const StepperCard = ({ className }: { className: string }) => {
  const isDarkThemeActive = useRecoilValue(darkThemeAtom);
  const stepsData = getStepsData(isDarkThemeActive);
  return (
    <Card title="A bit about my professional life..." className={className}>
      <div className="main-text-size poppins content-text-color flex w-full flex-col text-pretty font-poppins">
        {stepsData.map((step, index) => (
          <Step
            key={index}
            step={step as any}
            isLast={index === stepsData.length - 1}
            data-testid={`step-${index}`}
          />
        ))}
        <div className="flex w-full justify-end">
          <ContactButtonGroup data-testid="contact-button-group" />
        </div>
      </div>
    </Card>
  );
};
