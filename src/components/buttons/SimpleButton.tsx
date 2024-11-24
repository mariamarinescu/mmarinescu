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
          : 'bg-blue-600 hover:bg-blue-500 ',
        'flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize text-center',
        'justify-center',
        'transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
      )}
    >
      {children}
    </button>
  );
};
