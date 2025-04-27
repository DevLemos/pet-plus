import React from 'react';
import Styles from './Faq.module.css';

const Faq = () => {
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
              <div>
                <dt>O sistema funciona em celular ou tablet?</dt>
                <dd>
                  Sim! Nosso sistema foi desenvolvido com design responsivo, o
                  que garante uma ótima experiência tanto em celulares quanto em
                  tablets. Assim, você pode acessar e gerenciar sua clínica de
                  onde estiver, com total praticidade.
                </dd>
              </div>
              <div>
                <dt>O que é o sistema Pet+ ?</dt>
                <dd>
                  O Pet+ é um sistema completo de gestão desenvolvido
                  especialmente para clínicas veterinárias. Ele reúne em um só
                  lugar todas as ferramentas necessárias para organizar
                  atendimentos, controlar o estoque, cadastrar pets,
                  funcionários e muito mais — tudo de forma prática, segura e
                  eficiente.
                </dd>
              </div>
              <div>
                <dt>Vocês oferem treinamento para minha equipe?</dt>
                <dd>
                  Sim! Oferecemos treinamento completo para que sua equipe
                  aproveite ao máximo todas as funcionalidades do Pet+. Nosso
                  suporte acompanha desde a implantação até o uso no dia a dia,
                  garantindo que todos estejam preparados para utilizar o
                  sistema com confiança e eficiência.
                </dd>
              </div>
              <div>
                <dt>Como são realizadas as atualizações do sistema?</dt>
                <dd>
                  As atualizações do Pet+ são feitas automaticamente, sem que
                  você precise se preocupar. Sempre que houver melhorias,
                  correções ou novas funcionalidades, elas são aplicadas de
                  forma segura e transparente, garantindo que você esteja sempre
                  com a versão mais recente do sistema.
                </dd>
              </div>
              <div>
                <dt>
                  Posso gerar relatórios e métricas para analisar o desempenho
                  da minha clínica?
                </dt>
                <dd>
                  Sim! O Pet+ oferece diversos relatórios e métricas
                  personalizadas para que você acompanhe o desempenho da sua
                  clínica em tempo real. Com eles, é possível analisar
                  atendimentos, faturamento, estoque, produtividade da equipe e
                  muito mais — tudo de forma visual e fácil de entender.
                </dd>
              </div>
              <div>
                <dt>
                  O sistema possui funcionalidades para controle de estoque?
                </dt>
                <dd>
                  Sim, o Pet+ possui um sistema de controle de estoque que
                  permite registrar as entradas e saídas de produtos, garantindo
                  o monitoramento adequado dos itens disponíveis na clínica.{' '}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
