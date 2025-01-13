import { JSX, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Footer } from './components';
import TopNavBar from './components/TopNavBar';
import { Dashboard } from './dashboard/Dashboard';

/**
 * AppModule component
 *
 * This component serves as the main module of the application, setting up the
 * top navigation bar, dashboard, and footer. It also sends a pageview event
 * to Google Analytics on mount.
 *
 * @returns {JSX.Element} The rendered AppModule component.
 */
export const AppModule = (): JSX.Element => {
  useEffect(() => {
    // Send a pageview event to Google Analytics
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col justify-between bg-white dark:bg-theme-dark-bg"
      data-testid="app-module"
    >
      <header role="banner">
        <TopNavBar data-testid="top-nav-bar" />
      </header>

      <main role="main" className="flex-grow">
        <Dashboard data-testid="dashboard" />
      </main>

      <footer role="contentinfo">
        <Footer data-testid="footer" />
      </footer>
    </div>
  );
};
