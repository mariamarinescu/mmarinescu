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
  activeBgColor = 'bg-green-600',
  inactiveBgColor = 'bg-white',
  size = 'small',
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
    <Switch checked={enabled} onChange={handleToggle} as={React.Fragment}>
      {({ checked }) => (
        <button
          role="switch"
          aria-checked={checked}
          aria-label={label}
          className={clsx(
            className,
            buttonBaseClasses,
            buttonStateClasses,
            buttonSizeClasses
          )}
        >
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
        </button>
      )}
    </Switch>
  );
};
