import { checkIsMobile } from 'src/utils';
import { Footer, TopBar } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  const isMobile = checkIsMobile();

  return (
    <main className="bg-red-900 flex flex-col content-between relative w-screen h-screen">
      <TopBar isMobile={isMobile} />
      <Dashboard />
      <Footer />
    </main>
  );
};
