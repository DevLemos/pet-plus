import React from 'react';
import Styles from './Header.module.css';
import { Link } from 'react-router-dom';
import PetPlus from '../assets/Logo.svg?react';

const Header = () => {
  return (
    <header className={Styles.header}>
      <Link className={Styles.logo} to="/" aria-label="Pet+ - Home">
        <PetPlus />
      </Link>
      <nav className={`${Styles.nav} container`}>
        <ul>
          <li>
            <a href="#introduction">Início</a>
            {/* <Link to="/">Início</Link> */}
          </li>
          <li>
            <a href="#about">Sobre</a>
            {/* <Link to="/">Sobre</Link> */}
          </li>
          <li>
            <a href="#features">Recursos</a>
            {/* <Link to="/">Recursos</Link> */}
          </li>
          <li>
            <a href="#plans">Planos</a>
            {/* <Link to="/">Planos</Link> */}
          </li>
          <li>
            <a href="#faq">FAQ</a>
            {/* <Link to="/">FAQ</Link> */}
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </ul>
      </nav>
      <Link className={Styles.btnLogin} to="/Login">
        <span>Login/Criar</span>
      </Link>
    </header>
  );
};

export default Header;
