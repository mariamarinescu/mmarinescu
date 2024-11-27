import { checkIsMobile } from 'src/utils';
import { Footer, TopBar } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  const isMobile = checkIsMobile();

  return (
    <main className="flex flex-col content-between w-screen h-screen">
      <div className="flex items-center gap-4 flex-row justify-end w-screen bg-white dark:bg-th-darker-gray h-8 sm:h-16 xl:h-20 px-6 md:px-9 py-8 border-th-darker-gray border">
        <TopBar isMobile={isMobile} />
      </div>
      <div className="flex items-center grow w-full justify-center bg-white dark:bg-[#121212]">
        <Dashboard />
      </div>
      <div className="bg-white dark:bg-th-darker-gray border-th-darker-gray border text-center w-full h-auto sm:h-10 xl:h-16 bottom-0">
        <Footer />
      </div>
    </main>
  );
};
//
