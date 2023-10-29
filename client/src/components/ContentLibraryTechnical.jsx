import React, { useRef, useState } from 'react';
import { technical_featured, technical_standard } from '../constants/index.js';
import * as Icons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const ContentLibraryTechnical = () => {
    
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [clickable, setClickable] = useState(false);
  
    const scroll = (direction) => {
      // Determine the amount to scroll based on the window width
      const scrollAmount = window.innerWidth <= 768 ? 302 : 515; // 300 for mobile and 600 for desktop
    
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          top: 0,
          left: direction === 'next' ? scrollAmount : -scrollAmount,
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
  
    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    }
  
    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  
    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 100) {
        // Swipe Left
        scroll('next');
      }
  
      if (touchEnd - touchStart > 100) {
        // Swipe Right
        scroll('back');
      }
    }
  
    return (
      <div className='font-poppins'>
      <Navbar />
  
      <div className='absolute right-1/4 z-[0] top-1/6'>
          <div className='blue__gradient h-64 w-80'></div>
      </div>
  
      <div className='absolute right-2/4 z-[0] top-3/4'>
          <div className='darkblue__gradient h-64 w-40'></div>
      </div>
      <div className='absolute right-3/4 z-[0] top-3/4'>
          <div className='darkblue__gradient h-64 w-40'></div>
      </div>
          
      
      <div className='lg:mx-24 mx-8'>
      <div className='w-full text-center text-white lg:text-5xl text-3xl  mt-24 font-righteous'>SyntheticEye Content Library</div>
      <div className='flex justify-center mt-8 font-semibold'>

        <Link to="/content-library-general" className='z-50'>
            <div className='primary-gradient py-2 w-28 text-center rounded-md mr-8'>
                <span className="text-black">General</span>
            </div>
        </Link>

        <Link to="/content-library-technical" className='z-50'>
            <div className='primary-gradient py-2 w-28 text-center rounded-md opacity-60' style={{ pointerEvents: clickable ? '' : 'none' }}>
                <span className="text-black">Technical</span>
            </div>
        </Link> 

    </div>
      <div className='text-center lg:mx-36 mx-8 text-gray-300 mt-8 lg:text-base text-sm'><span className='lg:inline hidden'>Explore our curated collection of insightful articles and resources on AI-generated content and the latest in machine learning advancements. </span>Dive deep into the transformative world of artificial intelligence and stay informed with our handpicked selections.</div>
      <h2 className='lg:text-4xl text-2xl text-white font-righteous mb-6 lg:mt-4 mt-12'>Featured</h2>
      <div className="relative mobile-btn-container">
  
      <button 
            className='lg:mb-0 mb-5 flex justify-center items-center mobile-btn mobile-btn-back py-2 lg:py-0 lg:w-auto w-[100%] px-2 lg:px-4 lg:absolute lg:left-0 lg:top-0 lg:bottom-0 text-black primary-gradient tracking-wider font-righteous lg:h-[270px] text-lg uppercase rounded-md hover:rounded-lg' 
            onClick={() => scroll('back')}
        >
            <FaArrowLeft />
        </button>
          
          {/* Slider Content */}
          <div ref={sliderRef} className="slider sm:order-1 lg:mx-16 mx-0" onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            {technical_featured.map(item => (
              <div key={item.title} className="text-white lg:h-[270px] h-[455px] lg:w-1/2 w-72 bg-gray-700 lg:mb-10 mb-0 article rounded-xl">
                <div 
                  className="h-full rounded-xl lg:w-auto w-[100%]"
                  style={{ 
                    background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
                    padding: '0.1rem',
                  }}
                >
                  <div className='bg-gray-800 h-full lg:w-[540px] w-72 rounded-xl flex flex-col lg:flex-row'> {/* Adjusted here */}
                    <div className='bg-quote-gradient flex items-center justify-center lg:w-1/4 w-72 rounded-t-xl lg:rounded-l-xl lg:h-auto h-20'> 
                      {renderIcon(item.icon)}
                    </div>
  
                    <div className='relative flex flex-col p-6 lg:w-[550px] w-72'>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className='absolute top-12 left-8 right-8 lg:text-xl text-lg whitespace-normal'>{item.title}</a>
                      <p className='absolute lg:top-28 top-[135px] left-8 right-8 whitespace-normal text-gray-300 lg:text-base text-sm'>{item.description}</p>
                      <div className='absolute lg:bottom-4 bottom-2 mb:mt-auto mt-3 left-8 w-16 py-1 text-center text-sm bg-white text-black rounded-lg'>{item.form}</div>
                      <a href={item.link} target="_blank" className='absolute right-4 lg:bottom-4 lg:top-[215px] top-80 text-black primary-gradient tracking-wider font-righteous py-1 text-lg uppercase rounded-md hover:rounded-lg px-6'>Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          {/* Next Button */}
          <button 
            className='lg:mt-0 mt-5 flex justify-center items-center mobile-btn mobile-btn-next lg:py-0 lg:w-auto w-[100%] py-2 px-2 lg:px-4 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 text-black primary-gradient tracking-wider font-righteous lg:h-[270px] text-lg uppercase rounded-md hover:rounded-lg' 
            onClick={() => scroll('next')}
        >
            <FaArrowRight />
        </button>
  
        </div>
      </div>
  
  
      <div className='lg:mx-24 mx-8'>
      <h2 className='lg:text-4xl text-2xl text-white font-righteous mb-6 lg:mt-4 mt-16'>Our handpicked content</h2>
      <div className="relative">
          
          {/* Slider Content */}
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 items-center w-full">
            {technical_standard.map(item => (
              <div key={item.title} className="text-white bg-gray-700 mb-10 article rounded-xl">
                <div 
                  className="rounded-xl lg:w-[20vw] w-full mx-auto"
                  style={{ 
                    background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
                    padding: '0.1rem',
                  }}
                >
                  <div className='bg-gray-800 w-full rounded-xl'>
                    <div className='bg-quote-gradient flex items-center justify-center w-full h-32 rounded-xl text-white'> 
                      {renderIcon(item.icon)}
                    </div>
  
                    <div className='relative flex flex-col p-6 lg:h-[420px] h-[250px]'>
                    <div>
                      <div className='absolute top-8 left-6 w-16 py-1 text-center text-sm bg-white text-black rounded-lg'>{item.form}</div>
                        <div className="mt-14"> {/* Fixed margin-top to ensure the title always starts at the same line */}
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-lg whitespace-normal'>{item.title}</a>
                          <p className='whitespace-normal text-gray-300 top-44 absolute hidden lg:block'>{item.description}</p>
                        </div>
                    </div>
                    <a href={item.link} target="_blank" className='absolute bottom-8 px-6 text-black primary-gradient tracking-wider font-righteous py-1 text-lg uppercase rounded-md hover:rounded-lg'>Learn More</a>
                    </div>
  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  </div>
      
        
    );
    
  }

export default ContentLibraryTechnical