import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import router from './router'; // Your router file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {router}
            </Routes>
        </Router>
    </React.StrictMode>
);