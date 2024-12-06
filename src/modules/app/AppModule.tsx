import { Footer, TopNavBar } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  return (
    <>
      <header>
        <TopNavBar />
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
//
