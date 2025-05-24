import Styles from './CompanyHistory.module.css';
import LogoEmpresa from '../../assets/company-history.svg';
import Rochet from '../../assets/rocket.svg?react';
import Plus from '../../assets/plus.svg?react';
import Gestures from '../../assets/gestures-hand.svg?react';

const CompanyHistory = () => {
  return (
    <section className={Styles['company-history']}>
      <div className={Styles['title-bg']}>
        <span className={Styles['title-decoration']}>Sobre nós</span>
        <h2>
          <span>Soluções</span> inteligentes para<br></br>simplificar a rotina
          veterinária<span>.</span>
        </h2>
      </div>
      <div className={Styles['history-content']}>
        <span className={Styles['title-decoration-history']}>
          Nossa História
        </span>
        <h3>
          Sobre a <span>Pet+</span>
        </h3>
        <div>
          <img src={LogoEmpresa} alt="LogoEmpresa" />
          <p>
            A Pet+ nasceu da necessidade de tornar a gestão de clínicas
            veterinárias mais eficiente e acessível. Criada por apaixonados por
            tecnologia e pelo bem-estar animal, nossa empresa surgiu ao
            percebermos as dificuldades enfrentadas por clínicas na organização
            de seus processos diários. Com a experiência em desenvolvimento de
            software e um olhar atento às demandas do setor veterinário,
            desenvolvemos um sistema intuitivo e completo para facilitar o
            trabalho dos profissionais da área. Nosso objetivo é proporcionar
            uma gestão mais ágil, organizada e eficaz, permitindo que
            veterinários e suas equipes foquem no que realmente importa: o
            cuidado com os animais. Na Pet+, acreditamos que a tecnologia pode
            transformar a rotina das clínicas, trazendo mais eficiência e
            qualidade no atendimento. Estamos sempre inovando para oferecer as
            melhores soluções para nossos clientes!
          </p>
        </div>
      </div>
      <div className={Styles['company-values-content']}>
        <div className={Styles['company-values-item-card']}>
          <div className={Styles['company-values-item-header']}>
            <div className={Styles['company-values-item-svg']}>
              <svg width="24" height="24">
                <Plus />
              </svg>
            </div>
            <span>Missão</span>
          </div>
          <p>
            Facilitar a gestão de clínicas veterinárias<br></br> por meio de
            tecnologia inovadora, oferecendo soluções eficientes que otimizam
            processos e permitem que os profissionais se dediquem ao cuidado dos
            animais.
          </p>
        </div>
        <div className={Styles['company-values-item-card']}>
          <div className={Styles['company-values-item-header']}>
            <div className={Styles['company-values-item-svg']}>
              <svg width="24" height="24">
                <Rochet />
              </svg>
            </div>
            <span>Visão</span>
          </div>
          <p>
            Ser a principal referência em software para clínicas veterinárias,
            reconhecida pela inovação, confiabilidade e impacto positivo na
            rotina dos profissionais da área.
          </p>
        </div>
        <div className={Styles['company-values-item-card']}>
          <div className={Styles['company-values-item-header']}>
            <div className={Styles['company-values-item-svg']}>
              <svg width="24" height="24">
                <Gestures />
              </svg>
            </div>
            <span>Valores</span>
          </div>
          <p>
            Compromisso com a qualidade, Paixão por tecnologia e inovação, Foco
            no cliente, Ética e transparência e Amor pelos animais
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
