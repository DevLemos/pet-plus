import React from 'react';
import { useState } from 'react';
import ChevronDown from '../../assets/chevron-down-solid.svg?react';
import ChevronUp from '../../assets/chevron-up-solid.svg?react';
import Styles from './Faq.module.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: 'O sistema funciona em celular ou tablet?',
      answer:
        'Sim! Nosso sistema foi desenvolvido com design responsivo, o que garante uma ótima experiência tanto em celulares quanto em tablets. Assim, você pode acessar e gerenciar sua clínica de onde estiver, com total praticidade.',
    },
    {
      question: 'O que é o sistema Pet+ ?',
      answer:
        'O Pet+ é um sistema completo de gestão desenvolvido especialmente para clínicas veterinárias. Ele reúne em um só lugar todas as ferramentas necessárias para organizar atendimentos, controlar o estoque, cadastrar pets, funcionários e muito mais — tudo de forma prática, segura e eficiente.',
    },
    {
      question: 'Vocês oferecem treinamento para minha equipe?',
      answer:
        'Sim! Oferecemos treinamento completo para que sua equipe aproveite ao máximo todas as funcionalidades do Pet+. Nosso suporte acompanha desde a implantação até o uso no dia a dia, garantindo que todos estejam preparados para utilizar o sistema com confiança e eficiência.',
    },
    {
      question: 'Como são realizadas as atualizações do sistema?',
      answer:
        'As atualizações do Pet+ são feitas automaticamente, sem que você precise se preocupar. Sempre que houver melhorias, correções ou novas funcionalidades, elas são aplicadas de forma segura e transparente, garantindo que você esteja sempre com a versão mais recente do sistema.',
    },
    {
      question:
        'Posso gerar relatórios e métricas para analisar o desempenho da minha clínica?',
      answer:
        'Sim! O Pet+ oferece diversos relatórios e métricas personalizadas para que você acompanhe o desempenho da sua clínica em tempo real. Com eles, é possível analisar atendimentos, faturamento, estoque, produtividade da equipe e muito mais — tudo de forma visual e fácil de entender.',
    },
    {
      question: 'O sistema possui funcionalidades para controle de estoque?',
      answer:
        'Sim, o Pet+ possui um sistema de controle de estoque que permite registrar as entradas e saídas de produtos, garantindo o monitoramento adequado dos itens disponíveis na clínica.',
    },
  ];

  return (
    <section id="faq" className={Styles.faq}>
      <div className="container">
        <div className={Styles['faq-contents']}>
          <span className={Styles['faq-text-medium']}>FAQ</span>
          <h3 className={Styles['faq-text-large']}>
            <span>perguntas</span> frequentes.
          </h3>
          <p>Esperamos resolver todas suas dúvidas.</p>

          <div className={Styles['question-content-session']}>
            <dl>
              {questions.map((item, index) => (
                <div key={index} className={Styles['faq-item']}>
                  <dt
                    onClick={() => toggleQuestion(index)}
                    className={Styles['faq-question']}
                  >
                    {item.question}
                    <span className={Styles['faq-chevron']}>
                      {activeIndex === index ? (
                        <svg width="24" height="24">
                          <ChevronUp />
                        </svg>
                      ) : (
                        <svg width="24" height="24">
                          <ChevronDown />
                        </svg>
                      )}
                    </span>
                  </dt>
                  <dd
                    className={`${Styles['faq-answer']} ${
                      activeIndex === index ? Styles['active'] : ''
                    }`}
                  >
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
