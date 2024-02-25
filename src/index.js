import { StrictMode } from 'react';
import { createRoot } from 'react-dom'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Use root.render instead of ReactDOM.render
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
