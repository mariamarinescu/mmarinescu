import clsx from 'clsx';

interface CardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, title, children }) => {
  return (
    <div
      className={clsx(
        className,
        !!title && 'flex flex-col gap-4',
        'rounded-lg border border-gray-light-muted bg-white p-4 dark:bg-gray-light-muted xs:p-5 lg:p-8'
      )}
    >
      {title && (
        <p className="text-md prose font-serif text-black lg:prose-xl dark:text-white md:text-xl 2xl:text-xl">
          {title}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
