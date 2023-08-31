import React, { useRef } from 'react';
import { learn_featured, learn_standard } from '../constants/index.js';
import * as Icons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';

const ContentLibrary = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        top: 0,
        left: direction === 'next' ? 500 : -500,
        right: direction === 'back' ? -500 : 500,
        behavior: 'smooth'
      });
    }
  }

  function renderIcon(iconName) {
    const IconComponent = Icons[iconName];
    if (!IconComponent) {
      console.error(`Icon ${iconName} not found in 'react-icons/fa'`);
      return null;
    }
    return <IconComponent size={48} />;
  }

  return (
    <div className='font-poppins'>
    <Navbar />
    
    <div className='mx-24'>
    <div className='w-full text-center text-white text-5xl  mt-24 font-righteous'>SyntheticEye Content Library</div>
    <div className='text-center mx-36 text-gray-300 mt-4'>Explore our curated collection of insightful articles and resources on AI-generated content and the latest in machine learning advancements. Dive deep into the transformative world of artificial intelligence and stay informed with our handpicked selections.</div>
    <h2 className='text-4xl text-white font-righteous mb-6 mt-4'>Featured</h2>
    <div className="relative">
        {/* Back Button */}
        <button 
          className='absolute left-0 top-0 bottom-0 text-black primary-gradient tracking-wider font-righteous h-64 text-lg uppercase rounded-md hover:rounded-lg px-4' 
          onClick={() => scroll('back')}
        >
          <FaArrowLeft />
        </button>
        
        {/* Slider Content */}
        <div ref={sliderRef} className="slider mx-16">
          {learn_featured.map(item => (
            <div key={item.title} className="text-white h-64 w-1/2 bg-gray-700 mb-10 article rounded-xl">
              <div 
                className="h-full rounded-xl"
                style={{ 
                  background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
                  padding: '0.1rem',
                }}
              >
                <div className='bg-gray-800 h-full w-full rounded-xl flex'>
                  <div className='bg-quote-gradient flex items-center justify-center w-1/4 rounded-l-xl'> 
                    {renderIcon(item.icon)}
                  </div>

                  <div className='relative flex flex-col p-6 w-[550px]'>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className='absolute top-12 left-8 right-8 text-xl whitespace-normal'>{item.title}</a>
                    <p className='absolute top-28 left-8 right-8 whitespace-normal text-gray-300'>{item.description}</p>
                    <a href={item.link} target="_blank" className='absolute right-4 bottom-4 text-black primary-gradient tracking-wider font-righteous py-1 text-lg uppercase rounded-md hover:rounded-lg px-4'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Next Button */}
        <button 
          className='absolute right-0 top-0 bottom-0 text-black primary-gradient tracking-wider font-righteous h-64 text-lg uppercase rounded-md hover:rounded-lg px-4' 
          onClick={() => scroll('next')}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
    </div>
      
  );
  
}

export default ContentLibrary;
