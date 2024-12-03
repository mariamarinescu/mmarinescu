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
        'bg-white dark:bg-gray-dark border-gray-dark border text-center w-full h-auto',
        'sm:h-10 xl:h-16 bottom-0'
      )}
    >
      <footer
        className={clsx(className, 'flex items-center justify-center h-full')}
      >
        <div className="mx-auto h-auto py-2">
          <p className="text-md xl:text-2xl text-gray-800 dark:text-gray-light-1">
            &copy; {currentYear} Maria-Fontica Marinescu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
