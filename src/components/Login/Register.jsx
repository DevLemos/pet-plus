import React from 'react';
import Styles from './Register.module.css';

const Register = () => {
  return (
    <section className={Styles.register}>
      <div className="container">
        <div className={Styles['register-contents']}>
          <form className={Styles['form-register']}>
            <h2>Cadastro</h2>
            <div className={Styles['form-register-grid']}>
              <div>
                <div>
                  <label htmlFor="e-mail">E-mail</label>
                  <input id="txtEmailRegister" type="text" name="e-mail" />
                </div>
                <div>
                  <label htmlFor="password">Senha</label>
                  <input id="txtPassword" type="text" name="password" />
                </div>
                <div>
                  <label htmlFor="passwordConfirmation">Confirme a Senha</label>
                  <input
                    id="txtPasswordConfirmation"
                    type="text"
                    name="passwordConfirmation"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
