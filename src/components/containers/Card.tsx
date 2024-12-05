import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        'rounded-lg border border-gray-light-muted bg-white p-4 dark:bg-gray-light-muted lg:p-8'
      )}
    >
      {children}
    </div>
  );
};

export default Card;
