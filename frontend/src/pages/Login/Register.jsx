import React from 'react';
import Styles from './Register.module.css';
import { useSearchParams } from 'react-router-dom';

const Register = () => {
  const [searchParams] = useSearchParams();
  const plano = searchParams.get('plano');
  return (
    <section className={Styles.register}>
      <div className={Styles['container-form']}>
        <div className={Styles['register-contents']}>
          <h2>Criar nova clínica</h2>
          <p>Plano Selecionado: {plano}</p>
          <div className={Styles['form-register']}>
            <form className={Styles['form']}>
              <div className={Styles['form-horizontal']}>
                <span>Dados da clínica</span>
                <hr></hr>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="nome">Nome</label>
                    <input id="txtNomeClinica" name="nome" type="text" />
                  </div>

                  <div className={Styles['container-select']}>
                    <label>Tipo:</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="PF">Física</option>
                      <option value="PJ">Jurídica</option>
                    </select>
                  </div>
                </div>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="cnpj">CNPJ</label>
                    <input id="txtCnpj" type="text" name="cnpj" />
                  </div>

                  <div>
                    <label htmlFor="razaoSocial">Razão Social</label>
                    <input id="txtRazaoSocial" type="text" name="razaoSocial" />
                  </div>
                </div>
                <span className={Styles['title-decoration']}>
                  Dados do usuário administrador
                </span>
                <hr></hr>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="txtEmail" type="text" name="email" />
                  </div>

                  <div>
                    <label htmlFor="nomeAdm">Nome Completo</label>
                    <input id="txtNomeAdm" type="text" name="nomeAdm" />
                  </div>
                </div>
                <div className={Styles['form-group']}>
                  <div className={Styles['field-rg']}>
                    <label htmlFor="rg">RG</label>
                    <input id="txtRg" type="text" name="rg" />
                  </div>
                  <div className={Styles['field-cpf']}>
                    <label htmlFor="cpf">CPF</label>
                    <input id="txtCpf" type="text" name="cpf" />
                  </div>

                  <div className={Styles['container-select']}>
                    <label>Tipo:</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="PF">Física</option>
                      <option value="PJ">Jurídica</option>
                    </select>
                  </div>
                </div>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="senha">Senha</label>
                    <input id="txtSenha" type="text" name="senha" />
                  </div>
                  <div>
                    <label htmlFor="confirSenha">Confirme a Senha</label>
                    <input
                      id="txtSenhaConfirma"
                      type="text"
                      name="confirSenha"
                    />
                  </div>
                </div>
                <div className={Styles['container-chk']}>
                  <input id="chkTermos" type="checkbox" name="group" />
                  <label htmlFor="group">
                    Li e concordo com os termos de uso do software
                    <a href="/">Ler os termos de uso</a>
                  </label>
                </div>
                <div className={Styles['container-btn']}>
                  <button className={Styles.btnConfirmar}>
                    <span>Confirmar</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
