import React from 'react';
import Hero from '../../components/home/Hero';
import Aboutus from '../../components/home/aboutus/Aboutus';
import Problem from '../../components/home/problemSolution/Problem';
import Solution from '../../components/home/problemSolution/Solution';
import KeyFeatures from '../../components/home/keyFeatures/KeyFeatures';
import HowItWorks from '../../components/home/howItWorks/HowItWorks';
import CinematicExperience from '../../components/home/cinematicExperience/CinematicExperience';
import Testimonials from '../../components/home/testimonials/Testimonials';
import CaseStudies from '../../components/home/caseStudies/CaseStudies';
import PricingPlans from '../../components/home/pricingPlans/PricingPlans';
import CalltoAction from '../../components/home/calltoAction/CalltoAction';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <Aboutus />
      <Problem />
      <Solution />
      <KeyFeatures />
      <HowItWorks />
      <CinematicExperience />
      <Testimonials />
      <CaseStudies />
      <PricingPlans />
      <CalltoAction />
    </main>
  );
};

export default Home;