import React, { useState } from 'react';
import Styles from './Login.module.css';
import PetPlus from '../../assets/Logo.svg?react';
import { Link, useNavigate } from 'react-router-dom';
import { showAlert } from '../../components/PresentMessage';
import { animate } from 'animejs';
import 'animate.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      showAlert({
        icon: 'warning',
        title: 'Preencha todos os campos',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:5088/api/User/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Email: formData.email,
          PasswordHash: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        handleNavigate('/Dashboard');
        showAlert({
          icon: 'success',
          title: 'Login realizado!',
          text: data.message,
          onConfirm: () => {
            localStorage.setItem('clinicaId', data.user.clinicId);
          },
        });
      } else {
        const error = await response.text();
        showAlert({
          icon: 'error',
          title: 'Erro no login',
          text: error || 'Usuário ou senha inválidos',
        });
      }
    } catch (error) {
      showAlert({
        icon: 'error',
        title: 'Erro de rede',
        text: 'Verifique sua conexão',
      });
    }
  };

  const [animClass, setAnimClass] = useState(
    'animate__animated animate__fadeIn',
  );

  const handleNavigate = (path) => {
    // troca a animação para fadeOut
    setAnimClass('animate__animated animate__fadeOutLeft');

    // após o tempo da animação (ex: 500ms), navega
    setTimeout(() => {
      navigate(path);
    }, 500);
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // Espera um pouquinho pra garantir que a Home carregou
  };

  return (
    <section className={`${Styles.login} ${animClass}`}>
      <div className="container">
        <div className={Styles['login-contents']}>
          <form onSubmit={formSubmit} className={Styles['form-login']}>
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
              <label htmlFor="email">E-mail</label>
              <input
                id="txtEmailLogin"
                type="text"
                name="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                id="txtPassword"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={Styles.btnEntrar}>
              <span>Entrar</span>
            </button>

            <p>
              Não tem conta?
              <Link
                to="/Register?plano=demonstracao"
                onClick={(e) => {
                  e.preventDefault(); // previne navegação imediata
                  setAnimClass('animate__animated animate__fadeOut');
                  setTimeout(() => {
                    navigate('/Register?plano=demonstracao');
                  }, 500);
                }}
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
