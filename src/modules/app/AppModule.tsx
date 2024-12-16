import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Footer, TopNavBar } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <div className="bg-white dark:bg-theme-dark-bg">
      <header>
        <TopNavBar />
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
//
