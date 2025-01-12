import clsx from 'clsx';
import { ThemeButton } from 'components/buttons';
import React, { JSX } from 'react';

/**
 * TopNavBar component
 *
 * This component represents the top navigation bar of the application.
 * It includes a theme toggle button and is styled to be responsive and accessible.
 *
 * @returns {JSX.Element} The rendered TopNavBar component.
 */
const TopNavBar: React.FC = (): JSX.Element => (
  <nav
    data-testid="top-nav-bar"
    className={clsx(
      'flex w-full flex-row items-center justify-end gap-1 bg-white',
      'main-padding h-8 border-b border-gray-dark dark:bg-gray-dark'
    )}
    role="navigation"
    aria-label="Top Navigation Bar"
  >
    {/* Theme Toggle Button */}
    <ThemeButton />
  </nav>
);

export default React.memo(TopNavBar);
