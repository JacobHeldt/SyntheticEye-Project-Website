import React from 'react';
import Hero from './Hero';
import Project from './Project';
import Aboutus from './Aboutus';
import Models from './Models';
import Divider from './Divider';

const HomePage = () => {
  return (
    <div>
      <div className='bg-primary' id="Home">
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