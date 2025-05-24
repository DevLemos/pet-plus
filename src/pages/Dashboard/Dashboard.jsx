import { useState } from 'react';
import Styles from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar';
import FloatingWindow from '../../components/FloatingWindow';
import Employees from './Employees';
import NotFound from './NotFound';

const Dashboard = () => {
  const [isClose, setClose] = useState(true);

  const [janela, setJanela] = useState(null);

  const abrirJanela = (tipo) => {
    setJanela(tipo);
  };

  const fecharJanela = () => {
    setJanela(null);
  };

  const renderConteudo = () => {
    switch (janela) {
      case 'Funcionários':
        return <Employees />;
      case 'NotFound':
        return <NotFound />;
      default:
        return null;
    }
  };

  const getJanelaTamanho = () => {
    switch (janela) {
      case 'Funcionários':
        return { width: '900px', height: '700px' };
      case 'NotFound':
        return { width: '500px', height: '300px' };
      default:
        return { width: '600px', height: '400px' };
    }
  };

  return (
    <section className={`${Styles.dashboard} ${isClose ? Styles.close : ''}`}>
      <Sidebar
        isClose={isClose}
        setClose={setClose}
        onAbrirJanela={abrirJanela}
      />
      <main>
        <section className={Styles.containerWindow}>
          {janela && (
            <FloatingWindow
              title={janela}
              onClose={fecharJanela}
              {...getJanelaTamanho()}
            >
              {renderConteudo()}
            </FloatingWindow>
          )}
        </section>

        {/* <FloatingWindow url={iframeUrl} /> */}
      </main>
    </section>
  );
};

export default Dashboard;
