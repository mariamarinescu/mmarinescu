import { AnimatePresence } from 'framer-motion';
import { AppModule } from './modules';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import './index.css';
import './tailwind.css';

const App = () => {
  return (
    <AnimatePresence>
      <RecoilRoot>
        <AppModule />
        <ToastContainer
          limit={3}
          closeButton
          autoClose={7000}
          position="bottom-right"
          theme="colored"
        />
      </RecoilRoot>
    </AnimatePresence>
  );
};

export default App;
