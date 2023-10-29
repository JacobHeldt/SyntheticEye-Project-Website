import React from 'react'
import aiimage from '../assets/aigeneratedimage.jpeg'
import aiface from '../assets/aigeneratedface.jpeg'
import aiaudio from '../assets/aigeneratedautio.jpeg'
import aitext from '../assets/aigeneratedtext.jpeg'
import aideepfake from '../assets/aigenerateddeepfake.jpeg'
import aletheia from '../assets/models/aletheia.png'
import argus from '../assets/models/argus.png'
import hermes from '../assets/models/hermes.png'
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import { BsLinkedin } from 'react-icons/bs'

const Models = () => {
  const navigate = useNavigate();

  const handleOpenPopupAletheia = () => {
    navigate('/aletheia');
  };

  const handleOpenPopupArgus = () => {
    navigate('/argus');
  };

  return (


    // Image Detector


    <div className='font-poppins relative' id="models">
             <div className='absolute right-1/3 z-10 mt-[-50px]'>
        <div className='blue__gradient h-52 w-80'></div>
        </div>
        <div className='absolute right-1/2 z-10 mt-[800px]'>
          <div className='darkblue__gradient h-64 w-64'></div>
        </div>
        <div className='absolute right-1/2 z-10'>
          <div className='darkblue__gradient h-64 w-64'></div>
        </div>

      <div className='flex justify-center text-center '>
        <div>
          <h1 className='font-righteous text-white text-6xl tracking-wide mb-1'>The Models</h1>
          <h3 className='text-gray-300 tracking-wide font-poppins font-light'>The invisible power behind our project</h3>
        </div>
      </div>

    


      {/* Face Detector */}


      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 flex flex-row justify-center space-x-8'>
      <div 
          className="md:h-[540px] h-48 w-1/3 md:rounded-3xl rounded-tl-3xl rounded-tr-3xl z-50"
          style={{ 
            background: 'linear-gradient(to right, #33FF9C, #32ffd6, #33F5FF)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-tr-3xl rounded-tl-3xl md:p-8 p-4 font-poppins items-center justify-center flex flex-col">
        <img src={aletheia} className='h-36'></img>
        <div>
        <div className='w-full text-center text-4xl mt-4 text-white'>Aletheia</div>
        <div className='w-full text-center text-xl font-secondary'>AI-Face Detector</div>
        <div className='font-light text-base mt-2 text-white mb-6'>Aletheia, named after the Greek goddess of truth, is our AI model that differentiates real human faces from AI-generated ones using advanced machine learning techniques.</div>
        <Button handleClick={handleOpenPopupAletheia} text="Try it" style={{ zIndex: 5000 }} className="text-black"/>
        </div>
        </div>
        </div>
        


        <div 
          className="md:h-[540px] h-48 w-1/3 md:rounded-3xl rounded-tl-3xl rounded-tr-3xl z-50"
          style={{ 
            background: 'linear-gradient(to right, #33FF9C, #32ffd6, #33F5FF)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-tr-3xl rounded-tl-3xl md:p-8 p-4 font-poppins items-center justify-center flex flex-col">
        <img src={argus} className='h-36'></img>
        <div>
        <div className='w-full text-center text-4xl mt-4 text-white'>Argus</div>
        <div className='w-full text-center text-xl font-secondary'>AI-Image Detector</div>
        <div className='font-light text-base mt-2 text-white mb-6'>Argus, named after the all-seeing giant from Greek mythology, is our AI model that identifies various types of AI-generated images using cutting-edge machine learning.</div>
        <Button handleClick={handleOpenPopupArgus} text="Try it" style={{ zIndex: 5000 }} className="text-black"/>
        </div>
        </div>
        </div>

        <div 
          className="md:h-[540px] h-48 w-1/3 md:rounded-3xl rounded-tl-3xl rounded-tr-3xl z-50"
          style={{ 
            background: 'linear-gradient(to right, #33FF9C, #32ffd6, #33F5FF)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-tr-3xl rounded-tl-3xl md:p-8 p-4 font-poppins items-center justify-center flex flex-col">
        <img src={hermes} className='h-36'></img>
        <div>
        <div className='w-full text-center text-4xl mt-4 text-white'>Hermes</div>
        <div className='w-full text-center text-xl font-secondary'>AI-Text Detector</div>
        <div className='font-light text-base mt-2 text-white mb-6'>Hermes, inspired by the Greek messenger god of speed and communication, is our AI model for distinguishing genuine human-written text from AI-generated content using machine learning.</div>
        <div className='primary-gradient tracking-wider font-righteous  md:px-9 md:py-2 text-lg z-50 uppercase rounded-md hover:rounded-lg w-52 py-1 text-balck opacity-70'>
          In Progress
        </div>
        </div>
        </div>
        </div>
        

      </div>


    </div>
  )
}

export default Models