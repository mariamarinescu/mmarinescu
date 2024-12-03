import clsx from 'clsx';

interface SimpleButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({
  type = 'button',
  onClick,
  disabled = false,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        className,
        disabled
          ? 'bg-white border text-black'
          : 'bg-none border border-neon-purple hover:bg-neon-purple text-black hover:text-white dark:text-white dark:hover:text-white',
        'flex items-center px-4 py-2 font-medium tracking-wide capitalize text-center justify-center',
        'transition-colors duration-300 transform rounded-lg focus:outline-none '
      )}
    >
      {children}
    </button>
  );
};
