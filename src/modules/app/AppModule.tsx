import { Footer } from 'components/Footer';
import { TopNavBar } from 'components/navigation';
import { TopNavBarContent } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  return (
    <main className="flex flex-col content-between w-screen h-screen">
      <TopNavBar>
        <TopNavBarContent />
      </TopNavBar>
      <Dashboard />
      <Footer />
    </main>
  );
};
//
