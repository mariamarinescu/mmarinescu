import { Button } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '../icons';

export const DarkModeButton = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    return !dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  };

  return (
    <Button
      className="absolute top-4 right-4 w-16 h-8 flex items-center cursor-pointer"
      onClick={darkModeHandler}
    >
      {/* Toggle switch background*/}
      <div
        className={clsx(
          'absolute w-full h-full rounded-full transition-colors duration-300',
          !dark ? 'bg-gray-800' : 'bg-gray-200'
        )}
      />

      {/* Toggle button */}
      <div
        className={clsx(
          'absolute w-8 h-8 rounded-full shadow-md transition-transform duration-300',
          !dark ? 'translate-x-8 bg-gray-600' : 'bg-white'
        )}
      >
        {dark ? (
          <SunIcon className="text-black w-5 h-5 absolute top-1.5 left-1.5" />
        ) : (
          <MoonIcon className="text-white w-5 h-5 absolute top-1.5 left-1.5" />
        )}
      </div>
    </Button>
  );
};
