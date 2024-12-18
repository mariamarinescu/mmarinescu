import clsx from 'clsx';
import { ThemeButton } from 'components/buttons';

export const TopNavBar: React.FC = () => (
  <div
    data-testid="top-nav-bar"
    className={clsx(
      'flex w-full flex-row items-center justify-end gap-1 bg-white',
      'main-padding h-8 border-b border-gray-dark dark:bg-gray-dark'
    )}
  >
    <ThemeButton />
  </div>
);
