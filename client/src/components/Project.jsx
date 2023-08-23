import React from 'react'
import grainient from '../assets/grainient.webp'
import grainient2 from '../assets/grainient2.webp'
import grainient3 from '../assets/grainient3.webp'

const Project = () => {
  return (
    <div className='font-poppins' id="project">
             <div className='absolute right-1/3 z-[0] mt-[-50px]'>
        <div className='blue__gradient md:h-52 md:w-80 h-40 w-64'></div>
        </div>
        <div className='absolute right-1/2 z-[0] mt-[800px]'>
          <div className='darkblue__gradient h-52 w-52'></div>
        </div>
     <div className='absolute right-1/3 z-[0] mt-[-50px]'>
        <div className='blue__gradient md:h-52 md:w-80 h-40 w-64'></div>
      </div>
      <div className='absolute right-1/2 z-[0] mt-[500px]'>
        <div className='darkblue__gradient h-52 w-52'></div>
      </div>
      <div className='absolute right-1/2 z-[0]'>
          <div className='darkblue__gradient h-52 w-52'></div>
        </div>
      <div className='flex justify-center text-center '>
        <div>
          <h1 className='font-righteous text-white md:text-6xl text-5xl tracking-wide mb-1 z-10'>The Project</h1>
          <h3 className='text-gray-300 tracking-wide font-poppins font-light z-10'>What we want to achieve</h3>
        </div>
      </div>

      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 flex space-x-2 z-10'>
        <div 
          style={{  
            backgroundImage: `url(${grainient})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="z-10 md:w-1/3 w-[36%] md:h-60 h-96 flex items-center justify-center text-center md:text-4xl text-2xl font-bold font-poppins rounded-3xl p-5"
        >
          Our Goal
        </div>
        <div 
          className="md:h-60 h-96 md:w-2/3 w-[64%] rounded-3xl z-10"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >
        <div className="z-10 h-full w-full md:text-lg text-sm md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
        Our goal is to develop a comprehensive application that detects and distinguishes AI-generated content from human-generated content across various media formats, starting with images and expanding to video, text, and audio. Thus enabling anyone to recognize AI-generated content and combat the spread of misinformation in the digital world.
        </div>
        </div>
      </div>


      <div className='md:ml-36 z-10 md:mr-36 ml-8 mr-8 mt-10 flex space-x-2'>
      <div 
          className="md:h-60 h-76 md:w-2/3 w-[64%] rounded-3xl z-10"
          style={{ 
            background: 'linear-gradient(to right, #33FF9C, #32ffd6, #33F5FF)', 
            padding: '0.1rem',
          }}
        >
        <div className="z-10 h-full w-full md:text-lg text-sm md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
        We want to develop an advanced and user-friendly application, that has the ability to easily detect AI-generated content. It will incorporate cutting-edge detection models and provide a seamless experience for users, enabling them to make informed decisions.
        </div>
        </div>
        <div 
          style={{  
            backgroundImage: `url(${grainient2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="z-10 md:w-1/3 w-[36%] md:h-60 h-80 flex items-center justify-center text-center md:text-4xl text-2xl font-bold font-poppins rounded-3xl p-5"
        >
          Final Product
        </div>

      </div>


      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-10 flex space-x-4 z-10'>
        <div 
          style={{  
            backgroundImage: `url(${grainient3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="z-10 md:w-1/3 w-[36%] md:h-60 h-76 flex items-center justify-center text-center md:text-4xl text-2xl font-bold font-poppins rounded-3xl p-5"
        >
          The Steps Involved
        </div>
        <div 
          className="md:h-60 h-76 w-2/3 rounded-3xl z-10"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >
        <div className="z-10 h-full w-full md:text-lg text-sm md:tracking-wide tracking-tight  bg-gray-800 rounded-3xl md:p-6 p-4 text-white font-poppins flex items-center justify-center">
        Specialized models are built for images, videos, text, and audio using machine learning and deep learning methods. Diverse datasets are acquired and utilized to train the detection models, enhancing their accuracy and reliability.
        </div>
        </div>
      </div>



    </div>

    
  )
}

export default Project