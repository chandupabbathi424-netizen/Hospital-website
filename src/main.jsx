import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

function PointerGlow() {
  useEffect(() => {
    const updatePointerPosition = event => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointerPosition, { passive: true });
    return () => window.removeEventListener('pointermove', updatePointerPosition);
  }, []);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PointerGlow />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);