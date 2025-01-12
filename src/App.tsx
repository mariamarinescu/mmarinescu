import { AnimatePresence } from 'framer-motion';
import { AppModule } from './modules';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './tailwind.css';

const App = () => {
  return (
    <AnimatePresence>
      <AppModule />
      <ToastContainer
        limit={3}
        closeButton
        autoClose={7000}
        position="bottom-right"
        theme="colored"
        // bodyClassName="text-sm leading-tight"
      />
    </AnimatePresence>
  );
};

export default App;
