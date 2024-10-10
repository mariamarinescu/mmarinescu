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
        'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 h-auto text-center w-full border-t dark:border-gray-700'
      )}
    >
      <div className="container mx-auto py-2 h-auto">
        <p className="text-sm">
          &copy; {currentYear} Maria-Fontica Marinescu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
