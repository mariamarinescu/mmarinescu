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
    container: 'flex flex-col gap-0.5 mb-1',
    base: 'border border-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-purple  bg-white dark:bg-theme-dark-bg dark:border-gray-300',
    label:
      'block text-sm md:text-base lg:text-lg flex gap-0.7 text-gray-700 dark:text-white',
    error: 'border-red-500',
    errorMessage: 'text-red-500 text-xs sm:text-sm xl:text-md',
    errorContainer: 'h-2 flex flex-col items-start content-end',
  };

  return { ...defaultStyle, ...customStyle };
};

export default useInputStyle;
