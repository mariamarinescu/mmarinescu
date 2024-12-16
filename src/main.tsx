import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';

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
