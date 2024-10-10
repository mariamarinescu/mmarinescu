import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

interface SizeClass {
  button: string;
  inner: string;
  translate: string; // Toggle effect transition classes
  iconSize: string;
}

interface SizeClasses {
  small: SizeClass;
  medium: SizeClass;
  large: SizeClass;
}

type Size = keyof SizeClasses;

interface ToggleButtonProps {
  initialEnabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string; // Accessibility label
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  className?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
  size?: Size;
}

const sizeClasses: SizeClasses = {
  small: {
    button: 'h-7 w-[54px]',
    inner: 'h-5 w-5',
    translate: 'translate-x-6',
    iconSize: 'w-3 h-3',
  },
  medium: {
    button: 'h-[40px] w-[72px]',
    inner: 'h-7 w-7',
    translate: 'translate-x-8',
    iconSize: 'w-4 h-4',
  },
  large: {
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
  activeBgColor = 'bg-gray-900',
  inactiveBgColor = 'bg-gray-200',
  size = 'medium',
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
          className: currentSizeClasses.iconSize,
        })
      : null;
  };

  const buttonBaseClasses =
    'group inline-flex items-center rounded-full p-1 transition-colors duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200';

  const buttonStateClasses = enabled ? activeBgColor : inactiveBgColor;
  const buttonSizeClasses = currentSizeClasses.button;

  return (
    <Switch checked={enabled} onChange={handleToggle} as={React.Fragment}>
      {({ checked }) => (
        <button
          role="switch"
          aria-checked={checked}
          className={clsx(
            className,
            buttonBaseClasses,
            buttonStateClasses,
            buttonSizeClasses
          )}
          aria-label={label} // Accessibility label
        >
          <span className="sr-only">{label}</span>
          <span
            className={clsx(
              'flex items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out',
              checked ? currentSizeClasses.translate : 'translate-x-1',
              currentSizeClasses.inner
            )}
          >
            {renderIcon(checked)}
          </span>
        </button>
      )}
    </Switch>
  );
};
