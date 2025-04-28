import React from 'react';
import Styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import PetPlus from '../assets/Logo.svg?react';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleNavigateAndScroll = (sectionId) => {
    navigate('/'); // Primeiro volta para a Home
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Espera um pouquinho pra garantir que a Home carregou
  };

  return (
    <header className={Styles.header}>
      <a
        onClick={() => handleNavigateAndScroll('introduction')}
        className={Styles.logo}
      >
        <PetPlus />
      </a>
      <nav className={`${Styles.nav} container`}>
        <ul>
          <li>
            <a onClick={() => handleNavigateAndScroll('introduction')}>
              Início
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigateAndScroll('about')}>Sobre</a>
          </li>
          <li>
            <a onClick={() => handleNavigateAndScroll('features')}>Recursos</a>
          </li>
          <li>
            <a onClick={() => handleNavigateAndScroll('plans')}>Planos</a>
          </li>
          <li>
            <a onClick={() => handleNavigateAndScroll('faq')}>FAQ</a>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleLoginClick} className={Styles.btnLogin}>
        <span>Login/Criar</span>
      </button>
    </header>
  );
};

export default Header;
