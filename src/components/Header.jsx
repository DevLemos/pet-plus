import React from 'react';
import Styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import PetPlus from '../assets/Logo.svg?react';
import { animate, createSpring } from 'animejs';

const Header = () => {
  const handleMouseEnter = () => {
    animate(root.current, {
      scale: [
        { to: 1.3, ease: 'inOut(2)', duration: 300 },
        { to: 1, ease: createSpring({ stiffness: 250 }) },
      ],
      rotate: [
        { to: 10, duration: 200, ease: 'easeInOutSine' },
        { to: -10, duration: 200, ease: 'easeInOutSine' },
        { to: 0, duration: 300, ease: createSpring({ stiffness: 200 }) },
      ],
      opacity: [
        { to: 0.8, duration: 300, ease: 'easeInOutQuad' },
        { to: 1, duration: 300, ease: 'easeInOutQuad' },
      ],
    });
  };
  const handleMouseLeave = () => {
    animate(root.current, {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 300,
      easing: 'easeOutQuad',
    });
  };

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
        ref={(el) => (root.current = el)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
