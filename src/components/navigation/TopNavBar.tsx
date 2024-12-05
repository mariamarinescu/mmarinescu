import clsx from 'clsx';

interface TopNavBarProps {
  children?: React.ReactNode;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  children,
}: TopNavBarProps) => {
  return (
    <div
      className={clsx(
        'flex w-screen flex-row items-center justify-end gap-4 bg-white',
        'main-padding h-8 border border-gray-dark dark:bg-gray-dark sm:h-16 xl:h-20'
      )}
    >
      {children}
    </div>
  );
};
