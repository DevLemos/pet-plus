import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicBodyStyle = () => {
  const location = useLocation();

  useEffect(() => {
    // Define uma classe no body baseada na rota
    document.body.className = ''; // Remove classes anteriores
    if (location.pathname === '/') {
      document.body.classList.add('home-style');
    } else if (
      location.pathname === '/login' ||
      location.pathname === '/Register'
    ) {
      document.body.classList.add('login-style');
    } else if (
      location.pathname === '/Dashboard' ||
      location.pathname === '/Dashboard/cadastro-funcionarios'
    ) {
      document.body.classList.add('dashboard-style');
    }
  }, [location]); // Executa sempre que a rota mudar

  return null; // Componente que só executa efeitos colaterais
};

export default DynamicBodyStyle;
