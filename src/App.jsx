import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import DynamicBodyStyle from './components/DynamicBodyStyle';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';

function AppContent() {
  const location = useLocation();

  // Rotas onde não deve aparecer Header/Footer
  const hideHeaderFooter = ['/login', '/Register', '/Dashboard'];

  // Verifica se a rota atual está na lista de ocultação
  const shouldHideHeaderFooter = hideHeaderFooter.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contato" element={<Contact />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <DynamicBodyStyle />
      <AppContent />
    </Router>
  );
}

export default App;
