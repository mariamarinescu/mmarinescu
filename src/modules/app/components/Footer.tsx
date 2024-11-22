import clsx from 'clsx';
import React from 'react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(className, 'flex items-center justify-center h-full')}
    >
      <div className="mx-auto h-auto">
        <p className="text-[8px] text-xs md:text-md xl:text-xl text-gray-800 dark:text-th-medium-light-gray-1">
          &copy; {currentYear} Maria-Fontica Marinescu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
