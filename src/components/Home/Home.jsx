import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Home.module.css';
import Veterinary from '../../assets/Veterinary.jpg';
// import ArrowRight from '../assets/arrow-right.svg?react';

const Home = () => {
  return (
    <section className="container">
      <section className={Styles.introduction}>
        <div className={Styles['introduction-contents']}>
          <p className={Styles['introduction-text-medium']}>
            Software para Clínicas Veterinárias
          </p>
          <h1 className={Styles['introduction-text-large']}>
            Gestão<br></br> inteligente para<br></br>sua{' '}
            <span>clínica veterinária</span>
          </h1>
          <p className={Styles['introduction-text-small']}>
            Simplifique sua rotina, aumente sua<br></br> produtividade e ofereça
            um atendimento<br></br> excepcional com nossa plataforma completa.
          </p>

          <div className={Styles['introduction-contents-buttons']}>
            <Link className={Styles.btnExperimente} to="/">
              <span>Experimente já</span>
            </Link>

            <Link className={Styles.btnConhecaNos} to="/">
              Conheça-nos
            </Link>
          </div>
        </div>

        <img src={Veterinary} alt="Veterinário" />
      </section>

      <section className={Styles.About}></section>
    </section>
  );
};

export default Home;
