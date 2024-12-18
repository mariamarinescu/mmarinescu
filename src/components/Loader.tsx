import clsx from 'clsx';

export type ElementSizeType = 'sm' | 'base' | 'lg' | 'xl';

const SIZE_MAP: { [key in ElementSizeType]: string } = {
  sm: 'h-1 w-1',
  base: 'h-1.5 w-1.5',
  lg: 'h-2 w-2',
  xl: 'h-3 w-3',
};

interface PropTypes {
  size?: ElementSizeType;
  className?: string;
}

const Loader = ({ size = 'base', className = 'm-auto' }: PropTypes) => {
  const baseClassName = clsx(
    'bg-gray-900 dark:bg-gray-100',
    SIZE_MAP[size],
    'rounded-full'
  );

  return (
    <div className={clsx(className, 'm-auto flex h-fit w-fit')}>
      <div className={clsx(baseClassName, 'mr-1 animate-bounce')} />
      <div className={clsx(baseClassName, 'animate-bounce200 mr-1')} />
      <div className={clsx(baseClassName, 'animate-bounce400')} />
    </div>
  );
};

export default Loader;
