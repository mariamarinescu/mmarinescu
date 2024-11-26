import { clsx } from 'clsx';
import { useId } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { Label } from './Label';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
  valid?: boolean;
  required?: boolean;
  disabled?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  register?: UseFormRegisterReturn;
  fieldError?: FieldError;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    label,
    type = 'text',
    error = false,
    required = false,
    disabled = false,
    valid = false,
    className = '',
    errorMessage = '',
    rounded = 'lg',
    register,
    ...rest
  } = props;

  const id = useId();

  const styles = {
    base: 'rounded-lg border border-1 flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 dark:text-white shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
    state: {
      normal: 'placeholder-gray-400 border-gray-300 focus:ring-purple-600',
      error: 'border-red-600 focus:ring-red-600',
      valid: 'border-green-600 focus:ring-green-600',
      disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400',
    },
    rounded: {
      none: null,
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
  };

  return (
    <div className={clsx('relative', className)}>
      {label && (
        <Label id={id}>
          {label} {required && '*'}
        </Label>
      )}
      <div className="flex w-full h-full flex-col gap-1">
        <input
          id={id}
          type={type}
          className={clsx([
            styles.base,
            rounded && styles.rounded[rounded],
            error ? styles.state.error : styles.state.normal,
            valid ? styles.state.valid : styles.state.normal,
            disabled && styles.state.disabled,
          ])}
          disabled={disabled}
          required={required}
          {...register}
          {...rest}
        />
        {error && <p className="text-xs text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
};
