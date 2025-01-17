import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.tsx';

/**
 * Initializes Google Analytics with the measurement ID from environment variables.
 */
ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
