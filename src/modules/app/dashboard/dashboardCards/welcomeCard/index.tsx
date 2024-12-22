import { clsx } from 'clsx';
import { Card } from 'components/containers';

interface WelcomeCardProps {
  className?: string;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ className }) => {
  return (
    <Card
      className={clsx(
        'flex h-full w-full min-w-fit flex-col items-start justify-start gap-4',
        className
      )}
      title="Welcome!"
      data-testid="welcome-card"
    >
      <p
        className="content-text-color prose-base text-pretty font-sans md:prose-lg lg:prose-xl"
        data-testid="welcome-message"
      >
        I'm Maria, a React.js developer with experience in fintech and podcast
        analytics.
      </p>
    </Card>
  );
};
