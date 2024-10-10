import { clsx } from 'clsx';

interface BaseLabel {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export const Label = ({ id, className, children }: BaseLabel) => {
  return (
    <label
      className={clsx(
        'block text-base font-medium text-gray-500 mb-1 text-start',
        className
      )}
      htmlFor={id}
    >
      {children}
    </label>
  );
};
