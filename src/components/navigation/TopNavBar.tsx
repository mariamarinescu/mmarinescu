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
        'flex items-center gap-4 flex-row justify-end w-screen bg-white',
        'dark:bg-th-darker-gray h-8 sm:h-16 xl:h-20 px-6 md:px-9 py-8 border-th-darker-gray border'
      )}
    >
      {children}
    </div>
  );
};
