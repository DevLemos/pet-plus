import React from 'react';
import Styles from './Login.module.css';
import { Link } from 'react-scroll';

const Login = () => {
  return (
    <section className={Styles.login}>
      <div className="container">
        <div className={Styles['login-contents']}>
          <form className={Styles['form-login']}>
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
              Não tem conta?<Link>Cadastre-se</Link>
            </p>

            {/* <Link to="/Registration">
              Não tem conta?
              <span> Cadastre-se</span>
            </Link> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
