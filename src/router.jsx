import { Route, Routes } from 'react-router-dom';
import App from './App';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Contact from './Contact';
import NotFoundPage from './NotFoundPage'; // Import your 404 component

const RouterComponent = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<LoginSignup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/404pagenotfound" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
  </Routes>
);

export default RouterComponent;