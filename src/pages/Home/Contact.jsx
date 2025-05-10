import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Contact.module.css';
import SocialMedia from '../../components/SocialMedia';

const Contact = () => {
  return (
    <section className={Styles.contact}>
      <div className="container">
        <div className={Styles['contact-content']}>
          <div className={Styles['title-bg']}>
            <p>Respostas em até 24h</p>
            <h1>
              nosso contato<span>.</span>
            </h1>
          </div>
          <div className={Styles['container-contact']}>
            <div className={Styles['contact-data']} aria-label="Endereço">
              <h2>Loja Online</h2>
              <div className={Styles['contact-address']}>
                <p>Rua Jaceru, 32 - Botafogo</p>
                <p>Rio de Janeiro - RJ</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </div>
              <address>
                <a href="mailto:contato@petplus.com">contato@petplus.com</a>
                <a href="mailto:assistencia@petplus.com">
                  assistencia@petplus.com
                </a>
                <a href="tel:+552199999999">+55 21 9999-9999</a>
              </address>
              <SocialMedia />
            </div>
            <div className={Styles['contact-form']} aria-label="Formulário">
              <form className={Styles['form']} action="./Contract.jsx">
                <div>
                  <label>Nome</label>
                  <input
                    id="txtNome"
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label>Telefone</label>
                  <input
                    id="txtTelefone"
                    type="text"
                    name="telefone"
                    placeholder="(21) 9999-9999"
                  />
                </div>
                <div className={Styles['email-field']}>
                  <label>Email</label>
                  <input
                    id="txtEmail"
                    type="email"
                    name="email"
                    placeholder="contato@petplus.com"
                  />
                </div>
                <div className={Styles['message-field']}>
                  <label>Mensagem</label>
                  <textarea
                    rows="5"
                    name="mensagem"
                    placeholder="O que você precisa?"
                  ></textarea>
                </div>

                <Link className={Styles.btnEnviarMensagem} to="/">
                  Enviar Mensagem
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
