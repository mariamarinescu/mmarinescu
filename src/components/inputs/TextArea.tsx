import clsx from 'clsx';
import { forwardRef, useId } from 'react';
import { Label } from './Label';
import useInputStyle, { InputStyle } from './useInputStyle';

interface Props {
  label?: string;
  placeholder?: string;
  error?: string;
  maxLength?: number;
  rows?: number;
  required?: boolean;
  customStyle?: Partial<InputStyle>;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      label,
      error,
      placeholder,
      maxLength,
      rows,
      required,
      customStyle,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const style = useInputStyle(customStyle);

    return (
      <div className={style.container}>
        {label && (
          <Label id={id} required={required}>
            {label}
          </Label>
        )}
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
          className={clsx(style.base, error && style.error)}
          {...props}
        />
        <div className={style.errorContainer}>
          {error && <span className={style.errorMessage}>{error}</span>}
        </div>
      </div>
    );
  }
);
