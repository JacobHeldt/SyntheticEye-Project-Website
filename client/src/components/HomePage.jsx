import React from 'react';
import Hero from './Hero';
import Project from './Project';
import Aboutus from './Aboutus';
import Models from './Models';
import Divider from './Divider';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-primary mt-24' id="Home">
        <Hero /> 
      </div>

      <Divider />

      <div className='bg-primary '>
        <Project id="Project" />
        <Divider />
        <Aboutus />
        <Divider />
        <Models />
      </div>
    </div>
  );
}

export default HomePage;