import React from 'react';
import Styles from './Login.module.css';
import PetPlus from '../../assets/Logo.svg?react';
import { Link, useNavigate } from 'react-router-dom';
import { animate, createSpring } from 'animejs';

const Login = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/Register');
  };

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

            <button className={Styles.btnEntrar}>
              <span>Entrar</span>
            </button>

            <p>
              Não tem conta?
              <Link to="/Register" onClick={handleRegisterClick}>
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
