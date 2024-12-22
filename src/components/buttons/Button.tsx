import clsx from 'clsx';
import Loader from 'components/Loader';
import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { useMemo } from 'react';
import ReactGA from 'react-ga4';
import { checkIsMobile } from 'src/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  ariaLabel?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'text' | 'icon';
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
    disabled ? 'text-gray-400' : 'text-black dark:text-white',
    'bg-transparent custom-prose mx-auto'
  ),
  icon: 'flex items-center justify-center rounded-full hover:text-white dark:text-white',
});

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  disabled = false,
  isLoading = false,
  className,
  children,
  variant = 'primary',
  href,
  download,
  dataTooltipContent,
  dataTooltipId,
  id,
  icon,
  label,
  iconPosition = 'left',
  ariaLabel,
  ...rest
}) => {
  const isMobile = checkIsMobile(768);
  const handleClick = useMemo(() => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    };
  }, [onClick]);

  const hasLabel = !!label;
  const hasIcon = !!icon;
  const tooltipId =
    dataTooltipId || `myButton-${Math.floor(Math.random() * 4)}`;

  const buttonContent = useMemo(() => {
    const labelContent = (
      <span
        className={clsx(
          variantStyles(disabled).text,
          hasIcon ? 'hidden md:inline-flex' : 'inline-flex'
        )}
        data-testid={`button-label-${id || tooltipId}`}
      >
        {label}
      </span>
    );

    if (hasLabel && hasIcon) {
      return (
        <div
          className="flex items-center gap-1"
          data-testid={`button-content-${id || tooltipId}`}
        >
          {iconPosition === 'left' && icon}
          {labelContent}
          {iconPosition === 'right' && icon}
        </div>
      );
    }

    if (hasIcon) {
      return (
        <div
          className="flex items-center justify-start"
          data-testid={`button-icon-${id || tooltipId}`}
        >
          {icon}
        </div>
      );
    }

    if (hasLabel) {
      return (
        <span
          className={clsx(
            variantStyles(disabled).text,
            hasIcon ? 'hidden md:inline-flex' : 'inline-flex'
          )}
          data-testid={`button-label-${id || tooltipId}`}
        >
          {label}
        </span>
      );
    }

    return children;
  }, [label, icon, children, iconPosition]);

  const buttonClassName = clsx(
    className,
    disabled && 'cursor-not-allowed opacity-50',
    variantStyles(disabled)[variant],
    'px-2 md:px-4 text-base h-11 w-fit',
    'text-center font-medium capitalize tracking-wide flex items-center font-poppins',
    'transform rounded-lg transition-colors duration-300 focus:outline-none'
  );

  const getTooltipContent = (isMobile: boolean) => {
    if (isMobile) return dataTooltipContent || label;
    return dataTooltipContent;
  };

  const tooltipContent = getTooltipContent(isMobile);

  if (href) {
    return (
      <>
        <a
          data-tooltip-content={tooltipContent}
          data-tooltip-id={tooltipId}
          href={href}
          id={id}
          download={download}
          className={buttonClassName}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'User',
              action: 'Submitted form',
            });
          }}
          data-testid={`button-link-${id || tooltipId}`}
        >
          {isLoading ? (
            <Loader data-testid={`button-loader-${id || tooltipId}`} />
          ) : (
            buttonContent
          )}
        </a>
        <ThemeAwareTooltip id={tooltipId} place="bottom" />
      </>
    );
  }

  return (
    <>
      <button
        data-tooltip-content={tooltipContent}
        data-tooltip-id={dataTooltipId}
        onClick={handleClick}
        type={type}
        id={id}
        disabled={disabled}
        className={buttonClassName}
        data-testid={`button-element-${id || tooltipId}`}
        aria-label=""
        {...rest}
      >
        {isLoading ? (
          <Loader data-testid={`button-loader-${id || tooltipId}`} />
        ) : (
          buttonContent
        )}
      </button>
      <ThemeAwareTooltip id={tooltipId} place="bottom" />
    </>
  );
};
