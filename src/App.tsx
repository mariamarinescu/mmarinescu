import { AnimatePresence } from 'framer-motion';
import { AppModule } from './modules';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './tailwind.css';

const App = () => {
  return (
    <AnimatePresence>
      <AppModule />
    </AnimatePresence>
  );
};

export default App;
