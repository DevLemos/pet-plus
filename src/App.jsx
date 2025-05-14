// import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import DynamicBodyStyle from './components/DynamicBodyStyle';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import CompanyHistory from './pages/Home/CompanyHistory';
import TermsAndConditions from './pages/Home/TermsAndConditions';
import Contact from './pages/Home/Contact';

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
        <Route path="/ConhecaNos" element={<CompanyHistory />} />
        <Route path="/TermosCondicoes" element={<TermsAndConditions />} />
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
