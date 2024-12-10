import { Footer, TopNavBar } from './components';
import { Dashboard } from './dashboard/Dashboard';

export const AppModule = () => {
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
