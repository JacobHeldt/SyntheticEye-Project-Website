import React from 'react';
import Hero from './Hero';
import Project from './Project';
import Aboutus from './Aboutus';
import Models from './Models';
import Divider from './Divider';
import Navbar from './Navbar';
import withScrollFadeIn from '../../src/useFadeIn';  // make sure the path is correct

const FadingHero = withScrollFadeIn(Hero);
const FadingProject = withScrollFadeIn(Project);
const FadingAboutus = withScrollFadeIn(Aboutus);
const FadingModels = withScrollFadeIn(Models);

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-primary mt-24' id="Home">
        <FadingHero id="hero" delay={200} />
      </div>

      <Divider />

      <div className='bg-primary '>
        <FadingModels id="models" />
        <Divider />
        <FadingProject id="project" />
        <Divider />
        <FadingAboutus id="aboutus" />
      </div>
    </div>
  );
}

export default HomePage;
