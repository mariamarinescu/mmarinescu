import clsx from 'clsx';
import { ThemeButton } from 'components/buttons';

export const TopNavBar: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex w-screen flex-row items-center justify-end gap-4 bg-white',
        'main-padding h-8 border-b border-gray-dark dark:bg-gray-dark sm:h-16 xl:h-20'
      )}
    >
      <ThemeButton />
    </div>
  );
};
