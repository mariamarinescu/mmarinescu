import clsx from 'clsx';
import { useMemo } from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'text' | 'icon';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  download?: string;
  dataTooltipContent?: string | null | undefined;
  dataTooltipId?: string | undefined;
  icon?: React.ReactNode;
  label?: string;
  iconPosition?: 'left' | 'right';
}

const variantStyles = (disabled?: boolean) => ({
  primary: clsx(
    disabled
      ? 'border-gray-400 hover:border-gray-500 dark:hover:border-white hover:text-gray-400'
      : 'border-gray-800 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-theme-dark-bg hover:border-black text-black',
    'border bg-none'
  ),
  text: clsx(
    disabled ? 'text-gray-400' : 'custom-text-color',
    'bg-transparent custom-prose mx-auto'
  ),
  icon: 'flex items-center justify-center rounded-full hover:text-white dark:text-white',
});

const sizeStyles = {
  small: 'px-2 py-1 text-sm h-10 w-fit',
  medium: 'px-4 py-2 text-base h-12 w-fit',
  large: 'px-6 py-3 text-lg h-18 w-fit',
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
    const gapSize = size === 'small' ? 'gap-0.5' : 'gap-1';

    if (hasLabel && hasIcon) {
      return (
        <div className={clsx('flex items-center', gapSize)}>
          {iconPosition === 'left' && icon}
          <span className={variantStyles(disabled).text}>{label}</span>
          {iconPosition === 'right' && icon}
        </div>
      );
    }

    if (hasIcon) {
      return (
        <div className={clsx('flex items-center justify-start', gapSize)}>
          {icon}
        </div>
      );
    }

    if (hasLabel) {
      return <span className={variantStyles(disabled).text}>{label}</span>;
    }

    return children;
  }, [label, icon, children, iconPosition, size]);

  const buttonClassName = clsx(
    className,
    disabled && 'cursor-not-allowed opacity-50',
    variantStyles(disabled)[variant],
    sizeStyles[size],
    'text-center font-medium capitalize tracking-wide flex items-center',
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
        target="_blank"
      >
        {buttonContent}
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
      {buttonContent}
    </button>
  );
};
