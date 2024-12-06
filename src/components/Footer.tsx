import clsx from 'clsx';
import React from 'react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={clsx(
        'border border-gray-dark bg-white text-center dark:bg-gray-dark',
        'h-auto w-full px-6 py-1 sm:h-10 md:px-9 xl:h-16'
      )}
    >
      <footer
        className={clsx(className, 'flex h-full items-center justify-center')}
      >
        <div className="mx-auto h-auto py-2">
          <p className="text-md text-gray-800 dark:text-gray-light-1 xl:text-2xl">
            &copy; {currentYear} Maria-Fontica Marinescu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
