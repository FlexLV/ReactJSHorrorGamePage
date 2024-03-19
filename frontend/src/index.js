import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './router.jsx'; // Import your router component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RouterComponent />
    </Router>
  </React.StrictMode>
);