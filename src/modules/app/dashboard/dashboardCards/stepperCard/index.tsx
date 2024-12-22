import { Card } from 'components/index';
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

export const getStepsData = (): StepType[] => [
  {
    title: 'Voxalyze',
    href: 'https://www.linkedin.com/company/voxalyze',
    content:
      'Implementing podcast marketing analytics platform alongside a backend developer and our CTO, taking ownership of the majority of frontend development, balancing independent work with regular request for feedback on both technical and professional development. Developed and maintained reusable UI component library, implemented state management, data querying and more.',
    completed: false,
    active: true,
    icon: <VoxalyzeIcon />,
    skillSet: (
      <ul className="mb-4 flex gap-3 font-sans text-sm">
        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img
              src="./img/React-icon.webp"
              className={skillIconSize}
              alt="React.js"
              data-testid="react-icon"
            />
            <p>React.js</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/Typescript.webp"
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
              src="./img/tanstack.webp"
              className={skillIconSize}
              alt="Tanstack"
              data-testid="tanstack-icon"
            />
            <p>Tanstack</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/recoil.webp"
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
      'Contributed to a react web-app as part of an agile team, engaging daily with distributed teams. Participated in transitioning from GraphQl to REST API and in the migration of the mono-repo to micro-frontend services. Also developed and maintained the reusable UI component library.',
    completed: false,
    active: false,
    icon: <DeutscheFintechSolutionsIcon />,
    skillSet: (
      <ul className="mb-4 flex gap-3 font-sans text-sm">
        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img
              src="./img/React-icon.webp"
              className={skillIconSize}
              alt="React.js"
              data-testid="react-icon"
            />
            <p>React.js</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/Typescript.webp"
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
              src="./img/GraphQL.webp"
              className={skillIconSize}
              alt="GraphQL"
              data-testid="graphql-icon"
            />
            <p>GraphQL</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/tanstack.webp"
              className={skillIconSize}
              alt="Tanstack"
              data-testid="tanstack-icon"
            />
            <p>Tanstack</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/formik.webp"
              className={skillIconSize}
              alt="Formik"
              data-testid="formik-icon"
            />
            <p>Formik</p>
          </li>
          <li className={skillRowClassName}>
            <img
              src="./img/storybook.webp"
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
  const stepsData = getStepsData();

  return (
    <Card title="A bit about my professional life..." className={className}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="main-text-size poppins content-text-color flex w-full flex-col text-pretty font-sans">
          {stepsData.map((step, index) => (
            <Step
              key={index}
              step={step as any}
              isLast={index === stepsData.length - 1}
              data-testid={`step-${index}`}
            />
          ))}
        </div>
        <div className="flex w-full justify-end">
          <ContactButtonGroup data-testid="contact-button-group" />
        </div>
      </div>
    </Card>
  );
};
