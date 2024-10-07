import './App.css';
import { MoonIcon, SunIcon, ToggleButton } from './components';

const App = () => {
  return (
    <div className="bg-yellow-100 dark:bg-blue-950 min-h-screen w-screen relative grid ">
      <ToggleButton
        activeIcon={<SunIcon className="size-7" />}
        inactiveIcon={<MoonIcon className="size-7" />}
        className="absolute top-4 right-4 h-12 w-20"
        label="Toggle dark mode"
      />
      <div />
    </div>
  );
};

export default App;
