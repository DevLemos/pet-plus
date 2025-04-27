import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Features from './Features';
import Demonstration from './Demonstration';
import Plans from './Plans';
import Faq from './Faq';

const Home = () => {
  return (
    <section className="contents">
      <Introduction />
      <About />
      <Features />
      <Demonstration />
      <Plans />
      <Faq />
    </section>
  );
};

export default Home;
