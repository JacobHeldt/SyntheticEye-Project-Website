import React, { useRef, useState } from 'react';
import { general_featured, general_standard } from '../constants/index.js';
import * as Icons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const ContentLibrary = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [clickable, setClickable] = useState(true);

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
        
    
    <div className='md:mx-24 mx-8'>
    <div className='w-full text-center text-white md:text-5xl text-3xl  mt-24 font-righteous'>SyntheticEye Content Library</div>

    <div className='flex justify-center mt-8 font-semibold'>
    <Link to="/content-library-general" className='z-50'>
    <div className='primary-gradient py-2 w-28 text-center rounded-md mr-8 opacity-60 drop-shadow-2xl' style={{ pointerEvents: clickable ? '' : 'none' }}>
        <span className="text-black">General</span>
    </div>
    </Link>
    <Link to="/content-library-technical" className='z-50'>
    <div className='primary-gradient py-2 w-28 text-center rounded-md drop-shadow-2xl'>
        <span className="text-black">Technical</span>
    </div>
    </Link>       
    </div>

    <div className='text-center md:mx-36 mx-8 text-gray-300 mt-8 md:text-base text-sm'><span className='md:inline hidden'>Explore our curated collection of insightful articles and resources on AI-generated content and the latest in machine learning advancements. </span>Dive deep into the transformative world of artificial intelligence and stay informed with our handpicked selections.</div>
    <h2 className='md:text-4xl text-2xl text-white font-righteous mb-6 md:mt-4 mt-12'>Featured</h2>
    <div className="relative mobile-btn-container">

    <button 
          className='md:mb-0 mb-5 flex justify-center items-center mobile-btn mobile-btn-back py-2 md:py-0 md:w-auto w-[100%] px-2 md:px-4 md:absolute md:left-0 md:top-0 md:bottom-0 text-black primary-gradient tracking-wider font-righteous md:h-[270px] text-lg uppercase rounded-md hover:rounded-lg' 
          onClick={() => scroll('back')}
      >
          <FaArrowLeft />
      </button>
        
        {/* Slider Content */}
        <div ref={sliderRef} className="slider sm:order-1 md:mx-16 mx-0" onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {general_featured.map(item => (
            <div key={item.title} className="text-white md:h-[270px] h-[455px] md:w-1/2 w-72 bg-gray-700 md:mb-10 mb-0 article rounded-xl">
              <div 
                className="h-full rounded-xl md:w-auto w-[100%]"
                style={{ 
                  background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
                  padding: '0.1rem',
                }}
              >
                <div className='bg-gray-800 h-full md:w-[540px] w-72 rounded-xl flex flex-col md:flex-row'> {/* Adjusted here */}
                  <div className='bg-quote-gradient flex items-center justify-center md:w-1/4 w-72 rounded-t-xl md:rounded-l-xl md:h-auto h-20'> 
                    {renderIcon(item.icon)}
                  </div>

                  <div className='relative flex flex-col p-6 md:w-[550px] w-72'>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className='absolute top-12 left-8 right-8 md:text-xl text-lg whitespace-normal'>{item.title}</a>
                    <p className='absolute md:top-28 top-[135px] left-8 right-8 whitespace-normal text-gray-300 md:text-base text-sm'>{item.description}</p>
                    <div className='absolute md:bottom-4 bottom-2 mb:mt-auto mt-3 left-8 w-16 py-1 text-center text-sm bg-white text-black rounded-lg'>{item.form}</div>
                    <a href={item.link} target="_blank" className='absolute right-4 md:bottom-4 md:top-[215px] top-80 text-black primary-gradient tracking-wider font-righteous py-1 text-lg uppercase rounded-md hover:rounded-lg px-6'>Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Next Button */}
        <button 
          className='md:mt-0 mt-5 flex justify-center items-center mobile-btn mobile-btn-next md:py-0 md:w-auto w-[100%] py-2 px-2 md:px-4 md:absolute md:right-0 md:top-0 md:bottom-0 text-black primary-gradient tracking-wider font-righteous md:h-[270px] text-lg uppercase rounded-md hover:rounded-lg' 
          onClick={() => scroll('next')}
      >
          <FaArrowRight />
      </button>

      </div>
    </div>


    <div className='md:mx-24 mx-8'>
    <h2 className='md:text-4xl text-2xl text-white font-righteous mb-6 md:mt-4 mt-16'>Our handpicked content</h2>
    <div className="relative">
        
        {/* Slider Content */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center w-full">
          {general_standard.map(item => (
            <div key={item.title} className="text-white bg-gray-700 mb-10 article rounded-xl">
              <div 
                className="rounded-xl md:w-[20vw] w-full mx-auto"
                style={{ 
                  background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
                  padding: '0.1rem',
                }}
              >
                <div className='bg-gray-800 w-full rounded-xl'>
                  <div className='bg-quote-gradient flex items-center justify-center w-full h-32 rounded-xl text-white'> 
                    {renderIcon(item.icon)}
                  </div>

                  <div className='relative flex flex-col p-6 md:h-[420px] h-[250px]'>
                  <div>
                    <div className='absolute top-8 left-6 w-16 py-1 text-center text-sm bg-white text-black rounded-lg'>{item.form}</div>
                      <div className="mt-14"> {/* Fixed margin-top to ensure the title always starts at the same line */}
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-lg whitespace-normal'>{item.title}</a>
                        <p className='whitespace-normal text-gray-300 top-44 absolute hidden md:block'>{item.description}</p>
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

export default ContentLibrary;
