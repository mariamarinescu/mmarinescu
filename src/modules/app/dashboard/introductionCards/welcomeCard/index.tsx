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
    >
      <p className="text-pretty font-mono text-lg text-black dark:text-white">
        Hi, I'm Maria, a web developer focused on React.js with a strong passion
        for Python.
      </p>
      <ContactButtonGroup />
    </Card>
  );
};
