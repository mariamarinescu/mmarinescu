import { Introduction } from './components';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center grow w-full justify-center bg-white dark:bg-dark-theme-bg">
      <Introduction />
    </div>
  );
};
