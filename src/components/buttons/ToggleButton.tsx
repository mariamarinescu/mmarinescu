import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

interface SizeClass {
  button: string;
  inner: string;
  translate: string;
  iconSize: string;
}

interface SizeClasses {
  xs: SizeClass;
  sm: SizeClass;
  md: SizeClass;
  lg: SizeClass;
}

type Size = keyof SizeClasses;

interface ToggleButtonProps {
  initialEnabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  className?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
  size?: Size;
}

const sizeClasses: SizeClasses = {
  xs: {
    button: 'h-4 w-[54px]',
    inner: 'h-5 w-5',
    translate: 'translate-x-6',
    iconSize: 'w-3 h-3',
  },
  sm: {
    button: 'h-7 w-[54px]',
    inner: 'h-5 w-5',
    translate: 'translate-x-6',
    iconSize: 'w-3 h-3',
  },
  md: {
    button: 'h-[40px] w-[72px]',
    inner: 'h-7 w-7',
    translate: 'translate-x-7',
    iconSize: 'w-4 h-4',
  },
  lg: {
    button: 'h-10 w-[88px]',
    inner: 'h-9 w-9',
    translate: 'translate-x-10',
    iconSize: 'w-5 h-5',
  },
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialEnabled = false,
  onChange,
  label,
  activeIcon,
  inactiveIcon,
  className,
  activeBgColor = 'bg-green-600',
  inactiveBgColor = 'bg-white',
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
          className: clsx('transition-colors duration-200', {
            'text-white group-hover:text-yellow-500': isActive,
            'text-black group-hover:text-gray-100': !isActive,
          }),
        })
      : null;
  };

  const buttonBaseClasses =
    'group inline-flex items-center rounded-full p-1 transition-colors duration-700 ease-in-out';

  const buttonStateClasses = enabled ? activeBgColor : inactiveBgColor;
  const buttonSizeClasses = currentSizeClasses.button;

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={clsx(
        className,
        buttonBaseClasses,
        buttonStateClasses,
        buttonSizeClasses
      )}
    >
      {({ checked }) => (
        <>
          <span className="sr-only">{label}</span>
          <span
            className={clsx(
              'flex items-center justify-center rounded-full bg-transparent transition-transform duration-300 ease-in-out',
              checked ? currentSizeClasses.translate : 'translate-x-2',
              currentSizeClasses.inner
            )}
          >
            {renderIcon(checked) === null ? (
              <span className="flex items-center justify-center rounded-full bg-white" />
            ) : (
              renderIcon(checked)
            )}
          </span>
        </>
      )}
    </Switch>
  );
};
