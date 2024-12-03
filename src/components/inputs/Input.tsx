// import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

// interface Props<T extends FieldValues> {
//   label: string;
//   name: keyof T;
//   type?: 'text' | 'email' | 'password';
//   register: UseFormRegister<T>;
//   error?: string;
//   placeholder?: string;
// }

// const FormField = <T extends FieldValues>({
//   label,
//   name,
//   type = 'text',
//   register,
//   error,
// }: Props<T>) => {
//   const nameStr = name as string;
//   return (
//     <div className="flex flex-col gap-4 border p-2">
//       <label className="font-bold" htmlFor={nameStr}>
//         {label}
//       </label>
//       <input type={type} id={nameStr} {...register(name as Path<T>)} />
//       {error && <span className="text-red-500">{error}</span>}
//     </div>
//   );
// };

// export default FormField;

import { forwardRef, useId } from 'react';

interface Props {
  label: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, placeholder, type, ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col gap-4 border p-2">
        <label className="font-bold" id={id}>
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);
