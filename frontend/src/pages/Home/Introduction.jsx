import React, { useState, useEffect } from 'react';
import Styles from './Introduction.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Veterinary from '../../assets/Veterinary.jpg';
import 'animate.css';

const Introduction = () => {
  const [textAnimClass, setTextAnimClass] = useState('');

  useEffect(() => {
    setTextAnimClass('animate__animated animate__fadeInDown animate__slower');
  }, []);

  const navigate = useNavigate();
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
    <section id="introduction" className={Styles.introduction}>
      <div className="container">
        <div className={Styles['introduction-contents']}>
          <p
            className={`${Styles['introduction-text-medium']} ${textAnimClass}`}
          >
            Software para Clínicas Veterinárias
          </p>
          <h1
            className={`${Styles['introduction-text-large']} ${textAnimClass}`}
          >
            Gestão
            <br /> inteligente para <br />
            sua <span>clínica veterinária</span>
          </h1>
          <p
            className={`${Styles['introduction-text-small']} ${textAnimClass}`}
          >
            Simplifique sua rotina, aumente sua
            <br /> produtividade e ofereça um atendimento
            <br /> excepcional com nossa plataforma completa.
          </p>

          <div
            className={`${Styles['introduction-contents-buttons']} ${textAnimClass}`}
          >
            <Link
              className={Styles.btnExperimente}
              onClick={() => handleNavigateAndScroll('plans')}
            >
              <span>Experimente já</span>
            </Link>

            <Link
              className={`${Styles.btnConhecaNos} ${textAnimClass}`}
              to="/ConhecaNos"
            >
              Conheça-nos
            </Link>
          </div>
        </div>
        <img className={textAnimClass} src={Veterinary} alt="Veterinário" />
      </div>
    </section>
  );
};

export default Introduction;
