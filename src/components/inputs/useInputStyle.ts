export interface InputStyle {
  base: string;
  error: string;
  label: string;
  errorMessage: string;
  container: string;
}

const useInputStyle = (customStyle?: Partial<InputStyle>): InputStyle => {
  const defaultStyle: InputStyle = {
    container: 'flex flex-col gap-0.5 p-2',
    base: 'border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-purple',
    error: 'border-red-500',
    label:
      'block text-sm sm:text-base md:text-md xl:text-lg text-gray-700 dark:text-gray-200',
    errorMessage: 'text-red-500 text-xs sm:text-sm xl:text-md',
  };

  return { ...defaultStyle, ...customStyle };
};

export default useInputStyle;
