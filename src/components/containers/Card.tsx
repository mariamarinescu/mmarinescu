import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

interface HeaderProps {
  className?: string;
  children: ReactNode;
}

interface HeaderTitleProps {
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allow any HTML tag
  children: ReactNode;
}

interface BodyProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<HeaderProps> & {
    Title: React.FC<HeaderTitleProps>;
  };
  Body: React.FC<BodyProps>;
} = ({ className, children }: CardProps) => {
  return (
    <div
      className={clsx(
        'group overflow-scroll border border-gray-300 rounded-md transition-colors',
        'hover:border-green-400 dark:hover:border-none dark:border-none dark:bg-black dark:hover:bg-black',
        className
      )}
    >
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'h-9 max-h-12 px-4 py-2 flex items-center justify-start border-b border-gray-300 text-gray-900 dark:text-white transition-colors',
        'group-hover:border-green-400 dark:hover:border-none dark:border-none dark:bg-th-lighter-gray',
        className
      )}
    >
      {children}
    </div>
  );
};

const HeaderWithTitle = Header as React.FC<HeaderProps> & {
  Title: React.FC<HeaderTitleProps>;
};

HeaderWithTitle.Title = ({ className, as = 'h3', children }) => {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        'text-xs font-xs leading-6 text-th-medium-light-gray-3 dark:text-th-medium-light-gray-2',
        className
      )}
    >
      {children}
    </Tag>
  );
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className="px-4 py-5 sm:p-6 border-none max-h-inherit">{children}</div>
  );
};

Card.Header = HeaderWithTitle;
Card.Body = Body;

export default Card;
