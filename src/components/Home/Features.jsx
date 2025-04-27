import React from 'react';
import Styles from './Features.module.css';
import Paw from '../../assets/Paw.svg?react';
import Calendar from '../../assets/Calendar.svg?react';
import Chart from '../../assets/Chart.svg?react';
import Cubes from '../../assets/Cubes.svg?react';
import File from '../../assets/File.svg?react';
import Users from '../../assets/Users.svg?react';

const Features = () => {
  return (
    <section id="features" className={Styles.features}>
      <div className="container">
        <div className={Styles['features-contents']}>
          <span className={Styles['features-text-medium']}>Recursos</span>
          <h3 className={Styles['features-text-large']}>
            Todas as <span>ferramentas</span> que você precisa.
          </h3>
          <p>
            Nossa plataforma foi projetada especificamente para atender às
            necessidades únicas de clínicas veterinárias
          </p>

          <div className={Styles['features-grid']}>
            <div className={Styles['features-item-card']}>
              <div className={Styles['features-item-svg']}>
                <svg width="24" height="24">
                  <Calendar />
                </svg>
              </div>
              <span>Agendamento Rápido</span>
              <p>
                Sistema de agendamento otimizado<br></br> com lembretes
                automáticos para<br></br> reduzir faltas.
              </p>
            </div>
            <div className={Styles['features-item-card']}>
              <div className={Styles['features-item-svg']}>
                <svg width="32" height="32">
                  <Paw />
                </svg>
              </div>
              <span>Prontuário Digital</span>
              <p>
                Histórico médico completo e seguro<br></br> para cada paciente,
                acessível em<br></br> qualquer dispositivo.
              </p>
            </div>
            <div className={Styles['features-item-card']}>
              <div className={Styles['features-item-svg']}>
                <svg width="24" height="24">
                  <Chart />
                </svg>
              </div>
              <span>Gestão Financeira</span>
              <p>
                Controle total de receitas, despesas<br></br> e relatórios
                detalhados para tomada<br></br> de decisões.
              </p>
            </div>
            <div className={Styles['features-item-card']}>
              <div className={Styles['features-item-svg']}>
                <svg width="24" height="24">
                  <Users />
                </svg>
              </div>
              <span>Gestão de Funcionários e Equipe</span>
              <p>
                Cadastro de médicos veterinários, auxiliares e outros
                funcionários, controle de escalas de trabalho, férias e
                salários.
              </p>
            </div>
            <div className={Styles['features-item-card']}>
              <div className={Styles['features-item-svg']}>
                <svg width="24" height="24">
                  <Cubes />
                </svg>
              </div>
              <span>Controle de Estoque</span>
              <p>
                Gerenciamento completo de medicamentos e produtos com alertas de
                reposição.
              </p>
            </div>
            <div className={Styles['features-item-card']}>
              <div className={Styles['features-item-svg']}>
                <svg width="24" height="24">
                  <File />
                </svg>
              </div>
              <span>Relatórios Gerenciais</span>
              <p>
                Geração de relatórios detalhados sobre consultas, faturamento,
                desempenho financeiro, taxa de retorno dos pacientes, entre
                outros indicadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
