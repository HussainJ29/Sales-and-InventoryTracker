import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this is correctly imported
import './index.css';    // Tailwind CSS import
import './style.css';  // Import the custom CSS



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
