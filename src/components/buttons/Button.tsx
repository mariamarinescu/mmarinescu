import clsx from 'clsx';
import { useMemo } from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'icon';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  download?: string;
  dataTooltipContent?: string | null | undefined;
  dataTooltipId?: string | undefined;
  icon?: React.ReactNode;
  label?: string;
  iconPosition?: 'left' | 'right';
}

const variantStyles = {
  primary:
    'border border-neon-purple bg-none text-black hover:bg-neon-purple hover:text-white dark:text-white dark:hover:text-white',
  secondary:
    'border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600',
  text: 'bg-transparent hover:underline text-blue-500 dark:text-blue-400',
  icon: 'flex h-10 w-10 items-center justify-center rounded-full border border-neon-purple hover:bg-neon-purple hover:text-white dark:text-white dark:hover:text-white',
};

const sizeStyles = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  disabled = false,
  className,
  children,
  variant = 'primary',
  size = 'medium',
  href,
  download,
  dataTooltipContent,
  dataTooltipId,
  icon,
  label,
  iconPosition = 'left',
}) => {
  const handleClick = useMemo(() => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    };
  }, [onClick]);

  const hasLabel = !!label;
  const hasIcon = !!icon;

  const buttonContent = useMemo(() => {
    const gapSize = size === 'small' ? 'gap-1' : 'gap-2';

    if (hasLabel && hasIcon) {
      return (
        <div className={clsx('flex items-center', gapSize)}>
          {iconPosition === 'left' && icon}
          <span>{label}</span>
          {iconPosition === 'right' && icon}
        </div>
      );
    }

    if (hasIcon) {
      return (
        <div className={clsx('flex items-center justify-center', gapSize)}>
          {icon}
        </div>
      );
    }

    if (hasLabel) {
      return <span>{label}</span>;
    }

    return children;
  }, [label, icon, children, iconPosition, size]);

  const buttonClassName = clsx(
    className,
    disabled && 'cursor-not-allowed opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    'text-center font-medium capitalize tracking-wide',
    'transform rounded-lg transition-colors duration-300 focus:outline-none'
  );

  if (href) {
    return (
      <a
        data-tooltip-content={dataTooltipContent}
        data-tooltip-id={dataTooltipId}
        href={href}
        download={download}
        className={buttonClassName}
      >
        <div className="flex w-fit items-center justify-center">
          {buttonContent}
        </div>
      </a>
    );
  }

  return (
    <button
      data-tooltip-content={dataTooltipContent}
      data-tooltip-id={dataTooltipId}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={buttonClassName}
    >
      <div className="flex w-fit items-center justify-center">
        {buttonContent}
      </div>
    </button>
  );
};
