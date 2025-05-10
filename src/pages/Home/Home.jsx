import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Features from './Features';
import Demonstration from './Demonstration';
import Plans from './Plans';
import Faq from './Faq';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    const section = localStorage.getItem('scrollTo');
    if (section) {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -70,
      });
      localStorage.removeItem('scrollTo');
    }
  }, []);
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
