import React from 'react';
import Styles from './About.module.css';
import { Link } from 'react-router-dom';
import Dog from '../../assets/Dog.jpg';

const About = () => {
  return (
    <section id="about" className={Styles.about}>
      <div className="container">
        <img className={Styles['about-img-dog']} src={Dog} alt="Cachorro" />
        <div className={Styles['about-contents']}>
          <p className={Styles['about-text-medium']}>Quem somos</p>
          <h2>
            Nossa Jornada em Inovar<br></br> na Saúde Animal
          </h2>
          <p className={Styles['about-text-small']}>
            Somos uma empresa brasileira especializada em soluções tecnológicas
            para o mercado veterinário. Nossa principal missão é simplificar a
            gestão de clínicas veterinárias, permitindo que os profissionais
            foquem no que realmente importa: o cuidado com os animais.
          </p>
          <p className={Styles['about-text-small']}>
            Com uma equipe multidisciplinar de desenvolvedores, designers e
            consultores veterinários, criamos uma plataforma que realmente
            entende e atende às necessidades específicas do seu negócio.
          </p>

          <Link className={Styles.btnConhecaHistoria} to="/ConhecaNos">
            Conheça nossa história
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
