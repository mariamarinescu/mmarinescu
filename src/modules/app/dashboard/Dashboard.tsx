import { Introduction } from './Introduction';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center grow w-full justify-center bg-white dark:bg-theme-dark-bg">
      <Introduction />
    </div>
  );
};
