import './App.css';
import { DarkModeButton } from './components';

const App = () => {
  return (
    <div className="bg-yellow-100 dark:bg-blue-950 min-h-screen w-screen relative grid ">
      <DarkModeButton />
    </div>
  );
};

export default App;
