import React from 'react';
import Styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import PetPlus from '../assets/LogoFooter.svg?react';
import Facebook from '../assets/facebook.svg?react';
import Instagram from '../assets/instagram.svg?react';
import Youtube from '../assets/youtube.svg?react';
import TikTok from '../assets/tiktok.svg?react';
import Whatsapp from '../assets/whatsapp.svg?react';

const Footer = () => {
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
            <Link to="/">
              <span>Planos</span>
            </Link>
            <Link to="/">
              <span>FAQ</span>
            </Link>
            <Link to="/">
              <span>Sobre</span>
            </Link>
            <Link to="/">
              <span>Termos e Condições</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={Styles['social-media-content']}>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Instagram />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <TikTok />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Facebook />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Youtube />
            </svg>
          </Link>
        </div>
        <div>
          <Link to="/">
            <svg width="24" height="24">
              <Whatsapp />
            </svg>
          </Link>
        </div>
      </div>

      <hr className={Styles['dividing-line']}></hr>
      <p>
        Todos os direitos reservados © 2025 Pet+, sistema para clínica
        veterinária.
      </p>
    </footer>
  );
};

export default Footer;
