import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

interface SizeClass {
  button: string;
  inner: string;
  translate: string;
}

interface SizeClasses {
  sm: SizeClass;
  md: SizeClass;
}

type Size = keyof SizeClasses;

interface ToggleButtonProps {
  initialEnabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  className?: string;
  size?: Size;
}

const sizeClasses: SizeClasses = {
  sm: {
    button: 'h-7 w-[54px]',
    inner: 'h-5 w-5',
    translate: 'translate-x-6',
  },
  md: {
    button: 'h-[38px] lg:h-[46px] w-[72px]',
    inner: 'h-7 w-7',
    translate: 'translate-x-7',
  },
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialEnabled = false,
  onChange,
  label,
  activeIcon,
  inactiveIcon,
  className,
  size = 'sm',
}) => {
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleToggle = () => {
    const newEnabledState = !enabled;
    setEnabled(newEnabledState);
    onChange?.(newEnabledState);
  };

  const currentSizeClasses = sizeClasses[size];

  const renderIcon = (isActive: boolean) => {
    const icon = isActive ? activeIcon : inactiveIcon;

    return icon
      ? React.cloneElement(icon as React.ReactElement, {
          className: clsx(
            'transition-all duration-300 ease-in-out',
            'flex items-center justify-center w-full h-full',
            'group-hover:scale-110 group-hover:rotate-6',
            !isActive
              ? 'text-white dark:group-hover:text-yellow-500 dark:text-white'
              : 'text-black dark:text-white group-hover:text-[#F6F1D5] '
          ),
        })
      : null;
  };

  const buttonBaseClasses = clsx(
    'group relative inline-flex items-center rounded-full p-1',
    'transition-all duration-300 ease-in-out',
    'overflow-hidden',
    'hover:border-opacity-75 border border-black dark:border-white',
    'group-hover:border-opacity-100 '
  );

  const trackClasses = clsx(
    'absolute inset-0 rounded-full',
    'transition-all duration-300 ease-in-out',
    'group-hover:opacity-90 group-hover:bg-theme-dark-bg dark:group-hover:bg-white'
  );

  const thumbBaseClasses = clsx(
    'absolute top-1/2 -translate-y-1/2',
    'transition-all duration-300 ease-in-out',
    'flex items-center justify-center',
    'group-hover:scale-105'
  );

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={clsx(
        className,
        buttonBaseClasses,
        currentSizeClasses.button,
        'relative'
      )}
      data-testid="toggle-button"
    >
      {({ checked }) => (
        <>
          <span className="sr-only">{label}</span>
          <span className={trackClasses} data-testid="toggle-track" />

          <span
            className={clsx(
              thumbBaseClasses,
              currentSizeClasses.inner,
              checked ? `${currentSizeClasses.translate}` : 'translate-x-2'
            )}
            data-testid="toggle-thumb"
          >
            {renderIcon(checked) || (
              <span className="mx-auto flex items-center justify-center rounded-full bg-white" />
            )}
          </span>
        </>
      )}
    </Switch>
  );
};
