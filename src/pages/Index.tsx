
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Videos from '@/components/Videos';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <About />
      <Videos />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
};

export default Index;
