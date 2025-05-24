// import React from 'react';
import Styles from './Login.module.css';
import PetPlus from '../../assets/Logo.svg?react';
import { Link, useNavigate } from 'react-router-dom';
import { animate } from 'animejs';

const Login = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/Register');
  };

  const handleMouseEnter = () => {
    animate(root.current, {
      scale: [
        { to: 1.05, duration: 300, easing: 'easeInOutQuad' },
        { to: 1, duration: 500, easing: 'easeOutElastic(1, .4)' },
      ],
      rotate: [
        { to: 2, duration: 200, easing: 'easeInOutSine' },
        { to: -2, duration: 200, easing: 'easeInOutSine' },
        { to: 0, duration: 400, easing: 'easeOutElastic(1, .4)' },
      ],
      opacity: [
        { to: 0.95, duration: 300, easing: 'easeInOutQuad' },
        { to: 1, duration: 300, easing: 'easeInOutQuad' },
      ],
    });
  };

  const handleMouseLeave = () => {
    animate(root.current, {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 400,
      easing: 'easeOutQuad',
    });
  };

  const handleNavigateAndScroll = (sectionId) => {
    navigate('/pet-plus'); // Primeiro volta para a Home
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Espera um pouquinho pra garantir que a Home carregou
  };

  return (
    <section className={Styles.login}>
      <div className="container">
        <div className={Styles['login-contents']}>
          <form className={Styles['form-login']}>
            <a
              ref={(el) => (root.current = el)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleNavigateAndScroll('introduction')}
              className={Styles.logo}
            >
              <PetPlus />
            </a>
            <h2>Login</h2>
            <div>
              <label htmlFor="e-mail">E-mail</label>
              <input
                id="txtEmailLogin"
                type="text"
                name="e-mail"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                id="txtPassword"
                type="text"
                name="password"
                placeholder="Digite sua senha"
              />
            </div>
            <Link to="/Dashboard">
              <button className={Styles.btnEntrar}>
                <span>Entrar</span>
              </button>
            </Link>

            <p>
              Não tem conta?
              <Link
                to="/Register?plano=demonstracao"
                // onClick={handleRegisterClick}
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
