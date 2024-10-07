import './App.css';
import { MoonIcon, SunIcon, ToggleButton } from './components';

const App = () => {
  return (
    <div className="bg-yellow-100 dark:bg-blue-950 min-h-screen w-screen flex flex-col justify-center items-center relative">
      <ToggleButton
        activeIcon={SunIcon}
        inactiveIcon={MoonIcon}
        className="absolute top-4 right-4"
        label="Toggle dark mode"
      />
      <div />
    </div>
  );
};

export default App;
