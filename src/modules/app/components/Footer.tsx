import clsx from 'clsx';
import React from 'react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        className,
        'bg-white dark:bg-th-darker-gray text-center w-full'
      )}
    >
      <div className="container mx-auto h-auto">
        <p className="text-xs text-gray-800 dark:text-th-medium-light-gray-1">
          &copy; {currentYear} Maria-Fontica Marinescu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
