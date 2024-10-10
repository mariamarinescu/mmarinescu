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

interface FooterProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<HeaderProps> & {
    Title: React.FC<HeaderTitleProps>;
  };
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
} = ({ className, children }) => {
  return (
    <div
      className={clsx('overflow-hidden bg-white rounded-lg shadow', className)}
    >
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'px-4 py-5 bg-white border-b border-gray-200 sm:px-6',
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
      className={clsx('text-lg font-medium leading-6 text-gray-900', className)}
    >
      {children}
    </Tag>
  );
};

const Body: React.FC<BodyProps> = ({ className, children }) => {
  return <div className={clsx('px-4 py-5 sm:p-6', className)}>{children}</div>;
};

const Footer: React.FC<FooterProps> = ({ className, children }) => {
  return (
    <div className={clsx('bg-white border-t border-gray-200', className)}>
      {children}
    </div>
  );
};

// Assign the sub-components to Card
Card.Header = HeaderWithTitle;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
