import { useEffect, useState } from 'react';
import Styles from './Sidebar.module.css';
import Logo from '../assets/logo-perfil.svg?react';
import 'boxicons/css/boxicons.min.css';

const Sidebar = ({ isClose, setClose, onAbrirJanela }) => {
  // const [isClose, setClose] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`${Styles.sidebar} ${isClose ? Styles.close : ''}`}>
      <header className={Styles['sidebar-logo']}>
        <div className={Styles['image-text']}>
          <span className={Styles['image']}>
            <Logo />
          </span>
          <div className={Styles['header-text']}>
            <span className={Styles['name']}>Pet+</span>
            <span className={Styles['professional']}>Gestão de Clínicas</span>
          </div>
        </div>

        <i
          className="bx bx-chevron-right"
          onClick={() => setClose(!isClose)}
        ></i>
      </header>

      <div className={Styles['menu-bar']}>
        <div className={Styles['menu']}>
          <ul className={Styles['menu-links']}>
            <li className={Styles['search-box']}>
              <i class="bx bx-search" onClick={() => setClose(!isClose)}></i>
              <input type="search" placeholder="Buscar..." />
            </li>
            <li className={Styles['nav-links']}>
              <a href="#" onClick={() => onAbrirJanela('NotFound')}>
                <i class="bx bxs-dashboard"></i>
                <span className={Styles['nav-text']}>Painel</span>
              </a>
            </li>
            <li className={Styles['nav-links']}>
              <a href="#" onClick={() => onAbrirJanela('NotFound')}>
                <i class="bx bxs-chat"></i>
                <span className={Styles['nav-text']}>Mensagens</span>
              </a>
            </li>
            <li className={Styles['nav-links']}>
              <a href="#" onClick={() => onAbrirJanela('Funcionários')}>
                <i class="bx bx-male-female"></i>
                <span className={Styles['nav-text']}>Funcionários</span>
              </a>
            </li>
            <li className={Styles['nav-links']}>
              <a href="#" onClick={() => onAbrirJanela('NotFound')}>
                <i class="bx bxs-user-rectangle"></i>
                <span className={Styles['nav-text']}>Clientes</span>
              </a>
            </li>
            <li className={Styles['nav-links']}>
              <a href="#" onClick={() => onAbrirJanela('NotFound')}>
                <i class="bx bxs-package"></i>
                <span className={Styles['nav-text']}>Estoque</span>
              </a>
            </li>
            <li className={Styles['nav-links']}>
              <a href="#" onClick={() => onAbrirJanela('NotFound')}>
                <i class="bx bxs-cog"></i>
                <span className={Styles['nav-text']}>Configurações</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={Styles['bottom-container']}>
          <li>
            <a href="#">
              <i class="bx bx-log-out"></i>
              <span className={Styles['nav-text']}>Sair</span>
            </a>
          </li>
          <li className={Styles['mode']}>
            <div className={Styles['moon-sun']}>
              {darkMode ? (
                <i class="bx bx-sun"></i>
              ) : (
                <i class="bx bx-moon"></i>
              )}
            </div>
            <span className={Styles['mode-text']}>
              {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </span>
            <div
              className={Styles['toggle-switch']}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className={Styles['switch']}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
