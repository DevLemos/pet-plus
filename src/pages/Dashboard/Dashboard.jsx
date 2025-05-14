// import React from 'react';
import Styles from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <section className={Styles.dashboard}>
      <Sidebar />
    </section>
  );
};

export default Dashboard;
