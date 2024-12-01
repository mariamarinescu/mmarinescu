import { clsx } from 'clsx';
import { Footer } from 'components/Footer';
import { TopBar } from 'components/navigation';
import { checkIsMobile } from 'src/utils';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  const isMobile = checkIsMobile();

  return (
    <main className="flex flex-col content-between w-screen h-screen">
      <div
        className={clsx(
          'flex items-center gap-4 flex-row justify-end w-screen bg-white',
          'dark:bg-th-darker-gray h-8 sm:h-16 xl:h-20 px-6 md:px-9 py-8 border-th-darker-gray border'
        )}
      >
        <TopBar isMobile={isMobile} />
      </div>
      <div className="flex items-center grow w-full justify-center bg-white dark:bg-dark-theme-bg">
        <Dashboard />
      </div>
      <div
        className={clsx(
          'bg-white dark:bg-th-darker-gray border-th-darker-gray border text-center w-full h-auto',
          'sm:h-10 xl:h-16 bottom-0'
        )}
      >
        <Footer />
      </div>
    </main>
  );
};
//
