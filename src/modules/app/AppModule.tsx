import { Footer } from 'components/Footer';
import { TopNavBar } from 'components/navigation';
import { TopNavBarContent } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  return (
    <main className="flex h-screen w-screen flex-col content-between">
      <TopNavBar>
        <TopNavBarContent />
      </TopNavBar>
      <Dashboard />
      <Footer />
    </main>
  );
};
//
