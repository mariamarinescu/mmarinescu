import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

interface ToggleButtonProps {
  initialEnabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string; // Accessibility label
  activeIcon?: JSX.Element;
  inactiveIcon?: JSX.Element;
  className?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = (
  props: ToggleButtonProps
) => {
  const {
    initialEnabled = false,
    onChange,
    label,
    activeIcon: ActiveIcon,
    inactiveIcon: InactiveIcon,
    className,
    activeBgColor = 'bg-blue-600',
    inactiveBgColor = 'bg-gray-200',
  } = props;

  const [enabled, setEnabled] = useState(initialEnabled);

  const handleToggle = () => {
    const newEnabledState = !enabled;
    setEnabled(newEnabledState);
    if (onChange) onChange(newEnabledState);
  };

  return (
    <Switch checked={enabled} onChange={handleToggle} as={React.Fragment}>
      {({ checked }) => (
        <button
          className={clsx(
            'group inline-flex h-8 w-16 items-center rounded-full p-1 cursor-pointer',
            className,
            checked ? activeBgColor : inactiveBgColor
          )}
          aria-label={label} // Add accessibility label
        >
          <span className="sr-only">{label}</span>
          <span
            className={clsx(
              'h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out',
              checked ? 'translate-x-8' : 'translate-x-0'
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {checked && ActiveIcon
                ? ActiveIcon
                : !checked && InactiveIcon
                  ? InactiveIcon
                  : null}
            </div>
          </span>
        </button>
      )}
    </Switch>
  );
};
