import { clsx } from 'clsx';
import { Card } from 'components/containers';
import { ResumeDownloadButton } from 'modules/app/components';
import { checkIsMobile } from 'src/utils';

export const Introduction = ({ className }: { className?: string }) => {
  const isMobile = checkIsMobile();
  return (
    <Card className={clsx(className)}>
      <Card.Body className="flex gap-4">
        <div className="flex flex-col text-start gap-3 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scroll-smooth dark:text-white">
          <h1>HI, I'm Maria!!</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <ResumeDownloadButton isMobile={isMobile} />
        {/* <BubbleComponent /> */}
      </Card.Body>
    </Card>
  );
};
