import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Footer, TopNavBar } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <div
      className="flex flex-col justify-between bg-white dark:bg-theme-dark-bg"
      data-testid="app-module"
    >
      <header>
        <TopNavBar data-testid="top-nav-bar" />
      </header>
      <main>
        <Dashboard data-testid="dashboard" />
      </main>
      <footer>
        <Footer data-testid="footer" />
      </footer>
    </div>
  );
};
