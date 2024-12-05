import { Card } from 'components/containers';
import { ContactButtonRow } from './ContactButtonRow';

interface IntroductionMainCardProps {
  className?: string;
}

export const IntroductionMainCard: React.FC<IntroductionMainCardProps> = ({
  className,
}) => {
  return (
    <Card className="flex h-fit w-10/12 flex-col gap-7">
      <p className="text-lg">
        Hi, I'm Maria, a web developer focused on React.js with a strong passion
        for Python.
      </p>
      {/* <div className="flex h-full w-full flex-col gap-2 text-black dark:text-white">
        <div className="text-md h-full w-full overflow-scroll lg:text-lg xl:text-lg">
          <div className="pb-3 pt-1 text-lg leading-relaxed">
            <span className="first-letter">Hi! I'm Maria,</span>
            <p>
              a frontend software developer based in Berlin. I bring four years
              of experience with React.js, building and refining interfaces in
              fintech and podcast analytics.
              <br />
              <br />
              In the photo gallery, you can see one of my key projects—a podcast
              marketing analytics platform I developed at Voxalyze. This was a
              rewarding challenge that pushed my skills to new heights.
              <br />
              <br />
              By clicking the button below, you can access my CV and get to know
              me better!
            </p>
          </div>
        </div> */}
      <ContactButtonRow />
    </Card>
  );
};
