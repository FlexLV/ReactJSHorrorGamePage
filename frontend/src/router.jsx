import { Route, Routes } from 'react-router-dom';
import App from './App';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Contact from './Contact';
import NotFoundPage from './NotFoundPage'; // Import your 404 component
import Donwload from "./Donwload"
import Forum from "./Forum"
import TermsAndConditions from './TermsAndConditions';

const RouterComponent = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<LoginSignup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/404pagenotfound" element={<NotFoundPage />} />
    <Route path="/download" element={<Donwload />} />
    <Route path="/forum" element={<Forum />} />
    <Route path="/termsandconditions" element={<TermsAndConditions  />} />
    <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
  </Routes>
);

export default RouterComponent;