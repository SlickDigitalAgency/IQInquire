import React from 'react';
import Hero from '../../components/home/Hero';
import Aboutus from '../../components/home/aboutus/Aboutus';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <Aboutus />
    </main>
  );
};

export default Home;