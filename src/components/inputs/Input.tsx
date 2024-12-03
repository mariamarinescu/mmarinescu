import clsx from 'clsx';
import { forwardRef, useId } from 'react';
import { Label } from './Label';
import useInputStyle, { InputStyle } from './useInputStyle';

interface Props {
  label: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  placeholder?: string;
  required?: boolean;
  customStyle?: Partial<InputStyle>;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { label, error, placeholder, type, required, customStyle, ...props },
    ref
  ) => {
    const id = useId();
    const style = useInputStyle(customStyle);

    return (
      <div className={style.container}>
        <Label id={id} required={required}>
          {label}
        </Label>
        <input
          className={clsx(style.base, error && style.error)}
          type={type}
          placeholder={placeholder}
          id={id}
          ref={ref}
          {...props}
        />
        <div className={style.errorContainer}>
          {error && <span className={style.errorMessage}>{error}</span>}
        </div>
      </div>
    );
  }
);
