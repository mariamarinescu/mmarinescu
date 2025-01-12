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
      className="flex h-full flex-col justify-between bg-white dark:bg-theme-dark-bg"
      data-testid="app-module"
    >
      {/* Top Navigation Bar */}
      <header role="banner">
        <TopNavBar data-testid="top-nav-bar" />
      </header>

      {/* Main Content */}
      <main role="main" className="flex-grow">
        <Dashboard data-testid="dashboard" />
      </main>

      {/* Footer */}
      <footer role="contentinfo">
        <Footer data-testid="footer" />
      </footer>
    </div>
  );
};
