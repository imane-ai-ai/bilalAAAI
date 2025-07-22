import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Performance optimization: Use concurrent features
const root = createRoot(document.getElementById('root')!, {
  // Enable concurrent features for better performance
  identifierPrefix: 'skill-to-cash-'
});

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);