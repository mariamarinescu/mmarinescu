import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
      <ToastContainer
        limit={3}
        closeButton
        autoClose={7000}
        position="bottom-right"
        theme="colored"
        bodyClassName="text-sm leading-tight"
      />
    </RecoilRoot>
  </StrictMode>
);
