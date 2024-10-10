import { DarkModeButton, Footer } from './components';

export const AppModule = () => {
  return (
    <div className="bg-yellow-100 dark:bg-blue-950 min-h-screen w-screen relative flex flex-col ">
      <DarkModeButton />
      <div className="flex-grow" />
      <Footer className="my-4" />
    </div>
  );
};
