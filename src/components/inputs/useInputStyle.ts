export interface InputStyle {
  base: string;
  error: string;
  label: string;
  errorMessage: string;
  container: string;
  errorContainer: string;
}

const useInputStyle = (customStyle?: Partial<InputStyle>): InputStyle => {
  const defaultStyle: InputStyle = {
    container: 'flex flex-col gap-0.5 p-2',
    base: 'border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-purple text-gray-800',
    label:
      'block text-sm md:text-base xl:text-md flex gap-0.7 text-gray-700 dark:text-gray-200',
    error: 'border-red-500',
    errorMessage: 'text-red-500 text-xs sm:text-sm xl:text-md',
    errorContainer: 'h-2 flex flex-col items-start content-end',
  };

  return { ...defaultStyle, ...customStyle };
};

export default useInputStyle;
