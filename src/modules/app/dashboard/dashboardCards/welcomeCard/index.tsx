import { clsx } from 'clsx';
import { Card } from 'components/containers';
import { ContactButtonGroup } from './ContactButtonGroup';

interface WelcomeCardProps {
  className?: string;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ className }) => {
  return (
    <Card
      className={clsx(
        'flex h-full w-full flex-col items-start justify-start gap-4',
        className
      )}
      title="Welcome!"
    >
      <p className="custom-prose main-text-size text-pretty font-serif text-lg text-black dark:text-white">
        I'm Maria, a React.js developer with experience in fintech and podcast
        analytics, currently based in Berlin.
      </p>
      <ContactButtonGroup />
    </Card>
  );
};
