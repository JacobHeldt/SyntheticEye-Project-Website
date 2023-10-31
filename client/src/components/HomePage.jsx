import { React, useRef } from 'react';
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
  const modelsRef = useRef(null); // Create a ref

  const scrollToModels = () => {
    modelsRef.current.scrollIntoView({ behavior: 'smooth' });  // Smoothly scroll to Models section
  }

  return (
    <div>
      <Navbar />
      <div className='bg-primary mt-28' id="Home">
        <FadingHero id="hero" delay={200} handleClick={scrollToModels} /> {/* Pass the function down */}
      </div>

      <Divider />

      <div className='bg-primary '>
        <div ref={modelsRef}> {/* Attach the ref */}
          <FadingModels id="models" />
        </div>
        <Divider />
        <FadingProject id="project" />
        <Divider />
        <FadingAboutus id="aboutus" />
      </div>
    </div>
  );
}

export default HomePage;
