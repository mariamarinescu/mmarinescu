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
            <img src="./img/React-icon.png" className={skillIconSize} />
            <p>React.js</p>
          </li>

          <li className={skillRowClassName}>
            <img src="./img/Typescript.png" className={skillIconSize} />
            <p>Typescript</p>
          </li>

          <li className={skillRowClassName}>
            <img src="./img/ESLint.svg" className={skillIconSize} />
            <p>Eslint</p>
          </li>

          <li className={skillRowClassName}>
            <img
              src="./img/Google-Tag-Manager.webp"
              className={skillIconSize}
            />
            <p>google-tag-manager</p>
          </li>
        </div>

        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img src="./img/react-hook-form.svg" className={skillIconSize} />
            <p>react-hook-form</p>
          </li>

          <li className={skillRowClassName}>
            <img src="./img/tailwindcss.svg" className={skillIconSize} />
            <p>tailwind CSS</p>
          </li>

          <li className={skillRowClassName}>
            <img src="./img/tanstack.png" className={skillIconSize} />
            <p>Tanstack</p>
          </li>

          <li className={skillRowClassName}>
            <img src="./img/recoil.png" className={skillIconSize} />
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
            <img src="./img/React-icon.png" className={skillIconSize} />
            <p>React.js</p>
          </li>
          <li className={skillRowClassName}>
            <img src="./img/Typescript.png" className={skillIconSize} />
            <p>Typescript</p>
          </li>
          <li className={skillRowClassName}>
            <img src="./img/ESLint.svg" className={skillIconSize} />
            <p>Eslint</p>
          </li>
          <li className={skillRowClassName}>
            <img src="./img/styled.svg" className={skillIconSize} />
            <p>styled-components</p>
          </li>
        </div>

        <div className="flex flex-col gap-3">
          <li className={skillRowClassName}>
            <img src="./img/GraphQL.png" className={skillIconSize} />
            <p>GraphQL</p>
          </li>
          <li className={skillRowClassName}>
            <img src="./img/tanstack.png" className={skillIconSize} />
            <p>Tanstack</p>
          </li>
          <li className={skillRowClassName}>
            <img src="./img/formik.png" className={skillIconSize} />
            <p>Formik</p>
          </li>
          <li className={skillRowClassName}>
            <img src="./img/storybook.png" className={skillIconSize} />
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
          />
        ))}
        <div className="flex w-full justify-end">
          {/* <Button
            href="https://drive.google.com/file/d/1YRgVTwL7BoN56tbgzDW-i_DAWoEtTmjx/view?usp=sharing"
            icon={
              <CVIcon
                className="custom-icon-size"
                isDarkThemeActive={isDarkThemeActive}
              />
            }
            label="Resume"
          /> */}
          <ContactButtonGroup />
        </div>
      </div>
    </Card>
  );
};
