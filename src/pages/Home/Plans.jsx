import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Plans.module.css';

const Plans = () => {
  return (
    <section id="plans" className={Styles.plans}>
      <div className="container">
        <div className={Styles['plans-contents']}>
          <span className={Styles['plans-text-medium']}>Planos</span>
          <p className={Styles['plans-text-large']}>
            Escolha o seu <span>plano.</span>
          </p>

          <div className={Styles['plans-contents-grid']}>
            <div className={Styles['plans-item-grid']}>
              <div className={Styles['plans-item-essential']}>
                <h3>Pet + Essencial</h3>
                <p>
                  R$ 199
                  <span className={Styles['plans-item-essential-span']}>
                    /mês
                  </span>
                </p>
              </div>
              <ul>
                <li>Área Clínica</li>
                <li>Financeiro</li>
                <li>Cadastro de Proprietários</li>
                <li>Cadastro de Animais</li>
                <li>Até 3 usuários</li>
              </ul>

              <Link
                className={Styles.btnExperimentePlano}
                to="/Register?plano=essencial"
              >
                <span>Experimente o plano</span>
              </Link>
            </div>
            <div className={Styles['plans-item-grid-pro']}>
              <div className={Styles['plans-item-pro']}>
                <h3>Pet + Pro</h3>
                <div className={Styles['plans-item-pro-price']}>
                  <span>A partir de:</span>
                  <p>
                    R$ 349<span>/mês</span>
                  </p>
                </div>
              </div>
              <ul>
                <div>
                  <li>Área Clínica</li>
                  <li>Financeiro</li>
                  <li>Cadastro de Proprietários</li>
                  <li>Cadastro de Animais</li>
                  <li>Controle de Estoque</li>
                  <li>Até 10 usuários</li>
                  <li>Relatórios</li>
                  <li>Portal do Cliente</li>
                </div>
                <div>
                  <li>Tabelas de Convênio</li>
                  <li>Prontuário veterinário</li>
                </div>
              </ul>

              <Link
                className={Styles.btnExperimentePlanoPro}
                to="/Register?plano=pro"
              >
                Experimente o plano
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
