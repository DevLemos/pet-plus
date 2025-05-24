import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Demonstration.module.css';

const Demonstration = () => {
  return (
    <section className={Styles.demonstration}>
      <div className="container">
        <div className={Styles['demonstration-contents']}>
          <h3>Pronto para transformar a gestão da sua clínica?</h3>
          <p>
            Agende uma demonstração gratuita e descubra como nossa plataforma
            pode otimizar<br></br>
            <span>
              seus processos e melhorar a experiência dos seus clientes.
            </span>
          </p>
          <Link
            className={Styles.btnDemonstracao}
            to="/Register?plano=demonstracao"
          >
            Solicitar Demonstração
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;
