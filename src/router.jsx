import { Route } from 'react-router-dom';
import App from './App';
import LoginSignup from './Components/LoginSignup/LoginSignup'; // Corrected path
import Contact from './Contact';

const router = [
    <>
      <Route path="/" element={<App />} key="app" />,
      <Route path="/login" element={<LoginSignup />} key="login" />,
      <Route path="/contact" element={<Contact />} key="contact" />
    </>
  ];
  
export default router;