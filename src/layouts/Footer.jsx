import React from 'react';
import Styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import PetPlus from '../assets/LogoFooter.svg?react';
import SocialMedia from '../components/SocialMedia';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sessionNavigation = (section) => {
    if (location.pathname !== '/') {
      localStorage.setItem('scrollTo', section);
      navigate('/');
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -70,
      });
    }
  };

  return (
    <footer className={Styles.footer}>
      <div className={Styles['footer-content']}>
        <PetPlus />
        <div className={Styles['contact-content']}>
          <h3>Contato</h3>
          <div className={Styles['contacts']}>
            <div className={Styles['contact-01']}>
              <p>+55 11 XXXX-XXXX</p>
              <p>contato.sp@logo.com</p>
              <hr></hr>
              <p>Rua Carpina, 125 - Jardim Dutra</p>
              <p>São Paulo - SP</p>
              <hr></hr>
            </div>
            <div className={Styles['contact-02']}>
              <p>+55 21 XXXX-XXXX</p>
              <p>contato.rj@logo.com</p>
              <hr></hr>
              <p>Rua Jaceru, 32 - Botafogo</p>
              <p>Rio de Janeiro - RJ</p>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className={Styles['information-content']}>
          <h3>Informações</h3>
          <div className={Styles['information-links']}>
            <ul>
              <li>
                <span
                  onClick={() => {
                    sessionNavigation('plans');
                  }}
                >
                  Planos
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    sessionNavigation('faq');
                  }}
                >
                  FAQ
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    sessionNavigation('about');
                  }}
                >
                  Sobre
                </span>
              </li>
              <li>
                <Link to="/TermosCondicoes">
                  <span>Termos e Condições</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SocialMedia />

      <hr className={Styles['dividing-line']}></hr>
      <p>
        Todos os direitos reservados © 2025 Pet+, sistema para clínica
        veterinária.
      </p>
    </footer>
  );
};

export default Footer;
