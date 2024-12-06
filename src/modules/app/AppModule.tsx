import { Footer } from 'components/Footer';
import { TopNavBar } from 'components/navigation';
import { TopNavBarContent } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  return (
    <>
      <header>
        <TopNavBar>
          <TopNavBarContent />
        </TopNavBar>
      </header>
      <main>
        <Dashboard />
      </main>
      <Footer className="footer" />
    </>
  );
};
//
