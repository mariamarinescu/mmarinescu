import clsx from 'clsx';
import { ThemeButton } from 'components/buttons';

export const TopNavBar: React.FC = () => (
  <div className="w-full">
    <div
      className={clsx(
        'flex w-screen flex-row items-center justify-end gap-1 bg-white',
        'main-padding h-8 border-b border-gray-dark dark:bg-gray-dark'
      )}
    >
      <ThemeButton />
    </div>
  </div>
);
