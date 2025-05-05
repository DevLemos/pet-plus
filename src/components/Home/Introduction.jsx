import Styles from './Introduction.module.css';
import { Link } from 'react-router-dom';
import Veterinary from '../../assets/Veterinary.jpg';

const Introduction = () => {
  return (
    <section id="introduction" className={Styles.introduction}>
      <div className="container">
        <div className={Styles['introduction-contents']}>
          <p className={Styles['introduction-text-medium']}>
            Software para Clínicas Veterinárias
          </p>
          <h1 className={Styles['introduction-text-large']}>
            Gestão
            <br /> inteligente para <br />
            sua <span>clínica veterinária</span>
          </h1>
          <p className={Styles['introduction-text-small']}>
            Simplifique sua rotina, aumente sua
            <br /> produtividade e ofereça um atendimento
            <br /> excepcional com nossa plataforma completa.
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
      </div>
    </section>
  );
};

export default Introduction;
