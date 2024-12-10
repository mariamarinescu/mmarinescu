import { clsx } from 'clsx';
import useInputStyle from './useInputStyle';

interface BaseLabel {
  id: string;
  className?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export const Label = ({
  id,
  className,
  required = false,
  children,
}: BaseLabel) => {
  const styles = useInputStyle();
  return (
    <label
      className={clsx(styles.label, className, 'custom-prose font-poppins')}
      htmlFor={id}
    >
      {children} {required && <span className="text-red-600">&nbsp;*</span>}
    </label>
  );
};
