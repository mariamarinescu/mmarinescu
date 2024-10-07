import { Button } from '@headlessui/react';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '../icons';

export const DarkModeButton = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };
  return (
    <Button
      onClick={() => darkModeHandler()}
      className="absolute top-4 right-4 p-5 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
