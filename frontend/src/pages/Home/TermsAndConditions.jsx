import Styles from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
  return (
    <section className={Styles['TermsAndConditions']}>
      <div className={Styles['title-bg']}>
        <span className={Styles['title-decoration']}>Termos de uso</span>
        <h2>
          <span>termos</span> e condições<span>.</span>
        </h2>
      </div>
      <div className={Styles['terms-content']}>
        <div>
          <h3>1. Política de Estorno e Reembolso</h3>
          <p>
            1.1 Pagamentos realizados não são reembolsáveis após 7 dias corridos
            da contratação, conforme o direito de arrependimento previsto no
            Código de Defesa do Consumidor.
          </p>
          <p>
            1.2 Após esse período, não haverá estorno proporcional, mesmo em
            caso de cancelamento antecipado.
          </p>
          <p>
            1.3 Em caso de falha técnica comprovada do sistema, que inviabilize
            totalmente o uso por mais de 72 horas seguidas, o cliente poderá
            solicitar reembolso proporcional.
          </p>
        </div>
        <div>
          <h3>2. Conta do Usuário</h3>
          <p>
            2.1 Cada clínica deve criar uma conta principal, sendo possível
            cadastrar usuários com diferentes níveis de acesso (admin, recepção,
            veterinário, etc.).
          </p>
          <p>
            2.2 O compartilhamento de contas entre funcionários é proibido por
            questões de segurança e auditoria.
          </p>
          <p>
            2.3 A Pet+ reserva-se o direito de suspender contas que estejam em
            desacordo com esta política.
          </p>
        </div>
        <div>
          <h3>3. Renovação e Pagamentos</h3>
          <p>
            3.1 A renovação do serviço é feita automaticamente, mensalmente ou
            anualmente, conforme plano contratado.
          </p>
          <p>
            3.2 A inadimplência por mais de 10 dias resultará na suspensão
            temporária do acesso. Após 30 dias, os dados podem ser excluídos
            permanentemente.
          </p>
        </div>
        <div>
          <h3>4. Backup e Restauração de Dados</h3>
          <p>
            4.1 Realizamos backups automáticos diários para garantir a segurança
            dos dados.
          </p>
          <p>
            4.2 O cliente pode solicitar a restauração de um backup em caso de
            perda de dados, limitado a 1 solicitação gratuita por mês.
          </p>
        </div>
        <div>
          <h3>5. Suporte e Atendimento</h3>
          <p>
            5.1 O suporte técnico é oferecido via e-mail e WhatsApp, de segunda
            a sexta, das 8h às 18h.
          </p>
          <p>
            5.2 Suporte emergencial fora desse horário está disponível apenas
            para planos premium.
          </p>
        </div>
        <div>
          <h3>6. Cancelamento pela Empresa</h3>
          <p>
            6.1 A Pet+ poderá suspender ou cancelar o acesso ao sistema, com ou
            sem aviso prévio, em casos de:
            <ul>
              <li>Uso indevido do sistema</li>
              <li>Tentativas de violação de segurança</li>
              <li>Não pagamento recorrente</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
